import React from 'react';
import Logo from '../img/logo.png'


function NavBar() {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                {/* Logo needs sizing work, too big right now */}
                <img src= {Logo} alt="logo"></img>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Dashboard</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">FAQS</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                
                </form>

                <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
            </div>
            </div>
        </header>        
    );
}

export default NavBar;