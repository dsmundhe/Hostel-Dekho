import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
  <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-500 mb-6">
    🏠 HostelDekho – Your Stay, Your Way!
  </h1>
  <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
    Say goodbye to uncertainty. With HostelDekho, explore trusted and verified hostels tailored for students and young travelers. Fast booking. Real reviews. Total peace of mind. 🌍✨
  </p>
</div>

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower every student and traveler to easily discover, explore,
              and book the best hostel suited to their needs—ensuring safety,
              comfort, and convenience.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the most trusted hostel discovery platform across India
              and beyond, delivering value, reliability, and innovation at every
              step.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              [
                "Verified Listings",
                "Every hostel on our platform is manually verified for safety and quality.",
              ],
              [
                "Smart Booking",
                "Book in minutes with our easy-to-use and mobile-friendly interface.",
              ],
              [
                "User Feedback",
                "Make informed decisions with real reviews from fellow users.",
              ],
              [
                "Responsive Design",
                "Enjoy a consistent experience across mobile, tablet, and desktop.",
              ],
              [
                "Modern Interface",
                "Clean UI designed for simplicity and focus.",
              ],
              [
                "Secure Platform",
                "Protected login and data encryption ensures your privacy.",
              ],
            ].map(([title, desc], index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-left"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              [
                "Dipak Mundhe",
                "Backend & Database",
                "https://i.pinimg.com/736x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg",
              ],
              [
                "Aashvi Tekade",
                "Frontend Developer",
                "https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg",
              ],
              [
                "Amogh Nagarkar",
                "System Design",
                "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
              ],
              [
                "Maithili Ghodmare",
                "Backend Dev",
                "https://i.pinimg.com/736x/6b/7a/9e/6b7a9e13a02752663418e46ba464cc36.jpg",
              ],  
               [
                "Yogesh Nande",
                "Documentation",
                "https://i.pinimg.com/736x/9d/0b/1b/9d0b1b867af718e52c9187b57381de67.jpg",
              ],
              [
                "Sahil Atram",
                "Documentation",
                "https://i.pinimg.com/736x/b6/4a/17/b64a17d1f45bdc18c3c3a136220204e2.jpg",
              ],
            ].map(([name, role, img], i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transform transition duration-300"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-500">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Find your next hostel with HostelDekho
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Whether you're moving to a new city or planning a trip, we’ve got the
          right place for you.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
