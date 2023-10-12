import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function ScrollAnimaiton() {
    return (
        <div className="warp">
            <p style={{margin: '30px 0', fontSize: '30px', color: 'blue'}}>
                참고사이트 : <a href="https://dbramwell.github.io/react-animate-on-scroll/" target='_blank' rel="noopener noreferrer">https://dbramwell.github.io/react-animate-on-scroll/</a> 
            </p>
            <p style={{margin: '30px 0', fontSize: '30px', color: 'black'}}>
            설치 : npm install react-animate-on-scroll  --legacy-peer-deps
            </p>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <h1>
                    React Animate On Scroll
                </h1>
                <h2>
                    Using:
                </h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <h2>
                    <a href='https://daneden.github.io/animate.css/'>
                    Animate.css
                    </a>
                </h2>
                </ScrollAnimation>
            
        </div>
    );  
}

export default ScrollAnimaiton;
 