import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); // Add user type (e.g., student, hostel owner, etc.)
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // You will add your API call logic here later
    if (!name || !email || !password || !userType) {
      setError("Please fill in all fields.");
    } else {
      // For now, simulate successful signup
      console.log("Signing up with", name, email, password, userType);
      // Navigate to a new page after signup (you can customize this)
      navigate("/login"); // Or any other route
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up for HostelDekho</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User Type</label>
            <select
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="hostel-owner">Hostel Owner</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
