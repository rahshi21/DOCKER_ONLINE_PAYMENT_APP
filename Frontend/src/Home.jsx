import React from "react";
import Navbar from "./Navbar";
import ImageSlider from './ImageSlider';
import './button.css';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for Home component

export default function Home() {
  const slides = [
    { url: "http://localhost:3000/IMAGES/1.jpg", title: "1" },
    { url: "http://localhost:3000/IMAGES/2.jpg", title: "2" },
    { url: "http://localhost:3000/IMAGES/3.jpg", title: "3" },
    { url: "http://localhost:3000/IMAGES/4.jpg", title: "4" },
    { url: "http://localhost:3000/IMAGES/5.jpg", title: "5" },
    { url: "http://localhost:3000/IMAGES/6.jpg", title: "6" },
    { url: "http://localhost:3000/IMAGES/7.jpg", title: "7" },
    { url: "http://localhost:3000/IMAGES/8.jpg", title: "8" },
    { url: "http://localhost:3000/IMAGES/9.jpg", title: "9" },
    { url: "http://localhost:3000/IMAGES/10.jpg", title: "10" },
  ];

  const containerStyles = {
    width: "600px",
    height: "500px",
    margin: "10px",
  };

  // Dummy data for latest news
  const latestNews = [
    { id: 1, title: "New Event Coming Soon", date: "March 25, 2024" },
    { id: 2, title: "Exciting Updates on Our Website", date: "March 20, 2024" },
    { id: 3, title: "Celebrating 10 Years of Success", date: "March 15, 2024" },
  ];

  // Dummy data for featured event
  const featuredEvent = {
    title: "Summer Music Festival 2024",
    date: "July 20-22, 2024",
    location: "Central Park, New York",
    description: "Join us for the biggest music festival of the summer! Enjoy live performances from top artists, delicious food, and unforgettable experiences.",
  };

  // Dummy data for testimonials
  const testimonials = [
    { id: 1, name: "John Doe", comment: "Amazing experience! The event was well-organized and the performances were fantastic.", date: "March 10, 2024" },
    { id: 2, name: "Jane Smith", comment: "I had a blast at the event! It exceeded my expectations. Can't wait to attend again next year.", date: "March 5, 2024" },
  ];

  // Dummy data for upcoming events
  const upcomingEvents = [
    { id: 1, title: "Summer Music Festival 2024", date: "July 20-22, 2024", location: "Central Park, New York" },
    { id: 2, title: "Art Exhibition: Nature's Beauty", date: "August 15-20, 2024", location: "Metropolitan Museum of Art, New York" },
    { id: 3, title: "Tech Conference 2024", date: "September 10-12, 2024", location: "San Francisco, California" },
  ];

  return (
    
    <div className="home-container">
      <Navbar />
      <div className="dual-class">
        <div className="slider-container">
          <div style={containerStyles}>
            <ImageSlider slides={slides} parentWidth={600}/>
          </div>
        </div>
        <div className="headline">
          <p>Prepare to be captivated, enthralled, and dazzled at the pinnacle event of the year!</p>
        </div>
      </div>
      <div className="button-container">
        <Link to='/display'>
          <button className="centered-button">BOOK YOUR SEATS</button>
        </Link>
      </div>
      <div className="news-container">
        <h2 className="news-title">Latest News</h2>
        <br />
        <ul className="news-list">
          {latestNews.map(news => (
            <li key={news.id} className="news-item">
              <span className="news-item-title">{news.title}</span>
              <span className="news-item-date">{news.date}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="featured-event-container">
        <p className="featured-event-title">Featured Event</p>
        <div className="featured-event-details">
          <h3 className="event-title">{featuredEvent.title}</h3>
          <p className="event-info"><strong>Date:</strong> {featuredEvent.date}</p>
          <p className="event-info"><strong>Location:</strong> {featuredEvent.location}</p>
          <br />
          <p className="event-description">{featuredEvent.description}</p>
          <Link to='/events'>
            <button className="event-button">Learn More</button>
          </Link>
        </div>
      </div>
      
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-item">
              <p className="testimonial-comment">{testimonial.comment}</p>
              <p className="testimonial-info">- {testimonial.name}, {testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="upcoming-events-container">
        <h2 className="upcoming-events-title">Upcoming Events</h2>
        <div className="upcoming-events-list">
          {upcomingEvents.map(event => (
            <div key={event.id} className="upcoming-event-item">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-info"><strong>Date:</strong> {event.date}</p>
              <p className="event-info"><strong>Location:</strong> {event.location}</p>
              <Link to='/events'>
                <button className="event-button">Learn More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p className="text-footer">
          Copyright © [Year] KEC Swaram. All rights reserved.
        </p>
      </footer>  
    </div>
  );
}
