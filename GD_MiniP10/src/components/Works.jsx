import React from "react";

const Works = () => {
  return (
    <section className="works-section">
      <div className="works-container">

        <div className="works-left">
          <h1 className="works-title">The Upside Garden</h1>
          <div className="works-subtitle">
            <h2 className="works-highlight">
              Where petals rise and roots remember the sky.
            </h2>
          </div>
          <p className="works-desc">
            A dreamscape where gravity is reversed, and flowers bloom mid-air.
            Time tiptoes, light lingers, and silence sings.
          </p>
        </div>
        
        <div className="works-right">
        <img src="/img/upside-garden.png" alt="" className="works-img" />

        </div>
      </div>
    </section>
  );
};

export default Works;
