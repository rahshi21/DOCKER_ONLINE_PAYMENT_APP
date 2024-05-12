import React from 'react';
import Navbar from './Navbar';
import './Events.css';

export default function Events() {
  // Dummy data for sponsors
  const sponsors = [
    { id: 1, name: "ABC Corporation", logo: "sponsor.jpg" },
    { id: 2, name: "XYZ Enterprises", logo: "sponsor.jpg" },
    { id: 3, name: "PQR Solutions", logo: "sponsor.jpg" }
  ];
  

  // Dummy data for event photos
  const eventPhotos = [
    "sponsor.jpg",
    "sponsor.jpg",
    "sponsor.jpg",
    "sponsor.jpg"
  ];

  return (
    <>
      <Navbar />
      <div className="events-container">
        <section className="event-section">
          <div className="event-details">
            <h1 className="event-title">KEC Swaram Annual Event</h1>
            <p className="event-description">
              Join us for an unforgettable evening at the KEC Swaram Annual
              Event! Experience the magic as we showcase talents from various
              domains. This highly anticipated event brings together students,
              faculty, and distinguished guests for an evening of celebration
              and entertainment.
            </p>
            <ul className="event-info">
              <li><strong>Date:</strong> [Insert Date]</li>
              <li><strong>Time:</strong> 3:00 PM to 8:00 PM</li>
              <li><strong>Venue:</strong> KEC Convention Center</li>
              <li><strong>Ticket:</strong> Online Purchase Required</li>
              <li><strong>Special Guests:</strong> 10 to 15 Celebrities</li>
            </ul>
          </div>
        </section>

        <section className="schedule-section">
          <h2 className="section-title">Event Schedule</h2>
          <ul className="schedule-list">
            {/* Add dynamic schedule items here */}
          </ul>
        </section>

        <section className="highlights-section">
          <h2 className="section-title">Event Highlights</h2>
          <ul className="highlights-list">
            {/* Add dynamic highlights here */}
          </ul>
        </section>

        <section className="sponsor-section">
          <h2 className="section-title">Our Sponsors</h2>
          <div className="sponsor-list">
            {sponsors.map(sponsor => (
              <div key={sponsor.id} className="sponsor-item">
                <img src={sponsor.logo} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-title">Event Gallery</h2>
          <div className="gallery">
            {eventPhotos.map((photo, index) => (
              <img key={index} src={photo} alt={`Event Photo ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="feedback-section">
          <h2 className="section-title">Feedback</h2>
          <form className="feedback-form">
            <label htmlFor="feedback">Share your thoughts about the event:</label>
            <textarea id="feedback" name="feedback" rows="4" required></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </section>

        <section className="cta-section">
          <h2 className="section-title">Don't Miss Out! Get Your Tickets Now!</h2>
          <button className="cta-button">Purchase Tickets</button>
        </section>

        <footer className="footer">
          <p className="text-footer">
            Copyright © [Year] KEC Swaram. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
