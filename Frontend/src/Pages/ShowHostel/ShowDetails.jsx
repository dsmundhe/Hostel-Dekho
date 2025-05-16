import React from "react";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";

// Utility to get 3 random unique images
const getRandomImages = (imagesArray, count) => {
  const shuffled = [...imagesArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ShowDetails = () => {
  const data = useSelector((val) => val.hostelDekho.data);

  // Array of 15 default images
  const defaultImages = [
    "https://i.pinimg.com/736x/77/14/88/7714880e3c83f70653ef0598776b4a92.jpg",
    "https://i.pinimg.com/736x/92/05/34/920534468eea87bf96069ad79564bdac.jpg",
    "https://i.pinimg.com/736x/bd/c6/5d/bdc65d05d312d0894b03c4be0f6ce74e.jpg",
    "https://i.pinimg.com/736x/76/dd/5b/76dd5b1ad8026ed8503a7bbde0c72b57.jpg",
    "https://i.pinimg.com/736x/28/a9/0b/28a90bda65d1b5b4f3e832eb03f750cb.jpg",
    "https://i.pinimg.com/736x/f7/dd/f2/f7ddf2b70b1ea2cb401b06ba729558a7.jpg",
    "https://i.pinimg.com/736x/f0/ae/68/f0ae68068d67a87e1aef427091b04c35.jpg",
    "https://i.pinimg.com/736x/7e/c3/48/7ec3480b554ab38b70748dae5fc15cb6.jpg",
    "https://i.pinimg.com/736x/cb/a8/61/cba861ce055ddba6cae595eac2884263.jpg",
    "https://i.pinimg.com/736x/52/32/b2/5232b2f0b5e884b8ec79362ab6086c64.jpg",
    "https://i.pinimg.com/736x/42/b6/8c/42b68cd2490f7a0467234a71b4d4d6fb.jpg",
    "https://i.pinimg.com/736x/f6/4e/16/f64e1693e713fd5cadee9e35619ae894.jpg",
    "https://i.pinimg.com/736x/62/1f/22/621f223206a4e811c3e963ba28ef41bb.jpg",
    "https://i.pinimg.com/736x/e4/2b/cb/e42bcb0a538cb5206427f9f2f51e1c38.jpg",
    "https://i.pinimg.com/736x/a4/ab/d3/a4abd355d38369041c263b97a8d712a7.jpg",
  ];

  // Get 3 random images from the defaultImages
  const randomImages = getRandomImages(defaultImages, 3);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-6xl transition-transform duration-200 hover:shadow-2xl mt-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Explore Your Hostel
        </h1>

        <p className="text-gray-600 text-lg mb-12 text-center leading-relaxed max-w-3xl mx-auto">
          Get detailed information about your preferred hostel including its name, location, nearby colleges, and contact information. We aim to provide a safe, clean, and welcoming environment.
        </p>

        {data && data.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={data[0].imageLink}
              alt={data[0].name}
              className="w-full h-72 md:h-80 object-cover rounded-lg border border-gray-200 shadow-md"
            />

            <div className="space-y-5 text-gray-800 text-lg">
              <h2>
                <span className="font-semibold">Hostel Name:</span>{" "}
                <span className="text-red-600 font-bold">{data[0].name}</span>
              </h2>
              <p>
                <span className="font-semibold">Contact:</span> {data[0].contact}
              </p>
              <p>
                <span className="font-semibold">City:</span> {data[0].city}
              </p>
              <p>
                <span className="font-semibold">Nearby College:</span> {data[0].college}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-600 font-semibold mt-8 text-xl">
            No hostel data available to display.
          </p>
        )}

        {/* Default Hostel Views (Random 3) */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            More Hostel Views
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {randomImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Hostel view ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Book Now Button */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
            Book Now <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
