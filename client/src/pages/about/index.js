import React from 'react';
import TeamPic from '../../components/img/teamMeeting.jpg';

function About() {
    return (
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1">About the Developers</h1>
                <h3>Eric : </h3>
                <p class="lead">I'm baby leggings literally neutra four dollar toast, flannel kitsch shoreditch food truck hot chicken messenger bag umami meggings. Cliche dreamcatcher humblebrag pabst typewriter taxidermy scenester. Crucifix bitters glossier austin godard jianbing plaid scenester banh mi meditation knausgaard wayfarers truffaut pok pok. Church-key chia chicharrones man bun, fixie polaroid mustache.</p>

                <h3>Garrett:</h3>
                <p class="lead">YOLO gluten-free offal banh mi seitan actually. Tacos poke hella schlitz chartreuse. Marfa heirloom franzen jianbing banh mi, pork belly green juice chartreuse drinking vinegar narwhal brooklyn four dollar toast bitters shaman. Vinyl hoodie trust fund sriracha venmo vaporware try-hard irony heirloom quinoa truffaut butcher live-edge dreamcatcher. Gochujang twee quinoa tote bag woke stumptown post-ironic yr. Master cleanse YOLO polaroid unicorn pork belly hot chicken bushwick, knausgaard gastropub post-ironic roof party.</p>

                <h3>James:</h3>
                <p class="lead">Bespoke XOXO schlitz, lomo hashtag artisan organic put a bird on it. Gentrify you probably haven't heard of them pug fam narwhal raw denim jianbing. Pug health goth freegan, raclette waistcoat air plant salvia pinterest cornhole ramps. Franzen vegan plaid, wolf next level meh kinfolk listicle wayfarers pickled chillwave man braid vaporware squid vice. Biodiesel try-hard retro drinking vinegar, coloring book knausgaard cloud bread kickstarter.</p>

                <h3>Lincoln: </h3>
                <p class="lead">Pok pok chartreuse kale chips four loko. Fashion axe vice hashtag narwhal, pabst adaptogen pinterest banh mi jean shorts ramps fam celiac chia. Kale chips migas vaporware raclette scenester heirloom quinoa. Artisan marfa quinoa fashion axe, mixtape direct trade shoreditch cronut art party enamel pin. Fashion axe pok pok gentrify hell of chia etsy snackwave green juice hot chicken brunch. Post-ironic umami ennui schlitz direct trade. Brunch twee locavore helvetica.</p>

                <h3>Matt:</h3>
                <p class="lead">Prism four loko microdosing irony ugh enamel pin, ethical 90's cold-pressed farm-to-table la croix. Wolf forage tattooed microdosing pickled, asymmetrical single-origin coffee cloud bread polaroid messenger bag. Meditation freegan jean shorts kombucha sartorial tote bag, irony VHS shabby chic umami chartreuse truffaut crucifix. Tbh disrupt hexagon, pok pok wolf hell of irony iceland selfies pickled tattooed. Gluten-free readymade succulents tbh letterpress, franzen poutine actually paleo hell of echo park man bun kombucha. 3 wolf moon mlkshk fam, letterpress beard cardigan hella put a bird on it humblebrag yuccie you probably haven't heard of them before they sold out craft beer truffaut man braid. Four loko VHS you probably haven't heard of them lumbersexual.</p>
            </div>
            <div class="col-lg-3 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img class="rounded-lg-3 img-fluid" src= {TeamPic} alt="" width="720" />
            </div>
        </div>
    );
}

export default About;