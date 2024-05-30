import React, { useState } from "react";

const Technology = () => {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const handleMouseEnter = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = true;
    setFlipped(newFlipped);
  };

  const handleMouseLeave = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = false;
    setFlipped(newFlipped);
  };

  const features = [
    {
      frontImage: "accuracy.png",
      frontTitle: "HIGH ACCURACY DIAGNOSTIC",
      frontDescription: "Downy Mildew | Powdery Mildew | Leaf Roll *",
      backImage: "california.png",
      backText: "Napa Valley",
    },
    {
      frontImage: "robot.png",
      frontTitle: "SMART ROBOT",
      frontDescription: "Real-time diagnosis | No internet | Autonomous",
      backImage: "new_york.png",
      backText: "Finger Lakes",
    },
    {
      frontImage: "rocket.png",
      frontTitle: "TESTED IN FIELDS",
      frontDescription: "3x Finger Lakes, NY | 2x Napa, CA | 1x XX, SD **",
      backImage: "south_dakota.png",
      backText: "Sioux City",
    },
    {
      frontImage: "partnership.png",
      frontTitle: "PARTNERSHIPS",
      frontDescription: (
        <>
          <img
            src="cornell_cals.png"
            alt="Cornell CALS Logo"
            className="w-8 inline-block mr-2"
          />
          <img
            src="usda.png"
            alt="USDA Logo"
            className="w-8 inline-block mr-2"
          />
          <img src="nasa.png" alt="NASA Logo" className="w-8 inline-block" />
        </>
      ),
      backText: "Various Locations",
    },
  ];

  return (
    <section id="technology" className="py-16 bg-lightCream dark:bg-darkBlue">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="prototype.png"
              alt="Prototype Image"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-xl mt-4 text-darkBlue dark:text-lightCream">
              VineScout v2
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-4xl font-bold text-darkBlue dark:text-lightCream mb-4">
              our <span className="text-primary-700">technology</span>
            </h2>
            <p className="text-2xl text-darkBlue dark:text-lightCream mb-8">
              a game-changing vineyard disease scouting robot
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-500 transform ${
                    flipped[index] ? "rotate-y-180" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="feature-content h-full w-full">
                    <div
                      className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center ${
                        flipped[index] ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <img
                        src={feature.frontImage}
                        alt={feature.frontTitle}
                        className="h-16 mb-4"
                      />
                      <h3 className="text-xl font-semibold text-center text-darkBlue dark:text-lightCream">
                        {feature.frontTitle}
                      </h3>
                      <p className="text-center text-darkBlue dark:text-lightCream">
                        {feature.frontDescription}
                      </p>
                    </div>
                    <div
                      className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center ${
                        flipped[index] ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={feature.backImage}
                        alt={feature.backText}
                        className="h-16 mb-4"
                      />
                      <p className="text-center text-darkBlue dark:text-lightCream">
                        {feature.backText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
