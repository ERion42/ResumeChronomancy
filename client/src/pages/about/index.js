import React from 'react';
import TeamPic from '../../components/img/teamMeeting.jpg';
import Collapsible from 'react-collapsible-paragraph';

function About() {
    return (
        <section className="container">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                {/* Image - Right now it's a stock photo but we can easily replace it with something else... or nothing at all */}
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src= {TeamPic} alt="by Pablo Nidam on Scopio" className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" />
                </div>
                {/* This section is about our team - most likely it'll be a one sentence blurb and a link to our GitHubs */}
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">The Team:</h1>
                    <h3>Eric : </h3>
                    <Collapsible className="lead">I'm baby leggings literally neutra four dollar toast, flannel kitsch shoreditch food truck hot chicken messenger bag umami meggings. Cliche dreamcatcher humblebrag pabst typewriter taxidermy scenester. Crucifix bitters glossier austin godard jianbing plaid scenester banh mi meditation knausgaard wayfarers truffaut pok pok. Church-key chia chicharrones man bun, fixie polaroid mustache.</Collapsible>

                    <h3>Garrett:</h3>
                    <Collapsible className="lead">YOLO gluten-free offal banh mi seitan actually. Tacos poke hella schlitz chartreuse. Marfa heirloom franzen jianbing banh mi, pork belly green juice chartreuse drinking vinegar narwhal brooklyn four dollar toast bitters shaman. Vinyl hoodie trust fund sriracha venmo vaporware try-hard irony heirloom quinoa truffaut butcher live-edge dreamcatcher. Gochujang twee quinoa tote bag woke stumptown post-ironic yr. Master cleanse YOLO polaroid unicorn pork belly hot chicken bushwick, knausgaard gastropub post-ironic roof party.</Collapsible>

                    <h3>James:</h3>
                    <Collapsible className="lead">Bespoke XOXO schlitz, lomo hashtag artisan organic put a bird on it. Gentrify you probably haven't heard of them pug fam narwhal raw denim jianbing. Pug health goth freegan, raclette waistcoat air plant salvia pinterest cornhole ramps. Franzen vegan plaid, wolf next level meh kinfolk listicle wayfarers pickled chillwave man braid vaporware squid vice. Biodiesel try-hard retro drinking vinegar, coloring book knausgaard cloud bread kickstarter.</Collapsible>

                    <h3>Lincoln: </h3>
                    <Collapsible className="lead">Pok pok chartreuse kale chips four loko. Fashion axe vice hashtag narwhal, pabst adaptogen pinterest banh mi jean shorts ramps fam celiac chia. Kale chips migas vaporware raclette scenester heirloom quinoa. Artisan marfa quinoa fashion axe, mixtape direct trade shoreditch cronut art party enamel pin. Fashion axe pok pok gentrify hell of chia etsy snackwave green juice hot chicken brunch. Post-ironic umami ennui schlitz direct trade. Brunch twee locavore helvetica.</Collapsible>

                    <h3>Matt:</h3>
                    <Collapsible className="lead">Prism four loko microdosing irony ugh enamel pin, ethical 90's cold-pressed farm-to-table la croix. Wolf forage tattooed microdosing pickled, asymmetrical single-origin coffee cloud bread polaroid messenger bag. Meditation freegan jean shorts kombucha sartorial tote bag, irony VHS shabby chic umami chartreuse truffaut crucifix. Tbh disrupt hexagon, pok pok wolf hell of irony iceland selfies pickled tattooed. Gluten-free readymade succulents tbh letterpress, franzen poutine actually paleo hell of echo park man bun kombucha. 3 wolf moon mlkshk fam, letterpress beard cardigan hella put a bird on it humblebrag yuccie you probably haven't heard of them before they sold out craft beer truffaut man braid. Four loko VHS you probably haven't heard of them lumbersexual.</Collapsible>            
                    
                </div>
            </div>
        </section>
    );
}

export default About;