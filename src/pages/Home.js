import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';


function Home() {

  return (
    <div className="MainContainer">
      <div className="contentWrapper">
        <div className="greetingArea">
          Welcome to Balance Cafe Glanmire
        </div>
        
        <div className="Buttons">
          <Link to="/menu">
            <button>View Menu</button>
          </Link>
          <Link to='/about'>
          <button>Learn About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;