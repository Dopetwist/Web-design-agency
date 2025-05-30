import React from "react";

function About() {
    return (
        <section className="services" id="services">
            <h2 className="heading">Our Services</h2>
            <div className="img-layout">
                <div className="layout">
                    <img src="/images/minor-image1.jpeg" alt="First Sub Image" />
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat pulvinar cursus. 
                    Suspendisse venenatis pharetra nibh, vel porta sem varius ac. Cras mollis, nibh id dignissim volutpat, orci purus congue sem, 
                    sit amet consectetur dolor erat bibendum nisi. Duis sit amet convallis lorem. 
                    Vivamus tristique nec nibh at elementum. Vestibulum.</p>
                </div>

                <div className="layout">
                    <img src="/images/minor-image2.jpeg" alt="Second Sub Image" />
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat pulvinar cursus. 
                    Suspendisse venenatis pharetra nibh, vel porta sem varius ac. Cras mollis, nibh id dignissim volutpat, orci purus congue sem, 
                    sit amet consectetur dolor erat bibendum nisi. Duis sit amet convallis lorem. 
                    Vivamus tristique nec nibh at elementum. Vestibulum.</p>
                </div>

                <div className="layout">
                    <img src="/images/minor-image3.jpeg" alt="Third Sub Image" />
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat pulvinar cursus. 
                    Suspendisse venenatis pharetra nibh, vel porta sem varius ac. Cras mollis, nibh id dignissim volutpat, orci purus congue sem, 
                    sit amet consectetur dolor erat bibendum nisi. Duis sit amet convallis lorem. 
                    Vivamus tristique nec nibh at elementum. Vestibulum.</p>
                </div>
            </div>
        </section>
    )
}

export default About;