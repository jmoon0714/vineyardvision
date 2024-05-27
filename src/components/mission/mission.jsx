import React from "react";
import "./mission.scss";

const Mission = () => {
  return (
    <section id="mission" className="container">
      <div className="mission-background">
        <div className="mission-content">
          <div className="mission-header">
            <h2>Our Mission</h2>
          </div>
          <h2>
            Vineyard disease control is{" "}
            <span className="highlight">expensive</span> and{" "}
            <span className="highlight">ineffective</span>.
          </h2>
          <div className="mission-features">
            <div className="mission-feature">
              <img src="costly_white.png" alt="Costly Icon" />
              <h3>Costly</h3>
              <ul>
                <li>
                  25% of total vineyard management cost. Highest expense
                  contributor.
                </li>
                <li>~$1B/yr spent on vineyard pesticide in U.S.</li>
              </ul>
            </div>
            <div className="mission-feature">
              <img src="ineffective_white.png" alt="Ineffective Icon" />
              <h3>Ineffective</h3>
              <ul>
                <li>Still, diseases induced >$5B/yr loss in U.S.</li>
                <li>Massive pesticide application.</li>
                <li>Many diseases not treatable unless spotted early on.</li>
              </ul>
            </div>
            <div className="mission-feature">
              <img src="few_experts_white.png" alt="Few Experts Icon" />
              <h3>Few Experts</h3>
              <ul>
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
