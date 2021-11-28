import React from 'react';
import Auth from '../../utils/auth';
import Logo from '../img/logo.png';


function NavBar({ currentPage, handlePageChange }) {
    // Checked In
    if (Auth.loggedIn()) {
        return (
            <header className="p-3 bg-dark text-white">
                <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img src= {Logo} alt="logo"></img>
    
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a 
                            href="#dashboard" 
                            onClick={() => handlePageChange('Dashboard')}
                            className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}>Dashboard Home
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#skills" 
                            onClick={() => handlePageChange('Skills')}
                            className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}>Skills
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#education" 
                            onClick={() => handlePageChange('Education')}
                            className={currentPage === 'Education' ? 'nav-link active' : 'nav-link'}>Education
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#experience" 
                            onClick={() => handlePageChange('Experience')}
                            className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}>Experience
                            </a>
                        </li>                                                                        
                    </ul>
    
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    
                    </form>
   
                    {/* This button is to be hidden if the user is not signed in */}
                    <button type="button"
                        onClick={() => Auth.logout()}
                        className="btn btn-success me-2">
                            Logout
                        </button>
    
                </div>
                </div>
            </header>        
        );
    // checked Out
    } else { 
        return (
            <header className="p-3 bg-dark text-white">
                <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img src= {Logo} alt="logo"></img>
    
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a 
                            href="#home" 
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#faqs" 
                            onClick={() => handlePageChange('FAQ')}
                            className={currentPage === 'FAQ' ? 'nav-link active' : 'nav-link'}>FAQ
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#about" 
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About
                            </a>
                        </li>
                    </ul>
    
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    
                    </form>
    
                    {/* This button is to be hidden if the user is signed in */}
                    <div className="text-end">
                    <button type="button" 
                        onClick={() => handlePageChange('Login')} 
                        className="btn btn-primary me-2">
                            Login
                    </button>
    
                    {/* This button is to be hidden if the user is signed in */}
                    <button type="button" 
                        onClick={() => handlePageChange('SignUpForm')}
                        className="btn btn-warning me-2">
                            Sign-up
                        </button>
                    </div>
    
                </div>
                </div>
            </header>        
        );        
    }


}

export default NavBar;