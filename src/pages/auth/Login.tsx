import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
// Import the custom Alert component and its type definition
import Alert, { type AlertLevel } from "../../components/customAlert/Alert";
import { useLoader } from "../../context/LoaderProvider";
import { Loader } from "../../components/loaders/Loader";
import type { LoginData } from "../../types/authType";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useLoader();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Alert system state initialization
  const [alertState, setAlertState] = useState<{
    isOpen: boolean;
    message: string;
    level: AlertLevel;
  }>({
    isOpen: false,
    message: "",
    level: "info",
  });

  const { login } = useAuth();

  // Helper method to display custom alerts
  const triggerAlert = (message: string, level: AlertLevel) => {
    setAlertState({ isOpen: true, message, level });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await login(loginData);

      if (result.error) {
        triggerAlert(result.error.message, "error");
        return;
      }

      if (result.data?.session?.user?.user_metadata?.email_verified === false) {
        triggerAlert("Email Not Verified!", "error");
        return;
      }
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/user");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* Custom Alert Component Injected Top Right */}
      <Alert
        isOpen={alertState.isOpen}
        message={alertState.message}
        level={alertState.level}
        onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Cool neutral canvas, consistent with the app's modern surface tokens */}
      <section className="w-full bg-[#F5F6F8] text-zinc-900 font-sans min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Soft ambient accent glow instead of a decorative pattern */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-teal-200/25 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
          {/* Animated Wrapper Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white w-full max-w-md rounded-2xl border border-zinc-200 shadow-sm p-8 sm:p-10 relative z-10"
          >
            {/* Header Typography Content */}
            <div className="text-left mb-8">
              <span className="text-[12px] font-medium text-teal-700 block mb-1.5">
                Welcome back
              </span>
              <h2 className="text-[24px] font-semibold tracking-tight text-zinc-900">
                Sign in to your account
              </h2>
            </div>

            {/* Interactive Form Content Box */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 text-left"
            >
              {/* Email Entry Node */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[12.5px] font-medium text-zinc-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-zinc-50 text-[13.5px] text-zinc-900 placeholder-zinc-400 px-3.5 py-2.5 rounded-lg border border-zinc-200 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                />
              </div>

              {/* Password Entry Node */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-[12.5px] font-medium text-zinc-600">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-zinc-50 text-[13.5px] text-zinc-900 placeholder-zinc-400 px-3.5 py-2.5 rounded-lg border border-zinc-200 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                />
              </div>

              {/* Remember Me + Forgot Password Row */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 rounded border-zinc-300 text-teal-700 focus:ring-teal-600 accent-teal-700 cursor-pointer"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-[12.5px] text-zinc-500 select-none cursor-pointer hover:text-zinc-700 transition-colors"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-[12.5px] text-teal-700 hover:text-teal-800 transition-colors font-medium">
                  Forgot password?
                </a>
              </div>

              {/* Action Interactive Execution Trigger Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-8 py-2.5 bg-teal-700 text-white text-[13.5px] font-medium rounded-lg transition-all duration-200 hover:bg-teal-800 active:scale-[0.98] text-center cursor-pointer ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Sign in
                </button>
              </div>

              {/* Divider Node */}
              <div className="text-center text-xs text-zinc-400 pt-1">
                <span className="inline-block w-full border-b border-zinc-100"></span>
              </div>

              {/* Register Now Link */}
              <div className="text-center text-[12.5px] text-zinc-500">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="text-teal-700 hover:text-teal-800 transition-colors font-medium ml-1"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Login;