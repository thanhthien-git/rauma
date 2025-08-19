import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function RegisterPage() {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4 opacity-0 animate-fade-in-down">
        Welcome to RAUMA Merce!
      </h2>

      {/* Register Form */}
      <form className="space-y-6 ">
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800 tracking-wide"
          >
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-800 tracking-wide"
          >
            Phone number
          </label>
          <Input
            id="phone"
            name="phone"
            type="phone"
            placeholder="Enter your phone"
            required
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

        {/* Confirm Password */}
        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold text-gray-800 tracking-wide"
          >
            Re-enter your password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Sign up
        </button>
      </form>
      {/* Login  */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gray-900 font-bold hover:text-gray-700 transition-colors duration-200 underline decoration-gray-400 hover:decoration-gray-700 underline-offset-2"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
