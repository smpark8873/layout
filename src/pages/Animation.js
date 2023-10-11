// You can live edit this code below the import statements
import React from 'react';
import { Zoom, Fade, Flip, Reveal   } from 'react-reveal';

function Animaiton() {
    return (
        <div className="warp">
            <Zoom duration={1000}>
                <div>
                    <div>First Child</div>
                    <div>Second Child</div>
                </div>
            </Zoom>
            <Fade left  delay={1000}>
                <h1  style={{marginTop: '100px'}}>
                   <p> Your content goes here</p>
                </h1>
            </Fade>
            <Flip>
                <h1>
                    Your content goes here
                </h1>
            </Flip>
            <Reveal effect="fadeInUp">
  <p>Markup that will be revealed on scroll</p>
</Reveal>
<Reveal effect="fadeInUp" effectOut="fadeOutLeft">
  <p>Markup that will be revealed on scroll</p>
</Reveal>

        </div>
    );  
}

export default Animaiton;
 