import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaSearch, FaPlusCircle } from "react-icons/fa"; // Adding icons for extra visual appeal
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import { addCart } from "../../features/showHostelSlice/showHostelSlice";
const HostelManagementPage = () => {

  const dispatch=useDispatch();

  const [hostels, setHostels] = useState([]);
  const [search, setSearch] = useState("");
  const [newHostel, setNewHostel] = useState({
    name: "",
    city: "",
    college: "",
    imageLink: "",
    contact: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/hostel/hostelsList"
      );
      setHostels(response.data.hostels || []);
    } catch (error) {
      console.error("Error fetching hostels:", error);
      toast.error("Failed to fetch hostels"); // Show error toast
    }
  };

  const registerHostel = async () => {
    try {
      // Retrieve the token from localStorage (or wherever it's stored)
      const token = localStorage.getItem("token");

      // Set up the headers with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make the POST request with the token in the headers
      const response = await axios.post(
        "http://localhost:4000/hostel/register",
        newHostel,
        config // Add the config to the axios call
      );

      toast.success(response.data.msg); // Success toast
      setNewHostel({
        name: "",
        city: "",
        college: "",
        imageLink: "",
        contact: "",
      });
      fetchHostels();
      setIsModalOpen(false); // Close the modal after successful registration
    } catch (error) {
      toast.error("Failed to register hostel: " + error.message); // Error toast
    }
  };

  const searchHostels = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/hostel/hostelbycity/${search}`
      );
      setHostels(response.data.hostels || []);
    } catch (error) {
      toast.error("Failed to search hostels: " + error.message); // Error toast
    }
  };

  return (
    <div className="homebox p-8 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-14">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Hostel Management
        </h1>
        <p className="text-lg text-gray-600">
          Manage hostels, search by city, name, or college with ease.
        </p>
      </section>

      {/* Search and Register Section */}
      <div className="flex flex-col lg:flex-row justify-between mb-8 gap-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 w-full lg:w-2/3">
          <input
            type="text"
            placeholder="Search by city, name, or college"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-200 ease-in-out"
          />
          <Button
            onClick={searchHostels}
            className="bg-blue-600 text-white p-3 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
          >
            <FaSearch className="text-lg" />
          </Button>
        </div>

        {/* Open Modal Button */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <Button
            onClick={() => setIsModalOpen(true)} // Open the modal
            className="bg-green-600 text-white p-4 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105"
          >
            <FaPlusCircle className="mr-2 text-xl" /> Register Hostel
          </Button>
        </div>
      </div>

      {/* Hostel List Section */}
      <div className="hostel-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {hostels.map((hostel, index) => (
          <Card
            key={index}
            className="shadow-xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
          >
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2 truncate">
                {hostel.name}
              </h2>
              <p className="text-gray-700 text-sm mb-2">
                City: <span className="font-semibold">{hostel.city}</span>
              </p>
              <p className="text-gray-700 text-sm mb-2">
                College: <span className="font-semibold">{hostel.college}</span>
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Contact: <span className="font-semibold">{hostel.contact}</span>
              </p>

              {/* Display the hostel image if available */}
              {hostel.imageLink && (
                <img
                  src={hostel.imageLink}
                  alt={hostel.name}
                  className="w-full rounded-lg shadow-md object-cover h-48 mb-4"
                />
              )}

              {/* Optional footer with extra actions or info */}
              <div className="mt-4 flex justify-between items-center">
                <Link to="/showhostel" onClick={()=>dispatch(addCart(hostel))}>
                  {" "}
                  <Button className="bg-blue-600 text-white text-sm p-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal (Popup Form) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Register Hostel
            </h2>

            {/* Form */}
            <div className="space-y-4">
              {["name", "city", "college", "imageLink", "contact"].map(
                (field) => (
                  <input
                    key={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={newHostel[field]}
                    onChange={(e) =>
                      setNewHostel({ ...newHostel, [field]: e.target.value })
                    }
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )
              )}
            </div>

            {/* Modal Buttons */}
            <div className="mt-6 flex justify-between">
              <Button
                onClick={registerHostel}
                className="bg-green-600 text-white p-3 rounded-lg"
              >
                Submit
              </Button>
              <Button
                onClick={() => setIsModalOpen(false)} // Close the modal
                className="bg-red-600 text-white p-3 rounded-lg"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default HostelManagementPage;
