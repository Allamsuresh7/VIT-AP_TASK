import React from 'react';
import '../Hero.css';

const CampusLifePage = ({ isOpen }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-content bg-white">
        <div className="campus-content d-flex">
          {/* Life @ VIT-AP Section */}
          <div className="section bg-white p-4 border-end w-33">
            <h5 className="section-heading mb-4">Life @ VIT-AP</h5>
            <ul className="list-unstyled">
              <li className="mb-3">Clubs & Chapters</li>
              <li className="mb-3">Celebrations</li>
              <li className="mb-3">Cafeteria</li>
              <li className="mb-3">Sports</li>
              <li className="mb-3">Gallery</li>
              <li className="mb-3">360 Campus Tour</li>
            </ul>
          </div>

          {/* Facilities Section */}
          <div className="section bg-white p-4 border-end w-33">
            <h5 className="section-heading mb-4">Facilities</h5>
            <ul className="list-unstyled">
              <li className="mb-3">Infrastructure</li>
              <li className="mb-3">Hostels</li>
              <li className="mb-3">Library</li>
              <li className="mb-3">Labs</li>
              <li className="mb-3">Bank and ATM</li>
              <li className="mb-3">Transport</li>
              <li className="mb-3">Health Centre</li>
              <li className="mb-3">Guest House</li>
              <li className="mb-3">Facilities to Employee</li>
            </ul>
          </div>

          {/* Committees Section */}
          <div className="section bg-white p-4 w-33">
            <h5 className="section-heading mb-4">Committees</h5>
            <ul className="list-unstyled">
              <li className="mb-3">V-CHANCE</li>
              <li className="mb-3">Anti - Ragging Committee</li>
              <li className="mb-3">Internal Complaints Committee</li>
              <li className="mb-3">University Disciplinary Committee</li>
              <li className="mb-3">Grievances Redressal Committee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLifePage;