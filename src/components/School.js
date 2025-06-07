import React, { useState, useEffect } from 'react';


const schools = [
  {
    name: 'School of Computer Science & Engineering',
    image: '/images/schoolimg.jpg',
  },
  {
    name: <>School of Electrical<br/>Science & Engineering</>,
    image: '/images/schoolimg.jpg',
  },
  {
    name: 'School of Computer Science & Engineering',
    image: '/images/schoolimg.jpg',
  },
  {
    name: 'School of Computer Science & Engineering',
    image: '/images/schoolimg.jpg',
  },
  {
    name: 'School of Computer Science & Engineering',
    image: '/images/schoolimg.jpg',
  },
  {
    name: 'School of Computer Science & Engineering',
    image: '/images/schoolimg.jpg',
  },
  {
    name: 'School of Computer Science & Engineering',
    image: '/images/schoolimg.jpg',
  },
];

const School = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ background: '#f3e1e1', padding: '0 0 60px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 20px 0 20px' }}>
        <h2 style={{ 
    fontFamily: 'Emilio Test',
    fontWeight: 700,
    fontSize: 48,
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#51060D',
    marginBottom: 16 
  }}>
    Our Schools
  </h2>
        <p style={{ 
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '27px',
    letterSpacing: '0%',
    color: '#1B1C1ECC',
    marginBottom: 40,
    maxWidth: 700 
  }}>
          At VIT-AP the entire teaching-learning process is concentrated around six schools. A research center is also part of the schools, that encourages students to participate in exciting research projects amongst these departments.
        </p>
      </div>
      <div style={{ background: '#fff', borderRadius: '40px 40px 0 0', marginTop: 40, padding: '60px 0 0 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 20px',
        }}>
          {schools.map((school, idx) => (
            <div 
              key={idx} 
              style={{ 
                position: 'relative', 
                borderRadius: 12, 
                overflow: 'hidden', 
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={school.image} 
                alt={school.name} 
                style={{ 
                  width: '100%', 
                  height: 300, 
                  objectFit: 'cover', 
                  filter: 'brightness(0.7)',
                  transform: hoveredIndex === idx ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out'
                }} 
              />
              <div style={{ position: 'absolute', bottom: 24, left: 24, color: '#fff' }}>
                <h3 style={{ 
                  fontFamily: 'Emilio Test',
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  {school.name}
                </h3>
                <button style={{ 
                  marginTop: 12, 
                  background: 'none', 
                  border: 'none',
                  fontFamily: 'Montserrat',
                  fontWeight: 500,
                  fontSize: 11,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#FFFFFFCC',
                  cursor: 'pointer',
                  
                }}>
                  Explore Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default School;