// Landing page needs some formatting
// If we could get everything to fit on one screen with no vertical scrolling that'd be ideal.
import React from 'react';
import FirstPic from '../../components/img/frustratedWriter.jpg'
import SecondPic from '../../components/img/happyWriter.jpg'
import ThirdPic from '../../components/img/businessMeeting.jpg'

function LandingPage({ currentPage }) {
    return (
        <section className="container-fluid">
            {/* Title */}
            <h1 className="text-center m-1 p-3">RESUME GEOMANCY</h1>

            {/* This here is the carousel- It should contain a few illustrative pictures and little text blurbs */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {FirstPic} className="d-block w-100" alt="Rodrigo Ascencio on Scopio"/>
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>Go Fromt This...</h5>
                            <p>Resume writing can be frustrating!</p>
                        </div>                
                    </div>
                    <div className="carousel-item">
                        <img src= {SecondPic} className="d-block w-100" alt="Rodrigo Ascencio on Scopio" />
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>... To this...</h5>
                            <p>Let us help you create a resume that will land you the interview!</p>
                        </div>  
                    </div>
                    <div className="carousel-item">
                        <img src= {ThirdPic} className="d-block w-100" alt="Scopio" />
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>...To this!</h5>
                            <p>Then use that interview to land you the job of your dreams!</p>
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
            <div>
                <p className="text-center mt-4">Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.</p>
            </div>
        </section>
    );
}

export default LandingPage;