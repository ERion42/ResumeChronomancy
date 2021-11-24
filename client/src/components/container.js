// Set up dependencies
import React, { useState } from 'react';
import NavTabs from './pages/navBar/index';
import Landing from './pages/landingPage/index';
import About from './pages/about/index';
import FAQ from './pages/FAQs/index';
import Dashboard from './pages/dashboard/index';

// Modularize PortfolioContainer
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Landing');

  // check the value of `currentPage` - return the corresponding component to render
  const renderPage = () => {
    if (currentPage === 'Landing') {
      return <Landing />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'FAQ') {
      return <FAQ />;
    }
    return <Dashboard />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* passing currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
