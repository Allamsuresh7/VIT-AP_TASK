import React, { useState } from 'react';
import '../Hero.css';

const ResearchPage = ({ isOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const centerFields = [
    'AI & Robotics',
    'Cyber-Security',
    'Internet of Things',
    'Blockchain'
  ];

  const iiecFields = [
    'Innovation',
    'Incubation',
    'Entrepreneurship',
    'Technology Transfer',
    'Start-up Support'
  ];

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-content bg-white">
        <div className="about-content d-flex">
          <div className="sidebar bg-white p-3 w-50 border-end">
            <ul className="list-unstyled research-list">
              <li>Academic Research</li>
              <li>URE Project</li>
              <li 
                className="centers-item"
                onMouseEnter={() => setHoveredItem('centers')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Centers Of Excellence
              </li>
              <li
                className="iiec-item"
                onMouseEnter={() => setHoveredItem('iiec')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                IIEC
              </li>
              <li>VTBIF</li>
            </ul>
          </div>
          <div className="content-area w-50">
            {hoveredItem === 'centers' && (
              <ul className="list-unstyled center-fields p-3">
                {centerFields.map((field, index) => (
                  <li key={index} className="mb-2">{field}</li>
                ))}
              </ul>
            )}
            {hoveredItem === 'iiec' && (
              <ul className="list-unstyled iiec-fields p-3">
                {iiecFields.map((field, index) => (
                  <li key={index} className="mb-2">{field}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;