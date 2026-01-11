import React from 'react';
import '../styles/Events.css';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Events() {
  const events = [
    {
      id: 1,
      title: "Live Music Friday",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      description: "Join us for live acoustic music while enjoying your favourite drinks and food. Local artists perform in our cozy cafe setting.",
      recurring: true
    },
    {
      id: 2,
      title: "Saturday Brunch Special",
      date: "Every Saturday",
      time: "10:00 AM - 2:00 PM",
      description: "Start your weekend right with our special brunch menu featuring fresh, locally-sourced ingredients and bottomless coffee.",
      recurring: true
    },
    {
      id: 3,
      title: "Community Coffee Morning",
      date: "First Wednesday of each month",
      time: "9:00 AM - 11:00 AM",
      description: "A chance for the Glanmire community to come together. Enjoy discounted coffee and pastries while meeting your neighbours.",
      recurring: true
    }
  ];

  return (
    <div className="eventsContainer">
      <div className="eventsHeader">
        <h1>Events at Balance</h1>
        <p className="tagline">Join us for great food, music, and community</p>
      </div>

      <div className="eventsContent">
        <div className="eventsGrid">
          {events.map((event) => (
            <div key={event.id} className="eventCard">
              <div className="eventIcon">
                <EventIcon />
              </div>
              <h3>{event.title}</h3>
              <div className="eventDetails">
                <div className="eventDetail">
                  <LocationOnIcon />
                  <span>{event.date}</span>
                </div>
                <div className="eventDetail">
                  <AccessTimeIcon />
                  <span>{event.time}</span>
                </div>
              </div>
              <p className="eventDescription">{event.description}</p>
              {event.recurring && (
                <span className="recurringBadge">Recurring Event</span>
              )}
            </div>
          ))}
        </div>

        <div className="eventsInfo">
          <h2>Want to Host an Event?</h2>
          <p>
            Balance Cafe is available for private events, birthday parties, and community gatherings.
            Contact us to discuss how we can make your event special.
          </p>
          <a href="tel:+353214567890" className="contactButton">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Events;
