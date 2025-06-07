import React, { useState, useEffect } from 'react';
import AboutPage from './AboutPage';
import AdmissionsPage from './AdmissionsPage';
import AcademicsPage from './AcademicsPage';
import CareerPage from './CareerPage';
import CampusLifePage from './CampusLifePage';
import ResearchPage from './ResearchPage';
import '../Hero.css';

const MainNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  // Add event listeners to menu container to handle mouse leaving the dropdown area
  useEffect(() => {
    const menuContainer = document.querySelector('.navbar-nav');
    const handleMouseLeave = () => {
      setActiveMenu(null);
    };

    if (menuContainer) {
      menuContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (menuContainer) {
        menuContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div className="hero-section" style={{ backgroundImage: `url(/images/vit-ap-bg-home.jpg)` }}>
        {/* Top Red Bar */}
        <div className="top-bar text-white d-flex justify-content-between px-3 py-1">
          <div className="left-section d-flex align-items-center gap-2">
            <span>
              <i className="bi bi-bank me-1"></i> CAMPUS <span className="ms-1">&gt;</span>
            </span>
          </div>
          <div className="right-section d-flex align-items-center gap-3">
            <span>Alumni</span>
            <span>VIT-AP Advantages</span>
            <i className="bi bi-search"></i>
            <span style={{ fontWeight: 'bold' }}>360</span>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark vit-navbar px-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/images/vit-ap-logo.png" alt="VIT Logo" width="300" height="100" className="me-2" />
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item nav-hover"
                  onMouseEnter={() => handleMenuEnter('about')}
                  onMouseLeave={handleMenuLeave}>
                <a className="nav-link" href="#">About</a>
                <AboutPage isOpen={activeMenu === 'about'} />
              </li>
              <li className="nav-item nav-hover"
                  onMouseEnter={() => handleMenuEnter('admissions')}
                  onMouseLeave={handleMenuLeave}>
                <a className="nav-link" href="#">Admissions</a>
                <AdmissionsPage isOpen={activeMenu === 'admissions'} />
              </li>
              <li className="nav-item nav-hover"
                  onMouseEnter={() => handleMenuEnter('academics')}
                  onMouseLeave={handleMenuLeave}>
                <a className="nav-link" href="#">Academics</a>
                <AcademicsPage isOpen={activeMenu === 'academics'} />
              </li>
              <li className="nav-item nav-hover"
                  onMouseEnter={() => handleMenuEnter('career')}
                  onMouseLeave={handleMenuLeave}>
                <a className="nav-link" href="#">Career Development Centre</a>
                <CareerPage isOpen={activeMenu === 'career'} />
              </li>
              <li className="nav-item nav-hover"
                  onMouseEnter={() => handleMenuEnter('campus')}
                  onMouseLeave={handleMenuLeave}>
                <a className="nav-link" href="#">Campus Life</a>
                <CampusLifePage isOpen={activeMenu === 'campus'} />
              </li>
              <li className="nav-item nav-hover"
                  onMouseEnter={() => handleMenuEnter('research')}
                  onMouseLeave={handleMenuLeave}>
                <a className="nav-link" href="#">Research</a>
                <ResearchPage isOpen={activeMenu === 'research'} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainNavbar;