import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // <-- Added
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage (stored during login or signup)
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage or sessionStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Redirect to home or login page
    navigate("/");
  };

  if (!user) {
    // Loading or no user found
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  const { name, email, image, phone, location } = user;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-blue-100 "
    >
      <div className="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col items-center mt-22 p-5">
        {/* Profile Image */}
        <div className="absolute -top-16 w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img
            src={image || "https://via.placeholder.com/150"}
            alt={`${name || "User"} profile`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Details */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{name || "Username"}</h2>
          <p className="text-gray-500 text-sm mt-2">{email || "user@example.com"}</p>
        </div>

        {/* About Section */}
        <section className="mt-6 text-center max-w-xl">
          <h3 className="text-xl font-semibold text-gray-700">About</h3>
          <p className="text-gray-600 mt-2">
            Passionate about technology and learning. Always curious and eager to grow.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Contact Info</h3>
          <p className="text-gray-600 mt-2">Phone: {phone || "Not provided"}</p>
          <p className="text-gray-600">Location: {location || "Not provided"}</p>
        </section>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md transition hover:bg-blue-700"
          >
            Edit Profile
          </Button>
          <Button
            type="button"
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-xl shadow-md transition hover:bg-red-700"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
