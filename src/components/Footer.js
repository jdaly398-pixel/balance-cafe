import React from 'react';
import '../styles/Footer.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Balance+Cafe+Glanmire+Cork', '_blank');
  };

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="infoItem" onClick={handleLocationClick}>
          <LocationOnIcon />
          <span>3 Old Ct, Glanmire</span>
        </div>
        <div className="infoItem">
          <AccessTimeIcon />
          <span>Mon-Fri 8:15-4:30 | Sat 9:00-3:30</span>
        </div>
        <div className="infoItem">
          <PhoneIcon />
          <a href="tel:+35321482427">+353 21 482 4277</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;