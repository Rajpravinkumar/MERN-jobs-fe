import { useState, lazy, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import { USER_API_END_POINT } from "../../utils/constant";

// Lazy load components
const Logo = lazy(() => import("../Shared/Logo"));

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: null,
  });

  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullname", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phone);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("role", formData.role);

    if (formData.file) {
      formDataToSend.append("file", formData.file); // Ensure file key matches backend
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Signup failed!";
      window.alert(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Input fields configuration
  const inputFields = [
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
      placeholder: "Enter your full name",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Phone Number",
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone number",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-[url(./auth/bg_img.png)] p-6 min-h-screen">
      <div className="flex gap-6 bg-white shadow-lg p-6 rounded-lg w-full max-w-3xl max-h-[90vh]">
        {/* Left Side - Image */}
        <div className="hidden md:flex justify-center items-center bg-[url(./auth/img2.svg)] bg-purple-200 bg-cover bg-center p-4 rounded-2xl w-1/2">
          <img
            src="./auth/left_img.png"
            alt="signup-illustration"
            className="rounded-2xl w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3">
          {/* Sign Up Title and Lazy Loaded Logo */}
          <div className="flex items-center mb-4 w-full">
            <div className="flex-grow">
              <h2 className="font-bold text-[#000000] text-2xl">Sign Up</h2>
            </div>
            <Suspense
              fallback={
                <div className="bg-gray-200 rounded-full w-10 h-10 animate-pulse"></div>
              }
            >
              <Logo className="ml-4 w-auto h-10" />
            </Suspense>
          </div>

          <form
            className="mt-4"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {/* Dynamically Rendered Input Fields */}
            {inputFields.map((field, index) => (
              <div key={index} className="mb-3">
                <label className="block text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                  required
                />
              </div>
            ))}

            {/* Role Selection & Profile Upload */}
            <div className="flex items-center gap-6 mb-3">
              {/* Radio Buttons */}
              <div className="flex gap-4">
                {["student", "recruiter"].map((role) => (
                  <label key={role} className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </label>
                ))}
              </div>

              {/* Profile Upload */}
              <div className="flex items-center gap-1">
                <label className="font-medium text-black text-sm">
                  Profile
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="px-1 py-0.5 border rounded w-28 text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 py-2 rounded-lg w-full text-white cursor-pointer"
            >
              {loading ? "Please wait..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-purple-600 cursor-pointer"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
