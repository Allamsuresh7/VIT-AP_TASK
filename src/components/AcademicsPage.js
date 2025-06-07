import React, { useState } from 'react';
import '../Hero.css';

const AcademicsPage = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState('schools');

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-content bg-white">
        <div className="about-content d-flex">
          {/* Left Section - Schools */}
          <div className="sidebar bg-white p-3 border-end w-50">
            <h5 className="mb-2">Schools</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">School of Computer Science and Engineering (SCOPE)</li>
              <li className="mb-2">School of Electronics Engineering (SENSE)</li>
              <li className="mb-2">School of Mechanical Engineering (SMEC)</li>
              <li className="mb-2">School of Advanced Sciences (SAS)</li>
              <li className="mb-2">School of Social Sciences and Humanities (VISH)</li>
              <li className="mb-2">School of Law (VSL)</li>
              <li className="mb-2">School of Business (VSB)</li>
            </ul>
          </div>

          {/* Right Section - Academic Features */}
          <div className="content-wrapper p-3 w-50">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">Academic Regulations</li>
              <li className="mb-2">Academic Council</li>
              <li className="mb-2">Faculty</li>
              <li className="mb-2">Academic Calendar</li>
              <li className="mb-2">International Collaboration</li>
              <li className="mb-2">Engineering Clinic</li>
              <li className="mb-2">Value Added Courses</li>
              <li className="mb-2">Centre of Examination</li>
              <li className="mb-2">Fully Flexible Credit System (FFCS)</li>
              <li className="mb-2">Design Your Own Degree (DYOD)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;