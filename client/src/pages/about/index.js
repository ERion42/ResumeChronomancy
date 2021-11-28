import React from 'react';
import TeamPic from '../../components/img/teamMeeting2.jpg';

function About() {
    return (
        <section class="container">
            <div class="row flex-lg-row-reverse justify-content-center g-5 py-5">
                {/* Image - Right now it's a stock photo but we can easily replace it with something else... or nothing at all */}
                <div class="col-8 col-sm-6 col-lg-4 justify-content-center">
                    <img src= {TeamPic} alt="by Pablo Nidam on Scopio" class="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" />
                </div>
                {/* This section is about our team - most likely it'll be a one sentence blurb and a link to our GitHubs */}
                <div class="col-lg-8">
                    <h1 class="display-5 fw-bold lh-1 mb-3">The Team:</h1>
                    <h3>Eric : </h3>
                    <p class="lead">I'm baby leggings literally neutra four dollar toast, flannel kitsch shoreditch food truck hot chicken messenger bag umami meggings. GitHub: Church-key chia chicharrones man bun, fixie polaroid mustache.</p>

                    <h3>Garrett:</h3>
                    <p class="lead">YOLO gluten-free offal banh mi seitan actually. Tacos poke hella schlitz chartreuse. GitHub: Master cleanse YOLO polaroid unicorn pork belly hot chicken bushwick, knausgaard gastropub post-ironic roof party.</p>

                    <h3>James:</h3>
                    <p class="lead">Bespoke XOXO schlitz, lomo hashtag artisan organic put a bird on it. GitHub: Biodiesel try-hard retro drinking vinegar, coloring book knausgaard cloud bread kickstarter.</p>

                    <h3>Lincoln: </h3>
                    <p class="lead">Pok pok chartreuse kale chips four loko. Fashion axe pok pok gentrify hell of chia etsy snackwave green juice hot chicken brunch. GitHub: Post-ironic umami ennui schlitz direct trade. </p>

                    <h3>Matt:</h3>
                    <p class="lead">Prism four loko microdosing irony ugh enamel pin, ethical 90's cold-pressed farm-to-table la croix. GitHub: Four loko VHS you probably haven't heard of them lumbersexual.</p>            
                    
                </div>
            </div>
        </section>
    );
}

export default About;