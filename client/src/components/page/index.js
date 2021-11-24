import React from 'react';
import FirstPic from '../img/frustratedWriter.jpg'
import SecondPic from '../img/happyWriter.jpg'
import ThirdPic from '../img/businessMeeting.jpg'

function Page({ currentPage }) {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src= {FirstPic} class="d-block w-100" alt="Photo by Rodrigo Ascencio on Scopio"/>
                    <div class="carousel-caption d-none d-md-block bg-dark">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>                
                </div>
                <div class="carousel-item">
                    <img src= {SecondPic} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block bg-dark">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>  
                </div>
                <div class="carousel-item">
                    <img src= {ThirdPic} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block bg-dark">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>  
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Page;