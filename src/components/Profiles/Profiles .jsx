import React from "react";

function Profiles() {
  return (
    <div className="min-h-screen bg-grayhttps://i.pravatar.cc/150?img=12-100 flex justify-center items-center">

      {/* Profile Card */}
      <div className="bg-white w-80 rounded-xl shadow-lg overflow-hidden">

        {/* Cover */}
        <div className="h-24 bg-blue-600"></div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src=""
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover -mt-12"
          />
        </div>

        {/* Profile Details */}
        <div className="text-center px-6 pb-6">

          <h2 className="text-2xl font-bold text-gray-800 mt-3">
            Alcious
          </h2>

          <p className="text-gray-500">
            Frontend Developer
          </p>

          <p className="text-gray-600 text-sm mt-3">
            React Developer passionate about building
            modern and responsive web applications.
          </p>

          {/* Details */}
          <div className="mt-5 space-y-2 text-left">

            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              Alcious@example.com
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Location:</span>{" "}
              India
            </p>

          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-5 hover:bg-blue-700 transition">
            View Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profiles;