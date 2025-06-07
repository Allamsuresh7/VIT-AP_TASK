import React, { useState } from 'react';
import '../Hero.css';

const AboutPage = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState('default');

  const getContent = () => {
    switch (activeSection) {
      case 'vision':
        return (
          <img 
            src="/images/visionimg.png" 
            alt="VIT-AP Vision" 
            className="about-image"
          />
        );
      case 'leadership':
        return (
          <img 
            src="/images/Leadershipimg.png" 
            alt="VIT-AP Leadership" 
            className="about-image"
          />
        );
         case 'governance':
        return (
          <img 
            src="/images/Governanceimg.png" 
            alt="VIT-AP Leadership" 
            className="about-image"
          />
        );
          case 'contactus':
        return (
          <img 
            src="/images/contactusimg.png" 
            alt="VIT-AP Leadership" 
            className="about-image"
          />
        );
          case 'faq':
        return (
          <img 
            src="/images/Faqimg.png" 
            alt="VIT-AP Leadership" 
            className="about-image"
          />
        );
      default:
        return (
          <img 
            src="/images/Aboutimg.jpg" 
            alt="About VIT-AP" 
            className="about-image"
          />
        );
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-content bg-white">
        <div className="about-content d-flex">
          {/* Sidebar */}
          <div className="sidebar bg-white p-4">
            <ul className="list-unstyled">
              <li 
                className="mb-3 cursor-pointer"
                onMouseEnter={() => setActiveSection('vision')}
                onMouseLeave={() => setActiveSection('default')}
              >
                Vision & Mission
              </li>
              <li 
                className="mb-3 cursor-pointer"
                onMouseEnter={() => setActiveSection('leadership')}
                onMouseLeave={() => setActiveSection('default')}
              >
                Leadership
              </li>
              <li 
                className="mb-3 cursor-pointer"
                onMouseEnter={() => setActiveSection('governance')}
                onMouseLeave={() => setActiveSection('default')}
              >
                Governance
              </li>
                <li 
                className="mb-3 cursor-pointer"
                onMouseEnter={() => setActiveSection('contactus')}
                onMouseLeave={() => setActiveSection('default')}
              >
               Contact Us
              </li>
               <li 
                className="mb-3 cursor-pointer"
                onMouseEnter={() => setActiveSection('faq')}
                onMouseLeave={() => setActiveSection('default')}
              >
               FAQ
              </li>
              
              
            </ul>
          </div>

          {/* Content Section */}
          <div className="content-wrapper d-flex align-items-center justify-content-center">
            {getContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
