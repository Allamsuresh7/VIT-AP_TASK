import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import School from './components/School';
import './Hero.css';
import SchoolPrograms from './components/SchoolPrograms';
import SchoolEvents from './components/SchoolEvents';
import SchoolResearch from './components/SchoolResearch';
import SchoolLife from './components/SchoolLife';
import NewsSection from './components/NewsSection';
import HomeSocial from './components/HomeSocial';
import HomeAchievements from './components/HomeAchievements';
import UniversityFooter from './components/UniversityFooter';

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <StatsSection />
        <School />
        <SchoolPrograms/>
        <SchoolEvents/>
        <SchoolResearch/>
        <SchoolLife/>
        <NewsSection/>
        <HomeSocial/>
        <HomeAchievements/>
        <UniversityFooter/>
      </div>
    </Router>
  );
}

export default App;
