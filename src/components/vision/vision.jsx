import React from 'react';
import './vision.scss';

const Vision = () => {
  return (
    <section id="vision">
      <div className="vision-background">
        <div className="vision-content">
          <div className="vision-header">
            <h2>Our Vision</h2>
          </div>
          <h2>
            Manage Vineyard Health with <span className="highlight">Precision</span>
          </h2>
          <div className="vision-features">
            <div className="feature">
              <div className="feature-content">
                <img src="accuracy.png" alt="Precision Data Icon" />
                <div>
                  <h3>Precision Data</h3>
                  <p>High-accuracy diagnostics for every plant.</p>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <img src="accuracy.png" alt="Advanced Systems Icon" />
                <div>
                  <h3>Advanced Systems</h3>
                  <p>State-of-the-art camera systems and AI software.</p>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <img src="rocket.png" alt="Unmatched Insights Icon" />
                <div>
                  <h3>Unmatched Insights</h3>
                  <p>Real-time data and comprehensive vineyard insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
