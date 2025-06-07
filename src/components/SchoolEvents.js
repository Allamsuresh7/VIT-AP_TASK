import React, { useState, useEffect } from 'react';

const featuredEvents = [
  {
    image: '/images/schooleventimg.png',
  },
  {
    image: '/images/schooleventimg.png',
  },
  {
    image: '/images/schooleventimg.png',
  },
];

const smallEvents = [
  {
    date: '04 Apr',
    title: "CSI Meet'n Greet'23",
    desc: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum',
  },
  {
    date: '04 Apr',
    title: "CSI Meet'n Greet'23",
    desc: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum',
  },
  {
    date: '04 Apr',
    title: "CSI Meet'n Greet'23",
    desc: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum',
  },
  {
    date: '04 Apr',
    title: "CSI Meet'n Greet'23",
    desc: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum',
  },
  {
    date: '04 Apr',
    title: "CSI Meet'n Greet'23",
    desc: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum',
  },
  {
    date: '04 Apr',
    title: "CSI Meet'n Greet'23",
    desc: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum',
  },
];

const SchoolEvents = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="school-events-container">
      <div className="school-events-wrapper">
        <div className="school-events-header">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 style={{ 
                fontFamily: 'Emilio Test',
                fontWeight: 700,
                fontSize: 48,
                lineHeight: '100%',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: '#51060D',
                marginBottom: 24
              }}>
                Our Events
              </h2>
              
              <p style={{ 
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: 18,
                lineHeight: '27px',
                letterSpacing: '0%',
                color: '#1B1C1ECC',
                margin: 0
              }}>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet <br/> consectetur.Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <button 
              onClick={() => {}} 
              className="see-all-button"
            >
              See all <span className="see-all-underline"></span>
            </button>
          </div>
        </div>
        {/* Featured Events */}
        <div className="row mt-4 mb-5 g-4">
          {featuredEvents.map((event, idx) => (
            <div className="col-md-4" key={idx}>
              <div 
                className="featured-event-card"
                onMouseEnter={() => setHoveredImage(idx)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img 
                  src={event.image} 
                  alt="Event" 
                  className="featured-event-image"
                  style={{ transform: hoveredImage === idx ? 'scale(1.1)' : 'scale(1)' }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Small Events */}
        <div className="row g-4 mb-5">
          {smallEvents.map((event, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="d-flex align-items-start" style={{ gap: 24 }}>
                <div className="event-date-box">
                  <div className="event-date-day">{event.date.split(' ')[0]}</div>
                  <div className="event-date-month">{event.date.split(' ')[1]}</div>
                </div>
                <div>
                  <div style={{ 
                    fontFamily: 'Emilio Test',
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: '111%',
                    letterSpacing: '2%',
                    textAlign: 'center',
                    color: '#000000'
                  }}>
                    {event.title}
                  </div>
                  <div style={{ 
                    fontFamily: 'Montserrat',
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '22px',
                    letterSpacing: '0%',
                    color: '#1B1C1E99'
                  }}>
                    {event.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolEvents;