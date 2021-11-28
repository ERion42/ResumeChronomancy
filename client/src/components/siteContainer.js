import React, { useState } from 'react';
import Auth from '../utils/auth';
// Front End
import NavBar from './navBar/index';
import LandingPage from "../pages/landingPage/index";
import Login from "../pages/login/index";
import SignUpForm from '../pages/signup/index';
import About from '../pages/about/index';
import FAQ from '../pages/FAQs/index';
import Dashboard from '../pages/dashboard/index';
import EducationForm from '../components/forms/EducationForm'


export default function SiteContainer() {
    const [currentPage, setCurrentPage] = useState('LandingPage');

    // Check to see the value of 'currentPage', then returns component to render
    const renderPage = () => {
        if (Auth.loggedIn()) {
            return <Dashboard />

        } else {
            if (currentPage === 'Login') {
                return <Login />;
            }
            if (currentPage === 'SignUpForm') {
                return <SignUpForm />;
            }
            if (currentPage === 'About') {
                return <About />;
            }
            if (currentPage === 'FAQ') {
                return <FAQ />;
            }
            return <LandingPage />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className="container">
                {renderPage()}
            </div>
        </main>
    )


}