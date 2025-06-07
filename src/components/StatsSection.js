import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '../Hero.css';

const statsData = [
  { label: 'Students', value: 100, plus: true },
  { label: 'Schools', value: 1, plus: false, fixed: true },
  { label: 'Faculty', value: 100, plus: true },
  { label: 'Publications', value: 100, plus: true },
];

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-section">
      <div className="stats-container container-fluid py-4">
        <div className="row equal-height d-flex align-items-stretch g-4">
          {/* Left side - Announcements */}
          <div className="col-md-6 d-flex align-items-stretch pe-md-4">
            <div className="content-container w-100 d-flex flex-column h-100">
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
    About VIT-AP
  </h2>
              <div className="university-image-container">
                <img 
                  src="/images/About.png" 
                  alt="VIT-AP Campus" 
                  className="w-100"
                />
              </div>
              <p style={{ 
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: 22,
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#1B1C1E',
  margin: '24px 0'
}}>
  VIT-AP University is one of India's Best Top Emerging Universities
</p>
              <div className="stats-grid flex-grow-1 d-flex flex-wrap align-items-center justify-content-center" ref={statsRef}>
                {statsData.map((stat, idx) => (
                  <div
                    className={`stat-item${visible ? ' visible' : ''}`}
                    key={stat.label}
                    style={{ transitionDelay: `${idx * 0.1 + 0.2}s` }}
                  >
                    <h3 className="stat-number">
                      {stat.fixed ? (
                        stat.value
                      ) : (
                        <CountUp
                          start={visible ? 0 : null}
                          end={stat.value}
                          duration={1.5}
                          delay={0.2 + idx * 0.1}
                        />
                      )}
                      {stat.plus && <span className="plus-sign">+</span>}
                    </h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      

          {/* Right side - Image and Stats */}
          <div className="col-md-6 d-flex align-items-stretch ps-md-4">
            <div className="content-container w-100 d-flex flex-column h-100">
              <h2 style={{ 
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'uppercase',
      color: '#5C0E14',
      marginBottom: 24
    }}>
      OUR ANNOUNCEMENTS
    </h2>
              <div className="announcements-list flex-grow-1">
                <div className="announcement-item">
                  <span style={{ 
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '100%',
    letterSpacing: '0%',
    textTransform: 'uppercase',
    color: '#1B1C1E99'
  }}>
    13TH SEP, 2023
  </span>
                  <h3 style={{ 
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'capitalize',
      color: '#1B1C1E',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }}>
      VITREE January 2024 - Apply Now
    </h3>
                </div>
                <div className="announcement-item">
                  <span className="announcement-date">17TH SEP, 2023</span>
                  <h3 style={{ 
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'capitalize',
      color: '#1B1C1E',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }}>
      VITREE January 2024 - Apply Now
    </h3>
                </div>
                <div className="announcement-item">
                  <span className="announcement-date">29TH MAY, 2023</span>
                  <h3 style={{ 
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'capitalize',
      color: '#1B1C1E',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }}>
      VITREE January 2024 - Apply Now
    </h3>
                </div>
                <div className="announcement-item">
                  <span className="announcement-date">29TH MAY, 2023</span>
                  <h3 style={{ 
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'capitalize',
      color: '#1B1C1E',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }}>
      VITREE January 2024 - Apply Now
    </h3>
                </div>
                <div className="announcement-item">
                  <span className="announcement-date">17TH SEP, 2023</span>
                  <h3 style={{ 
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'capitalize',
      color: '#1B1C1E',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }}>
      VITREE January 2024 - Apply Now
    </h3>
                </div>
                <div className="announcement-item">
                  <span className="announcement-date">29TH MAY, 2023</span>
                  <h3 style={{ 
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'capitalize',
      color: '#1B1C1E',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }}>
      VITREE January 2024 - Apply Now
    </h3>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default StatsSection;