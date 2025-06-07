import React, { useState } from 'react';
import '../Hero.css';

const AdmissionsPage = ({ isOpen }) => {
  const [showProgrammes, setShowProgrammes] = useState(false);
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const [showDualDegree, setShowDualDegree] = useState(false);
  const [showIntegrated, setShowIntegrated] = useState(false);
  const [showPostgraduate, setShowPostgraduate] = useState(false);
  const [showPhd, setShowPhd] = useState(false);

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-content bg-white">
        <div className="about-content d-flex">
          {/* Sidebar */}
          <div className="sidebar bg-white p-4">
            <ul className="list-unstyled">
              <li 
                className="mb-3 cursor-pointer position-relative"
                onMouseEnter={() => setShowProgrammes(true)}
                onMouseLeave={() => setShowProgrammes(false)}
              >
                Programmes
                {showProgrammes && (
                  <ul className="programmes-submenu">
                    <li 
                      onMouseEnter={() => setShowUndergraduate(true)}
                      onMouseLeave={() => setShowUndergraduate(false)}
                      className="position-relative"
                    >
                      Undergraduate
                      {showUndergraduate && (
                        <div className="undergraduate-submenu">
                          <div className="engineering-section">
                            <h4>Engineering</h4>
                            <ul>
                              <li>B. Tech. CSE</li>
                              <li>B. Tech. CSBS</li>
                              <li>B. Tech. ECE</li>
                              <li>B. Tech. Mechanical</li>
                            </ul>
                          </div>
                          <div className="management-section">
                            <h4>Management</h4>
                            <ul>
                              <li>BBA</li>
                              <li>B. Com.</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                    
                    <li 
                      onMouseEnter={() => setShowDualDegree(true)}
                      onMouseLeave={() => setShowDualDegree(false)}
                      className="position-relative"
                    >
                      Dual Degree
                      {showDualDegree && (
                        <div className="dual-degree-submenu">
                          <ul>
                            <li>BA - MA</li>
                            <li>B. Sc. - M. Sc.</li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li 
                      onMouseEnter={() => setShowIntegrated(true)}
                      onMouseLeave={() => setShowIntegrated(false)}
                      className="position-relative"
                    >
                      Integrated
                      {showIntegrated && (
                        <div className="integrated-submenu">
                          <div className="integrated-section">
                           
                            <ul>
                              <li>B. Tech. + M. Tech.</li>
                              <li>BCA + MCA</li>
                              <li>B. Tech. + MBA</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                    <li 
                      onMouseEnter={() => setShowPostgraduate(true)}
                      onMouseLeave={() => setShowPostgraduate(false)}
                      className="position-relative"
                    >
                      Postgraduate
                      {showPostgraduate && (
                        <div className="postgraduate-submenu">
                          <div className="schools-section">
                            <h4>Schools</h4>
                            <ul>
                              <li>School of Computer Science and Engineering</li>
                              <li>School of Electronics Engineering</li>
                              <li>School of Mechanical Engineering</li>
                              <li>School of Advanced Sciences</li>
                              <li>School of Social Sciences and Humanities</li>
                              <li>School of Law</li>
                              <li>School of Business</li>
                            </ul>
                          </div>
                          <div className="courses-section">
                            <h4>Popular Courses</h4>
                            <ul>
                              <li>M. Tech. VLSI</li>
                              <li>M. Sc. Data Science</li>
                              <li>M. Sc. Physics</li>
                              <li>M. Sc. Chemistry</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                    <li 
                      onMouseEnter={() => setShowPhd(true)}
                      onMouseLeave={() => setShowPhd(false)}
                      className="position-relative"
                    >
                      Ph. D.
                      {showPhd && (
                        <div className="phd-submenu">
                          <div className="phd-section">
                            <h4>Research Programs</h4>
                            <ul>
                              <li>School of Computer Science and Engineering</li>
                              <li>School of Electronics Engineering</li>
                              <li>School of Mechanical Engineering</li>
                              <li>School of Advanced Sciences</li>
                              <li>School of Social Sciences and Humanities</li>
                              <li>School of Law</li>
                              <li>School of Business</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-3 cursor-pointer">Application Process</li>
              <li className="mb-3 cursor-pointer">Fees & Scholarship</li>
              <li className="mb-3 cursor-pointer">STARS</li>
              <li className="mb-3 cursor-pointer">Affidivit</li>
              <li className="mb-3 cursor-pointer">Videos</li>
            </ul>
          </div>
          {/* Content Section */}
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;