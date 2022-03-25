import React from "react";
import "./Home.css";
import img from "./../imagess/Group.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <h3>Welcome to the fitness club !!!</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          quos ipsam aliquam, et unde eaque eveniet culpa amet. Iste, nesciunt?
        </p>
        <Link to="/register">
          <button className="home__button">Join now</button>
        </Link>
      </div>
      <div className="home__right">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Home;
