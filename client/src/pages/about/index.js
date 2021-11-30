import React from 'react';
import TeamPic from '../../components/img/ourTeam.jpg';
// import Collapsible from 'react-collapsible-paragraph';

function About() {
    return (
        <section className="container">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 pb-0">
                {/* Image - Right now it's a stock photo but we can easily replace it with something else... or nothing at all */}
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src= {TeamPic} alt="Maksim Chernyshev on Scopio" className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" />
                </div>
                {/* This section is about our team - most likely it'll be a one sentence blurb and a link to our GitHubs */}
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">The Team:</h1>
                    <h3>Eric : </h3>
                    <p>Eric is a lifelong customer-service expert who has decided to make a career change into coding. So far he definitely prefers frontend development.</p> 
                    <p>GitHub: <a href="https://github.com/ERion42" target="_blank" rel="noreferrer">ERion42</a></p>

                    <h3>Garrett:</h3>
                    <p>YOLO gluten-free offal banh mi seitan actually. Tacos poke hella schlitz chartreuse. </p>
                    <p>GitHub: <a href="https://github.com/GMMarshall27" target="_blank" rel="noreferrer">GMMarshall27</a></p>

                    <h3>James:</h3>
                    <p>Bespoke XOXO schlitz, lomo hashtag artisan organic put a bird on it. Gentrify you probably haven't heard of them pug fam narwhal raw denim jianbing. </p>
                    <p>GitHub: <a href="https://github.com/moreorless13" target="_blank" rel="noreferrer">moreorless13</a></p>

                    <h3>Lincoln: </h3>
                    <p>Pok pok chartreuse kale chips four loko. Fashion axe vice hashtag narwhal, pabst adaptogen pinterest banh mi jean shorts ramps fam celiac chia. </p>
                    <p>GitHub: <a href="https://github.com/lfewell" target="_blank" rel="noreferrer">lfewell</a></p>

                    <h3>Matt:</h3>
                    <p>Prism four loko microdosing irony ugh enamel pin, ethical 90's cold-pressed farm-to-table la croix. </p>            
                    <p>GitHub: <a href="https://github.com/soraticat" target="_blank" rel="noreferrer">soraticat</a></p>
                    
                </div>
            </div>
        </section>
    );
}

export default About;