import React from "react";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative py-16 bg-lightCream dark:bg-darkBlue"
      style={{
        backgroundImage: "url('barrel_background.png')",
        repeat: "false",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-lightCream text-darkBlue p-8 rounded-lg bg-opacity-90">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">
              our <span className="text-primary-600">mission</span>
            </h2>
          </div>
          <h2 className="text-2xl mb-8">
            Vineyard disease control is{" "}
            <span className="text-primary-600 font-semibold">expensive</span>{" "}
            and{" "}
            <span className="text-primary-600 font-semibold">ineffective</span>.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <img
                src="costly_black.png"
                alt="Costly Icon"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-semibold">Costly</h3>
              <ul className="text-left space-y-2 mt-2">
                <li>
                  25% of total vineyard management cost. Highest expense
                  contributor.
                </li>
                <li>~$1B/yr spent on vineyard pesticide in U.S.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="ineffective_black.png"
                alt="Ineffective Icon"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-semibold">Ineffective</h3>
              <ul className="text-left space-y-2 mt-2">
                <li>Still, diseases induced >$5B/yr loss in U.S.</li>
                <li>Massive pesticide application.</li>
                <li>Many diseases not treatable unless spotted early on.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="few_experts_black.png"
                alt="Few Experts Icon"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-semibold">Few Experts</h3>
              <ul className="text-left space-y-2 mt-2">
                <li>Diagnosis (disease scouting) is the key.</li>
                <li>Not enough plant pathologists available.</li>
                <li>They also make mistakes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
