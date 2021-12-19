import React from "react";
import "./home.scss";

const Home = ({ handleScreenChange, active }) => {
  return (
    <div className="home">
      <div className={active ? "contentContainer active" : "contentContainer"}>
        <div className="left">
          <div className="textContainer">
            <h4>so, you want to travel to</h4>
            <h2>space</h2>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="right">
            <div className="circleContainer" onClick={() => handleScreenChange(1)}>
                <div className="bgCircle"></div>
                <div className="circle"></div>
                <h3>Explore</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
