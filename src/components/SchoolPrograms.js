import React, { useState } from 'react';

const programs = {
  Undergraduate: [
    'B.Tech In Computer Science And Engineering',
    'B.Tech In Computer Science And Engineering Specialization In AI',
    'B.Tech In Computer Science And Engineering Specialization In Data Analytics',
    'B.Tech In Computer Science And Engineering Specialization In Network And Security',
    'B.Tech In Computer Science And Engineering Specialization In Network And Security',
    'B.Tech In Computer Science And Engineering Specialization In Robotics',
    'B.Tech In Electronics And Computers Engineering Specialization In VLSI',
  ],
  Integrated: [],
  Postgraduate: [],
  Doctorial: [],
};

const tabs = ['Undergraduate', 'Integrated', 'Postgraduate', 'Doctorial'];

const SchoolPrograms = () => {
  const [activeTab, setActiveTab] = useState('Undergraduate');

  return (
    <div className="d-flex align-items-stretch" style={{ background: '#5a1818', minHeight: '100vh', padding: '60px 0' }}>
      {/* Left Section */}
      <div style={{ flex: 1, color: '#fff', padding: '0 0 0 7vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ 
          fontFamily: 'Emilio Test',
          fontWeight: 700,
          fontSize: 48,
          lineHeight: '100%',
          letterSpacing: '0%',
          textTransform: 'capitalize',
          color: '#FFFFFF',
          marginBottom: 24 
        }}>
          Programs Offered
        </h2>
        <p style={{ 
          fontFamily: 'Montserrat',
          fontWeight: 400,
          fontSize: 18,
          lineHeight: '27px',
          letterSpacing: '0%',
          color: '#FFFFFFCC',
          maxWidth: 420,
          marginBottom: 48
        }}>
          Program covers the entire spectrum of new-age specializations. This program seamlessly integrates basic science concepts to the latest technologies with relevant practice through lab and projects for building problem-solving skills
        </p>
        <div className="nav flex-column nav-pills" style={{ width: 320, border: '1px solid #fff', borderRadius: 0 }}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`nav-link text-start ${activeTab === tab ? 'active' : ''}`}
              style={{
                fontFamily: 'Montserrat',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '0%',
                color: activeTab === tab ? '#FFFFFF' : '#e2d6d6',
                background: activeTab === tab ? '#5a1818' : 'transparent',
                borderRadius: 0,
                borderBottom: '1px solid #fff',
                padding: '18px 32px',
                borderLeft: activeTab === tab ? '4px solid #fff' : '4px solid transparent',
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Right Section */}
      <div style={{ flex: 2, background: '#e9d1d1', margin: '0 7vw 0 0', border: '2px solid #fff', boxSizing: 'border-box', display: 'flex', alignItems: 'center', minHeight: 600, position: 'relative' }}>
        <div style={{ width: '100%', padding: '48px 48px 48px 48px', overflowY: 'auto', maxHeight: 520 }}>
          <div style={{ 
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '100%',
            letterSpacing: '0%',
            textTransform: 'uppercase',
            color: '#1B1C1E99',
            marginBottom: 32
          }}>
            ENGINEERING
          </div>
          {programs[activeTab].length === 0 ? (
            <div style={{ color: '#7a6e6e', fontSize: 18 }}>No programs available.</div>
          ) : (
            programs[activeTab].map((prog, idx) => (
              <div key={idx} style={{ marginBottom: 32 }}>
                <div style={{ 
                  fontFamily: 'Emilio Test',
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  color: '#51060D'
                }}>
                  {prog}
                </div>
                <hr style={{ borderColor: '#cbbaba', margin: '16px 0 0 0' }} />
              </div>
            ))
          )}
        </div>
        {/* Dropdown icon */}
        <div style={{ position: 'absolute', bottom: 24, right: 32, color: '#5a1818', fontSize: 36, background: '#e9d1d1', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <span className="bi bi-chevron-down"></span>
        </div>
      </div>
    </div>
  );
};

export default SchoolPrograms;