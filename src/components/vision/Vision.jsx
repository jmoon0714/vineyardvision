import React from "react";

const Vision = () => {
  return (
    <section
      id="vision"
      className="relative py-16 bg-lightCream dark:bg-darkBlue"
    >
      {/* Video Background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="relative w-full max-w-screen-xl">
          <video
            className="w-full h-full object-cover"
            src="agtech_vid.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      <div className="relative max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Left Column - Title and Content */}
        <div className="relative z-10">
          <div className="sticky top-20 bg-lightCream bg-opacity-95 dark:bg-darkBlue dark:bg-opacity-95 p-4 rounded-lg mb-8">
            <div className="text-center mb-2">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-lightCream mb-4">
                Our Vision
              </h2>
              <h3 className="text-xl text-gray-700 dark:text-gray-300">
                Manage Vineyard Health with{" "}
                <span className="text-primary-700 font-semibold">
                  Precision
                </span>
              </h3>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg shadow-lg w-64 h-64 mx-auto flex flex-col justify-center items-center">
              <img
                src="accuracy.png"
                alt="Precision Data Icon"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-lightCream text-center">
                Precision Data
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
                High-accuracy diagnostics for every plant.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg shadow-lg w-64 h-64 mx-auto flex flex-col justify-center items-center">
              <img
                src="advanced_systems.png"
                alt="Advanced Systems Icon"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-lightCream text-center">
                Advanced Systems
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
                State-of-the-art camera systems and AI software.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg shadow-lg w-64 h-64 mx-auto flex flex-col justify-center items-center">
              <img
                src="rocket.png"
                alt="Unmatched Insights Icon"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-lightCream text-center">
                Unmatched Insights
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
                Real-time data and comprehensive vineyard insights.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Transparent Background */}
        <div className="relative z-10"></div>
      </div>
    </section>
  );
};

export default Vision;
