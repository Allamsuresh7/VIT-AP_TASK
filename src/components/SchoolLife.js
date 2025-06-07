import React from 'react';

const images = [
  '/images/schoolhome2.png',
  '/images/schoolhome1.png',
  '/images/schoolhome8.png',
  '/images/schoolhome3.png',
  '/images/schoolhome.png',
  '/images/schoolhome6.png',
  '/images/schoolhome7.png',
  '/images/schoolhome5.png',
  '/images/schoolhome4.png',

];

const SchoolLife = () => {
  return (
    <div style={{ background: '#ececec', minHeight: '100vh', padding: '0 0 60px 0' }}>
      <div style={{ maxWidth: 1500, margin: '0 auto', padding: '0 32px' }}>
        <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh', position: 'relative' }}>
          {/* Top Row Images */}
          <div className="col-12 d-flex justify-content-between mb-4" style={{ gap: 24 }}>
            <img src={images[0]} alt="life1" style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 8 }} />
            <img src={images[1]} alt="life2" style={{ width: 180, height: 120, objectFit: 'cover', borderRadius: 8 }} />
            <img src={images[2]} alt="life3" style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 8 }} />
            <img src={images[3]} alt="life4" style={{ width: 180, height: 120, objectFit: 'cover', borderRadius: 8 }} />
          </div>
          {/* Center Content and Side Images */}
          <div className="col-12 d-flex justify-content-between align-items-center mb-4" style={{ gap: 24 }}>
            <img src={images[4]} alt="life5" style={{ width: 320, height: 220, objectFit: 'cover', borderRadius: 8 }} />
            <div style={{ flex: 1, textAlign: 'center', minWidth: 400, maxWidth: 600, margin: '0 32px' }}>
              <div style={{ 
  fontFamily: 'Emilio Test',
  fontWeight: 600,
  fontStyle: 'italic',
  fontSize: 20,
  lineHeight: '27px',
  letterSpacing: '0%',
  textAlign: 'center',
  color: '#7a1620',
  marginBottom: 8 
}}>Explore our campus</div>
              <h2 style={{ 
  fontFamily: 'Emilio Test',
  fontWeight: 700,
  fontSize: 64,
  lineHeight: '100%',
  letterSpacing: '-2.5%',
  textTransform: 'capitalize',
  color: '#222',
  marginBottom: 12 
}}>
  Life <span style={{ fontWeight: 400, fontStyle: 'italic' }}>@</span> VIT-AP
</h2>
              <div style={{ 
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  letterSpacing: '0%',
  textAlign: 'center',
  color: '#444',
  marginBottom: 32 
}}>
  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.
</div>
              <button style={{ 
  background: '#7a1620', 
  color: '#fff', 
  border: 'none', 
  borderRadius: 30, 
  padding: '14px 48px',
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '100%',
  letterSpacing: '0%'
}}>EXPLORE</button>
            </div>
            <img src={images[5]} alt="life6" style={{ width: 320, height: 220, objectFit: 'cover', borderRadius: 8 }} />
          </div>
          {/* Bottom Row Images */}
          <div className="col-12 d-flex justify-content-between" style={{ gap: 24 }}>
  <img src={images[6]} alt="life7" style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 8 }} />
  <img src={images[8]} alt="life9" style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 8 }} />
  <img src={images[7]} alt="life8" style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 8 }} />
</div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLife;