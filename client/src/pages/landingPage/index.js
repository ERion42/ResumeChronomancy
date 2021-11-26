// Landing page needs some formatting
// If we could get everything to fit on one screen with no vertical scrolling that'd be ideal.
import React from 'react';
import FirstPic from '../../components/img/frustratedWriter.jpg'
import SecondPic from '../../components/img/happyWriter.jpg'
import ThirdPic from '../../components/img/businessMeeting.jpg'

function LandingPage({ currentPage }) {
    return (
        <section class="container">
            {/* This here is the carousel- It should contain a few illustrative pictures and little text blurbs */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {FirstPic} className="d-block w-100" alt="Rodrigo Ascencio on Scopio"/>
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>                
                    </div>
                    <div className="carousel-item">
                        <img src= {SecondPic} className="d-block w-100" alt="Rodrigo Ascencio on Scopio" />
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>  
                    </div>
                    <div className="carousel-item">
                        <img src= {ThirdPic} className="d-block w-100" alt="Scopio" />
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>  
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* After the carousel we might want to add some important text */}
        </section>
    );
}

export default LandingPage;