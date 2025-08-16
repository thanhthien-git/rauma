"use client";

import { RefreshCcw, ShieldCheck, Tag, Truck } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen">
      {/* LEFT - Black Background + Slogan */}
      <div className="hidden lg:flex flex-1 bg-black text-white relative overflow-hidden px-20">
        <div className="flex flex-col justify-center h-full px-8 max-w-lg space-y-8 z-10">
          {/* Slogan */}
          <div className="space-y-4">
            <Feature letter="R" text="eliable products" />
            <Feature letter="A" text="ffordable value" />
            <Feature letter="U" text="nique style" />
            <Feature letter="M" text="odern" />
            <Feature letter="A" text="mazing" />
          </div>

          {/* Icons & Benefits */}
          <div className="flex space-x-6 pt-8">
            <div className="flex items-center space-x-2">
              <Truck className="w-6 h-6 text-gray-200" />
              <span className="text-gray-200">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="w-6 h-6 text-gray-200" />
              <span className="text-gray-200">Best Deals</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-gray-200" />
              <span className="text-gray-200">Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCcw className="w-6 h-6 text-gray-200" />
              <span className="text-gray-200">Easy Return</span>
            </div>
          </div>
        </div>

        {/* Fixed Curved divider (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3.62 35.278"
          preserveAspectRatio="none"
          className="absolute top-0 right-0 h-full w-[400px] scale-x-[-1] animate-sway"
        >
          <path
            d="M.092 0S.267 27.04 3.62 35.278H.092z"
            opacity=".2"
            fill="#ffffff"
          />
          <path
            d="M.092 0s.154 27.04 3.102 35.278H.092z"
            opacity=".2"
            fill="#ffffff"
          />
          <path
            d="M.092 0s.131 27.04 2.646 35.278H.092zM.092 0v35.278H0V0z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* RIGHT - White Background + Login Form */}
      <div className="flex flex-col justify-center w-full lg:w-auto lg:min-w-[640px] px-12 py-16 bg-white relative z-10">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
          {" "}
          Welcome back!{" "}
        </h2>{" "}
        <div className="w-20 h-[3px] bg-gradient-to-r from-gray-900 to-gray-700 rounded-full mb-6"></div>
        <div className="text-left mb-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Please sign in to your account to continue
          </p>
        </div>
        {/* Login Form */}
        <div className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 tracking-wide"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full h-14 rounded-2xl bg-white border-2 border-gray-200 focus:border-gray-800 focus:ring-4 focus:ring-gray-100 text-gray-900 placeholder:text-gray-400 shadow-sm transition-all duration-300 hover:border-gray-400 hover:shadow-md text-base px-4 outline-none"
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
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full h-14 rounded-2xl bg-white border-2 border-gray-200 focus:border-gray-800 focus:ring-4 focus:ring-gray-100 text-gray-900 placeholder:text-gray-400 shadow-sm transition-all duration-300 hover:border-gray-400 hover:shadow-md text-base px-4 outline-none"
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
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-gray-900 font-bold hover:text-gray-700 transition-colors duration-200 underline decoration-gray-400 hover:decoration-gray-700 underline-offset-2"
            >
              Create one now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ letter, text }: { letter: string; text: string }) {
  return (
    <div className="flex items-center cursor-default">
      <strong className="font-spring text-gray-100 text-6xl mr-4 drop-shadow-md">
        {letter}
      </strong>
      <span className="font-spring text-lg font-medium tracking-wide bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent animate-gradient">
        {text}
      </span>
    </div>
  );
}
