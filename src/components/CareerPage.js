import React, { useState } from 'react';
import '../Hero.css';

const CareerPage = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState('default');

  const getImageSource = (section) => {
    switch (section) {
      case 'overview':
        return '/images/overview.png';
      case 'superDream':
        return '/images/superdreamimg.png';
      case 'dream':
        return '/images/superdreamimg.png';
      case 'internship':
        return '/images/internshipimg.png';
      case 'industrial':
        return '/images/internshipimg.png';
      case 'cdc':
        return '/images/internshipimg.png';
      case 'statistics':
        return '/images/statastics.png';
      default:
        return '/images/Developmentimg.png';
    }
  };

  const getTitle = (section) => {
    switch (section) {
      case 'overview':
        return 'Career Development Centre';
      case 'superDream':
        return 'Super Dream Offers';
      case 'dream':
        return 'Dream Offers';
      case 'internship':
        return 'Internship Opportunities';
      case 'industrial':
        return 'Industrial Collaboration';
      case 'cdc':
        return 'CDC Office';
      case 'statistics':
        return 'Placement Statistics';
      default:
        return 'Career Development Centre';
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-content bg-white">
        <div className="about-content d-flex">
          {/* Left Section */}
          <div className="sidebar bg-white p-4 border-end w-50">
            <ul className="list-unstyled">
              <li 
                className={`mb-3 ${activeSection === 'overview' ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection('overview')}
              >
                Overview
              </li>
              <li 
                className={`mb-3 ${activeSection === 'superDream' ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection('superDream')}
              >
                Super Dream Offers
              </li>
              <li 
                className={`mb-3 ${activeSection === 'dream' ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection('dream')}
              >
                Dream Offers
              </li>
              <li 
                className={`mb-3 ${activeSection === 'internship' ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection('internship')}
              >
                Internship
              </li>
              <li 
                className={`mb-3 ${activeSection === 'industrial' ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection('industrial')}
              >
                Industrial Collaboration
              </li>
              <li 
                className={`mb-3 ${activeSection === 'cdc' ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection('cdc')}
              >
                CDC Office
              </li>
              <li 
                className={`mb-3 ${activeSection === 'statistics' ? 'active' : ''}`}
                onMouseEnter={() => setActiveSection('statistics')}
              >
                Statistics
              </li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="content-wrapper d-flex align-items-center justify-content-center w-50">
            <div className="career-image-container position-relative">
              <img 
                src={getImageSource(activeSection)}
                alt={getTitle(activeSection)}
                className="about-image"
              />
              <h3 className="position-absolute top-50 start-50 translate-middle text-white">
                {getTitle(activeSection)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;