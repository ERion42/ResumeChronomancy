// Landing page needs some formatting
// If we could get everything to fit on one screen with no vertical scrolling that'd be ideal.
import React from 'react';
import FirstPic from '../../components/img/frustratedWriter2.jpg'
import SecondPic from '../../components/img/hired.jpg'
import ThirdPic from '../../components/img/businessMeeting2.jpg'

function LandingPage({ currentPage }) {
    return (
        <section class="container-fluid">
            {/* Title */}
            <h1 className="text-center m-1 p-3">RESUME GEOMANCY</h1>

            {/* This here is the carousel- It should contain a few illustrative pictures and little text blurbs */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {FirstPic} className="d-block w-100" alt="by Maksim Chernyshev on Scopio"/>
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>Go From This...</h5>
                            <p>Resume writing can be frustrating!</p>
                        </div>                
                    </div>
                    <div className="carousel-item">
                        <img src= {SecondPic} className="d-block w-100" alt="by Maksim Chernyshev on Scopio" />
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>...To This...</h5>
                            <p>Let us help you create a resume that will land you the interview!</p>
                        </div>  
                    </div>
                    <div className="carousel-item">
                        <img src= {ThirdPic} className="d-block w-100" alt="by Maksim Chernyshev on Scopio" />
                        <div className="carousel-caption d-none d-md-block bg-dark">
                            <h5>...To This!</h5>
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
                <p className="text-center mt-4">I'm baby quinoa af iPhone yr, lo-fi tilde +1 fingerstache raclette beard. Squid before they sold out knausgaard, disrupt hella gochujang celiac vegan skateboard intelligentsia raw denim. Next level echo park hot chicken kogi you probably haven't heard of them shoreditch dreamcatcher heirloom normcore retro fashion axe brooklyn health goth tofu offal. </p>
            </div>
        </section>
    );
}

export default LandingPage;