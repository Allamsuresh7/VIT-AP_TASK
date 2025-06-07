import React from 'react';

const maroon = '#7a1620';
const lightBg = '#f3f3f6';
const footerBg = '#fff';
const bottomBarBg = '#7a1620';
const textColor = '#222';

const UniversityFooter = () => (
  <footer className="university-footer">
    {/* Quote Section */}
    <div className="footer-quote-section">
      <div className="footer-quote-text" style={{
        fontFamily: 'Emilio Test',
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '100%',
        letterSpacing: '0%'
      }}>
        " Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur "
      </div>
      <div className="footer-quote-author">
        -Jagadish Mudiganti
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="container-fluid footer-main-content">
      <div className="row" style={{ paddingBottom: 32 }}>
        {/* Quick Links */}
        <div className="col-md-2 col-6 mb-4">
          <div className="footer-section-title">Quick Links</div>
          <ul className="footer-links-list">
            <li>Careers</li>
            <li>Gallery</li>
            <li>Hostels</li>
            <li>Transport</li>
            <li>Policies</li>
          </ul>
        </div>
        {/* VIT Connect */}
        <div className="col-md-2 col-6 mb-4">
          <div className="footer-section-title">VIT Connect</div>
          <ul className="footer-links-list">
            <li>V-TOP Login</li>
            <li>V-TOP Parent Login</li>
            <li>Mail</li>
            <li>Alumni</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Ranking & Accreditation */}
        <div className="col-md-2 col-6 mb-4">
          <div className="footer-section-title">Ranking & Accreditation</div>
          <ul className="footer-links-list">
            <li>RAAC</li>
            <li>NAAC</li>
          </ul>
        </div>
        {/* Map & Address */}
        <div className="col-md-6 col-12 mb-4 ms-auto" style={{ 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
}}>
  <div className="footer-map-container" style={{
    width: '100%',
    maxWidth: '600px',
    marginLeft: 'auto'
  }}>
    <img 
      src="/images/footerimg.png" 
      alt="VIT-AP University Map" 
      className="footer-map-image" 
      style={{
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
    />
  </div>
  <div style={{
    textAlign: 'right',
    marginTop: '1.5rem',
    paddingRight: '1rem'
  }}>
    <div className="footer-address-title" style={{
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#333'
    }}>
      VIT-AP University, Amaravathi
    </div>
    <div className="footer-address-text" style={{
      marginTop: '0.5rem',
      color: '#666'
    }}>
      Near Vijayawada - 522241,<br />Andhra Pradesh.
    </div>
    <a href="#" className="footer-directions-link" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
      color: maroon,
      textDecoration: 'none',
      fontWeight: '500'
    }}>
      HOW TO REACH VIT-AP <span className="footer-directions-arrow">↗</span>
    </a>
  </div>
</div>
        </div>
        {/* Research, Academics, Information */}
        <div className="row" style={{ paddingBottom: 32 }}>
  {/* Research Section */}
  <div className="col-md-2 col-6 mb-4">
    <div className="footer-section-title">Research</div>
    <ul className="footer-links-list">
      <li>Centers</li>
      <li>Google Scholar</li>
      <li>Scopus</li>
      <li>Patents</li>
      <li>Projects</li>
      <li>Publications</li>
    </ul>
  </div>

  {/* Academics Section */}
  <div className="col-md-2 col-6 mb-4">
    <div className="footer-section-title">Academics</div>
    <ul className="footer-links-list">
      <li>Programs Offered</li>
      <li>Academic Calendar</li>
      <li>Application Process</li>
      <li>Fee Structure</li>
      <li>Scholarship</li>
      <li>IQAC</li>
    </ul>
  </div>

  {/* Information Section */}
  <div className="col-md-2 col-6 mb-4">
    <div className="footer-section-title">Information</div>
    <ul className="footer-links-list">
      <li>Public Notice: University Act</li>
      <li>Forms</li>
      <li>Directory</li>
      <li>Feedback</li>
      <li>Academic Bank of Credit (ABC)</li>
    </ul>
  </div>
</div>
      {/* Main Footer Bar */}
      <div className="footer-main-bar">
        <div className="container-fluid">
          <div className="footer-main-bar-content">
            {/* Logo */}
            <div className="footer-logo-container">
              <img src="/images/vit-ap-logo.png" alt="VIT-AP Logo" className="footer-logo" />
              <span className="footer-logo-text">VIT-AP<br />UNIVERSITY</span>
            </div>
            {/* Links */}
            <div className="footer-main-links">
              <a href="#" className="footer-main-link">VIT-AP Home</a>
              <a href="#" className="footer-main-link">Maps & Directions</a>
              <a href="#" className="footer-main-link">Search VIT-AP</a>
              <a href="#" className="footer-main-link">Emergency Info</a>
              <a href="#" className="footer-main-link">Privacy</a>
              <a href="#" className="footer-main-link">Terms of Use</a>
              <a href="#" className="footer-main-link">Copyright</a>
              <a href="#" className="footer-main-link">Trademarks</a>
              <a href="#" className="footer-main-link">Non-Discrimination</a>
              <a href="#" className="footer-main-link">Accessibility</a>
            </div>
            {/* Social Icons */}
            <div className="footer-social-icons">
              {/* Instagram */}
              <a href="#" className="social-icon-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="#7a1620" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="#7a1620" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1" fill="#7a1620"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-icon-link linkedin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="#7a1620" strokeWidth="2"/>
                  <rect x="7" y="10" width="2" height="7" fill="#7a1620"/>
                  <rect x="11" y="13" width="2" height="4" fill="#7a1620"/>
                  <circle cx="8" cy="8" r="1" fill="#7a1620"/>
                  <rect x="15" y="13" width="2" height="4" fill="#7a1620"/>
                  <rect x="13" y="11" width="4" height="2" fill="#7a1620"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="social-icon-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#7a1620" strokeWidth="2"/>
                  <path d="M13 8h2V6h-2a3 3 0 0 0-3 3v2H8v2h2v5h2v-5h2l1-2h-3V9a1 1 0 0 1 1-1z" fill="#7a1620"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="social-icon-link youtube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="12" rx="4" stroke="#7a1620" strokeWidth="2"/>
                  <polygon points="10,9 16,12 10,15" fill="#7a1620"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="social-icon-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.1 4.1 0 0 0 12 8.09c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 4.89a4.07 4.07 0 0 0-.55 2.06c0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.86-.52v.05c0 1.98 1.41 3.63 3.28 4a4.1 4.1 0 0 1-1.85.07c.52 1.62 2.03 2.8 3.82 2.83A8.23 8.23 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 5.92z" fill="#7a1620"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="footer-copyright">
        <div className="container-fluid">
          © VIT-AP University <span className="footer-copyright-text">Crafted with Passion at VIT-AP University by Website Team</span>
        </div>
      </div>
    </div>
  </footer>
);

export default UniversityFooter;