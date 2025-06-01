import React from "react";

function Home() {
    return (
        <section className="home" id="home">
            <div className="main">
                <div className="main-heading">
                    <h1>We are a <span>Creative</span><br /> Design Agency</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat pulvinar cursus. 
                    Suspendisse venenatis pharetra nibh, vel porta sem varius ac. Cras mollis, nibh id dignissim volutpat, orci purus congue sem, 
                    sit amet consectetur dolor erat bibendum nisi. Duis sit amet convallis lorem. 
                    Vivamus tristique nec nibh at elementum. Vestibulum.</p>
                </div>
        
                <div className="big-image">
                    <img src="/images/main-image.jpeg" alt="Main Web Image" />
                </div>
            </div>
        </section>
    )
}

export default Home;