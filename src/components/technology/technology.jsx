import React, { useState } from 'react';
import './technology.scss';

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

  return (
    <section id="technology">
      <div className="tech-content">
        <div className="tech-image">
          <img src="prototype.png" alt="Prototype Image" />
          <p>VineScout v2</p>
        </div>
        <div className="tech-details">
          <h2>
            our <span className="highlight">technology</span>
          </h2>
          <p>a game-changing vineyard disease scouting robot</p>
          <div className="tech-features">
            <div 
              className={`feature ${flipped[0] ? 'flipped' : ''}`} 
              onMouseEnter={() => handleMouseEnter(0)} 
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <div className="feature-content">
                <div className="feature-front">
                  <img src="accuracy.png" alt="High Accuracy Diagnostic Icon" />
                  <h3>HIGH ACCURACY DIAGNOSTIC</h3>
                  <p>Downy Mildew | Powdery Mildew | Leaf Roll *</p>
                </div>
                <div className="feature-back">
                  <img src="california.png" alt="California" />
                  <p>Napa Valley</p>
                </div>
              </div>
            </div>
            <div 
              className={`feature ${flipped[1] ? 'flipped' : ''}`} 
              onMouseEnter={() => handleMouseEnter(1)} 
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <div className="feature-content">
                <div className="feature-front">
                  <img src="robot.png" alt="Smart Robot Icon" />
                  <h3>SMART ROBOT</h3>
                  <p>Real-time diagnosis | No internet | Autonomous</p>
                </div>
                <div className="feature-back">
                  <img src="new_york.png" alt="New York" />
                  <p>Finger Lakes</p>
                </div>
              </div>
            </div>
            <div 
              className={`feature ${flipped[2] ? 'flipped' : ''}`} 
              onMouseEnter={() => handleMouseEnter(2)} 
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <div className="feature-content">
                <div className="feature-front">
                  <img src="rocket.png" alt="Tested in Fields Icon" />
                  <h3>TESTED IN FIELDS</h3>
                  <p>3x Finger Lakes, NY | 2x Napa, CA | 1x XX, SD **</p>
                </div>
                <div className="feature-back">
                  <img src="south_dakota.png" alt="South Dakota" />
                  <p>Sioux City</p>
                </div>
              </div>
            </div>
            <div 
              className={`feature ${flipped[3] ? 'flipped' : ''}`} 
              onMouseEnter={() => handleMouseEnter(3)} 
              onMouseLeave={() => handleMouseLeave(3)}
            >
              <div className="feature-content">
                <div className="feature-front">
                  <img src="partnership.png" alt="Partnerships" />
                  <h3>PARTNERSHIPS</h3>
                  <img src="cornell_cals.png" alt="Cornell CALS Logo" />
                  <img src="usda.png" alt="USDA Logo" />
                  <img src="nasa.png" alt="NASA Logo" />
                </div>
                <div className="feature-back">
                  <p>Various Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
