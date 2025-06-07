import React from 'react';

const socialLinks = [
  { icon: 'bi-instagram', label: 'Follow us on Instagram', url: '#' },
  { icon: 'bi-twitter-x', label: 'Tweet with us on X', url: '#' },
  { icon: 'bi-linkedin', label: 'Grow with us on LinkedIn', url: '#' },
  { icon: 'bi-facebook', label: 'Like us on Facebook', url: '#' },
  { icon: 'bi-youtube', label: 'Watch us on Youtube', url: '#' },
];

const images = [
  '/images/home_socialimg.png',
  '/images/home_socialimg1.png',
  '/images/home_socialimg2.png',
  '/images/home_socialimg.png',
  '/images/home_socialimg.png',
  '/images/home_socialimg.png',
];

const HomeSocial = () => {
  return (
    <div className="container-fluid" style={{ background: '#fafbfc', minHeight: '100vh', padding: '60px 0' }}>
      <div className="row" style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Left Column */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-start" style={{ paddingLeft: 40 }}>
          <div style={{ color: '#7a1620', fontStyle: 'italic', fontWeight: 600, fontSize: 20, marginBottom: 16 }}>Stay Connected</div>
          <h2 style={{ fontWeight: 700, fontSize: 56, lineHeight: 1.1, marginBottom: 32 }}>
            The Wall<br />of Socials<br />from VIT-AP
          </h2>
          <a href="#" style={{ color: '#757575', fontSize: 20, marginBottom: 24, textDecoration: 'underline' }}>Follow us on our Socials</a>
          <div className="d-flex flex-column gap-3">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} className="d-flex align-items-center" style={{ color: '#222', textDecoration: 'none', fontSize: 18, fontWeight: 400 }}>
                <span style={{ background: '#e5dada', borderRadius: 6, padding: 8, marginRight: 16, display: 'flex', alignItems: 'center' }}>
                  <i className={`bi ${link.icon}`} style={{ fontSize: 22 }}></i>
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* Right Column - Social Images Grid */}
        <div className="col-md-7 d-flex flex-wrap align-items-start justify-content-center gap-4" style={{ minHeight: 600 }}>
          {images.map((img, idx) => (
            <div key={idx} className="social-img-container" style={{ width: 240, height: 240, overflow: 'hidden', borderRadius: 8, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', position: 'relative' }}>
              <img
                src={img}
                alt={`social${idx}`}
                className="social-img-hover"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)' }}
              />
              {/* Example overlay for LinkedIn icon */}
              <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14 }}>VIT-AP UNIVERSITY</span>
                <i className="bi bi-linkedin" style={{ fontSize: 22 }}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hover effect CSS */}
      <style>{`
        .social-img-container:hover .social-img-hover {
          transform: translateY(100%);
        }
      `}</style>
    </div>
  );
};

export default HomeSocial; 