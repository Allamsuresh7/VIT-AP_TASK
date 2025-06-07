import React from 'react';

const images = [
  '/images/researchimg.png',
  '/images/researchschool.png',
  '/images/researchschools.png',
];


const stats = [
  { value: '1000 +', label: 'Publications' },
  { value: '300+', label: 'Patents' },
  { value: '1.5Cr+', label: 'Sponsored Budget' },
];

const SchoolResearch = () => {
  return (
    <div style={{ background: 'white', minHeight: '100vh', padding: '0 0 60px 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        <h2 style={{ 
  fontFamily: 'Emilio Test',
  fontWeight: 700,
  fontSize: 48,
  lineHeight: '100%',
  letterSpacing: '0%',
  textTransform: 'capitalize',
  color: '#51060D',
  textAlign: 'center', 
  paddingTop: 48, 
  marginBottom: 32 
}}>
          Research and Innovation
        </h2>
        {/* Images Row */}
        <div className="d-flex justify-content-center align-items-end position-relative" style={{ gap: 32, marginBottom: 60 }}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Research ${idx + 1}`}
              style={{ width: 370, height: 320, objectFit: 'cover', borderRadius: 8, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
            />
          ))}
          {/* Banner overlay */}
          <div
  className="position-absolute w-100 d-flex justify-content-center"
  style={{ bottom: -38, left: 0, pointerEvents: 'none' }}
>
  <div style={{ 
    background: '#7a1620',
    fontFamily: 'Emilio Test',
    fontWeight: 600,
    fontSize: 31,
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFE9EB',
    padding: '18px 48px', 
    borderRadius: 4,
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    borderBottom: '8px solid #fff'
  }}>
    Top Quality and Learning Experience
  </div>
</div>
        </div>
        {/* Stats Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 60, background: '#f7f7f8', padding: '40px 0' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ color: '#651a1a', fontSize: 64, fontWeight: 700, marginBottom: 8 }}>1000+</div>
            <div style={{ color: '#651a1a', fontSize: 24, fontWeight: 400 }}>Publications</div>
          </div>
          <div style={{ width: 2, height: 90, background: '#bdbdbd' }}></div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ color: '#651a1a', fontSize: 64, fontWeight: 700, marginBottom: 8 }}>300+</div>
            <div style={{ color: '#651a1a', fontSize: 24, fontWeight: 400 }}>Patents</div>
          </div>
          <div style={{ width: 2, height: 90, background: '#bdbdbd' }}></div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ color: '#651a1a', fontSize: 64, fontWeight: 700, marginBottom: 8 }}>1.5Cr+</div>
            <div style={{ color: '#651a1a', fontSize: 24, fontWeight: 400 }}>Sponsored Budget</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolResearch;