"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-3 opacity-0 animate-fade-in-down">
        Welcome back!
      </h2>
      <div className="text-left mb-8 opacity-0 animate-fade-in-up">
        <p className="text-lg text-gray-600 leading-relaxed">
          Please sign in to your account to continue
        </p>
      </div>
      {/* Login Form */}
      <div className="space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-800 tracking-wide"
          >
            Email / Phone number
          </label>
          <Input
            id="username"
            name="username"
            required
            placeholder="Enter your email or phone number"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800 tracking-wide"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Remember me + Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-md border-2 border-gray-300 text-gray-900 focus:ring-gray-800 focus:ring-2 transition-all duration-200 group-hover:border-gray-500"
            />
            <span className="font-medium">Remember me</span>
          </label>
          <a
            href="/forgot-password"
            className="text-sm text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200 underline decoration-gray-300 hover:decoration-gray-600 underline-offset-2"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Sign in
        </button>
      </div>
      {/* Register */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-gray-900 font-bold hover:text-gray-700 transition-colors duration-200 underline decoration-gray-400 hover:decoration-gray-700 underline-offset-2"
          >
            Create one now
          </Link>
        </p>
      </div>
    </>
  );
}
