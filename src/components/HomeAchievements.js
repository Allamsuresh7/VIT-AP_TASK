import React from 'react';

const recruiterCount = 7; // Number of gray boxes (placeholders)

const recruiterBoxes = Array.from({ length: recruiterCount }).map((_, idx) => (
  <div key={idx} style={{
    width: 140,
    height: 90,
    background: '#bdbdbd',
    borderRadius: 8,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 32,
  }}>
    {/* Place logo here if available */}
  </div>
));

const HomeAchievements = () => {
  return (
    <div style={{ position: 'relative', background: '#f3f3f6', minHeight: '100vh', padding: 0, overflow: 'hidden' }}>
      {/* Left Maroon Bar */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: 80, height: '100%', background: '#7a1620', zIndex: 1 }}></div>
      {/* Right Maroon Bar */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: 80, height: '100%', background: '#7a1620', zIndex: 1 }}></div>
      <div className="container-fluid" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 0 0 0', position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center" style={{ padding: '60px 0 0 0' }}>
          {/* Left - Achievement Image */}
          <div className="col-md-5 d-flex justify-content-center">
            <div style={{
              border: '8px solid #fff',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              borderRadius: 8,
              position: 'relative',
              background: '#fff',
              marginBottom: 32,
              marginLeft: 32,
              width: 370,
              height: 370,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src="/images/home_achivementimg.png"
                alt="Achievement"
                style={{ width: 350, height: 350, objectFit: 'cover', borderRadius: 8 }}
              />
              {/* Optional: corner line */}
              <div style={{
                position: 'absolute', right: -16, bottom: -16, width: 40, height: 40
              }}>
                <div style={{
                  position: 'absolute', right: 0, bottom: 0, width: 40, height: 4, background: '#7a1620'
                }}></div>
                <div style={{
                  position: 'absolute', right: 0, bottom: 0, width: 4, height: 40, background: '#7a1620'
                }}></div>
              </div>
            </div>
          </div>
          {/* Right - Text */}
          <div className="col-md-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontWeight: 700, fontSize: 48, marginBottom: 24, marginTop: 32 }}>Number At Glance</h1>
            <p style={{ fontSize: 20, color: '#555', maxWidth: 600 }}>
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        {/* Bottom - Top Recruiters */}
        <div style={{ background: '#fbeaec', marginTop: 40, padding: '80px 0 60px 0', position: 'relative', borderRadius: 0, minHeight: 180, marginLeft:'22px', marginRight:'22px' }}>
          {/* Overlapping Top Recruiters Title - moved to right */}
          <div style={{ position: 'absolute', right: 24, top: -48, zIndex: 3 }}>
            <div style={{
              background: '#7a1620',
              color: '#fff',
              fontWeight: 700,
              fontSize: 48,
              padding: '12px 48px',
              borderRadius: 4,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
            }}>
              Top Recruiters
            </div>
          </div>
          {/* Scrolling Recruiter Boxes */}
          <div style={{ width: '100%', overflow: 'hidden', position: 'relative', height: 90, marginTop: 40, marginBottom: 24, padding: '0 60px' }}>
            <div className="scrolling-row" style={{
              display: 'inline-flex',
              whiteSpace: 'nowrap',
              animation: 'scroll-left 18s linear infinite',
            }}>
              {recruiterBoxes}
              {recruiterBoxes}
            </div>
          </div>
          {/* CSS for animation */}
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scrolling-row {
              will-change: transform;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default HomeAchievements;