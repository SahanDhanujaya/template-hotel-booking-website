import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import the custom Alert component and its type definition
import Alert, { type AlertLevel } from "../../components/customAlert/Alert";
import { supabase } from "../../config/supabase";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
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

  // Helper method to display custom alerts
  const triggerAlert = (message: string, level: AlertLevel) => {
    setAlertState({ isOpen: true, message, level });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Intercept with the custom alert component instead of browser alert()
    if (registerData.password !== registerData.confirmPassword) {
      triggerAlert("Passwords do not match! Please check and try again.", "error");
      return;
    }

    if (!registerData.agreeToTerms) {
      triggerAlert("You must agree to the terms and conditions to proceed.", "warning");
      return;
    }
    const response = await supabase.auth.signUp({
      email: registerData.email,
      password: registerData.password,
      options: {
        data: {
          full_name: registerData.fullName,
          role: "user",
        },
        emailRedirectTo: `${window.location.origin}/auth/verify`, // Use the current URL as the redirect URL
      }
    });

    if (response.error) {
      triggerAlert(response.error.message, "error");
      return;
    }
    triggerAlert("Account created successfully! Welcome aboard.", "success");
  };

  return (
    <>
      {/* Custom Alert Notification banner overlayed at top-right */}
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
                Start your journey
              </span>
              <h2 className="text-[24px] font-semibold tracking-tight text-zinc-900">
                Create your account
              </h2>
            </div>

            {/* Interactive Form Content Box */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 text-left">
              {/* Full Name Entry Node */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[12.5px] font-medium text-zinc-600">
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={registerData.fullName}
                  onChange={handleInputChange}
                  placeholder="Jane Perera"
                  required
                  className="w-full bg-zinc-50 text-[13.5px] text-zinc-900 placeholder-zinc-400 px-3.5 py-2.5 rounded-lg border border-zinc-200 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                />
              </div>

              {/* Email Entry Node */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[12.5px] font-medium text-zinc-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={registerData.email}
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
                  value={registerData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-zinc-50 text-[13.5px] text-zinc-900 placeholder-zinc-400 px-3.5 py-2.5 rounded-lg border border-zinc-200 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                />
              </div>

              {/* Confirm Password Entry Node */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" className="text-[12.5px] font-medium text-zinc-600">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-zinc-50 text-[13.5px] text-zinc-900 placeholder-zinc-400 px-3.5 py-2.5 rounded-lg border border-zinc-200 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                />
              </div>

              {/* Terms and Agreements Checkbox Block */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={registerData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="w-3.5 h-3.5 rounded border-zinc-300 text-teal-700 focus:ring-teal-600 accent-teal-700 cursor-pointer"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-[12.5px] text-zinc-500 select-none cursor-pointer hover:text-zinc-700 transition-colors"
                >
                  I agree to the terms & conditions
                </label>
              </div>

              {/* Action Interactive Execution Trigger Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-8 py-2.5 bg-teal-700 text-white text-[13.5px] font-medium rounded-lg transition-all duration-200 hover:bg-teal-800 active:scale-[0.98] text-center cursor-pointer"
                >
                  Create account
                </button>
              </div>

              {/* Divider Node */}
              <div className="text-center text-xs text-zinc-400 pt-1">
                <span className="inline-block w-full border-b border-zinc-100"></span>
              </div>

              {/* Login Now Link */}
              <div className="text-center text-[12.5px] text-zinc-500">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-teal-700 hover:text-teal-800 transition-colors font-medium ml-1">
                  Sign in
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Register;