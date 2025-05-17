import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/showHostelSlice/showHostelSlice";

const HostelManagementPage = () => {
  const dispatch = useDispatch();

  const [hostels, setHostels] = useState([]);
  const [search, setSearch] = useState("");
  const [newHostel, setNewHostel] = useState({
    name: "",
    city: "",
    college: "",
    imageLink: "",
    contact: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await axios.get("http://localhost:4000/hostel/hostelsList");
      setHostels(response.data.hostels || []);
    } catch (error) {
      console.error("Error fetching hostels:", error);
      toast.error("Failed to fetch hostels");
    }
  };

  const registerHostel = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post("http://localhost:4000/hostel/register", newHostel, config);

      toast.success(response.data.msg);
      setNewHostel({
        name: "",
        city: "",
        college: "",
        imageLink: "",
        contact: "",
      });
      fetchHostels();
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to register hostel: " + error.message);
    }
  };

  const searchHostels = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/hostel/hostelbycity/${search}`);
      setHostels(response.data.hostels || []);
    } catch (error) {
      toast.error("Failed to search hostels: " + error.message);
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

      {/* Search and Register */}
      <div className="flex flex-col lg:flex-row justify-between mb-8 gap-6">
        <div className="flex items-center space-x-4 w-full lg:w-2/3">
          <input
            type="text"
            placeholder="Search by city, name, or college"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
          />
          <Button
            onClick={searchHostels}
            className="bg-blue-600 text-white p-3 rounded-lg shadow-md flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            <FaSearch />
          </Button>
        </div>
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            <FaPlusCircle className="mr-2" /> Register Hostel
          </Button>
        </div>
      </div>

      {/* Hostel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {hostels.map((hostel, index) => (
          <Card
            key={index}
            className="shadow-xl rounded-3xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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

              {hostel.imageLink && (
                <img
                  src={hostel.imageLink}
                  alt={hostel.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <div className="flex justify-between items-center">
                <Link to="/showhostel" onClick={() => dispatch(addCart(hostel))}>
                  <Button className="bg-blue-600 text-white text-sm p-2 rounded-lg hover:bg-blue-700">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-8 w-full max-w-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Register Hostel
            </h2>
            <div className="space-y-4">
              {["name", "city", "college", "imageLink", "contact"].map((field) => (
                <input
                  key={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={newHostel[field]}
                  onChange={(e) =>
                    setNewHostel({ ...newHostel, [field]: e.target.value })
                  }
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <Button
                onClick={registerHostel}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Submit
              </Button>
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toasts */}
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
};

export default HostelManagementPage;
