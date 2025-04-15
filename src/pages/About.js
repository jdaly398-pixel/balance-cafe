import React from 'react';
import '../styles/About.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <h1>Our Story</h1>
        <p className="tagline">Food to make you Feel Good</p>
      </div>

      <div className="aboutContent">
        <div className="storySection">
          <p>
            Welcome to Balance Cafe, where great food meets community spirit in the heart of Glanmire. 
            Since opening our doors, we've been committed to serving quality food that not only tastes 
            great but makes you feel great too.
          </p>
          <p>
            Our cafe was born from a simple idea: to create a welcoming space where the community can 
            enjoy nutritious, delicious meals made with care and attention to detail.
          </p>
        </div>

        <div className="valuesGrid">
          <div className="valueCard">
            <RestaurantIcon className="valueIcon" />
            <h3>Quality First</h3>
            <p>We carefully select the finest ingredients to ensure every dish meets our high standards.</p>
          </div>

          <div className="valueCard">
            <FavoriteIcon className="valueIcon" />
            <h3>Made with Love</h3>
            <p>Every dish is prepared with care and attention to detail, ensuring the best quality.</p>
          </div>

          <div className="valueCard">
            <PeopleIcon className="valueIcon" />
            <h3>Community Focus</h3>
            <p>Proud to be part of the Glanmire community, serving and supporting our local area.</p>
          </div>
        </div>

        <div className="missionSection">
          <h2>Our Mission</h2>
          <p>
            To provide a welcoming space where quality food, excellent service, and community 
            connection come together. We believe in creating dishes that not only satisfy hunger 
            but also contribute to overall wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;