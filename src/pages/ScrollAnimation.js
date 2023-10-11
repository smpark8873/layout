import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

function ScrollAnimaiton() {
    return (
        <div className="warp">
            <p style={{margin: '30px 0', fontSize: '30px', color: 'blue'}}>
                참고사이트 : <a href="https://dbramwell.github.io/react-animate-on-scroll/" target='_blank'>https://dbramwell.github.io/react-animate-on-scroll/</a> 
            </p>
            <p style={{margin: '30px 0', fontSize: '30px', color: 'black'}}>
            설치 : npm install react-animate-on-scroll  --legacy-peer-deps
            </p>
            <ScrollAnimation animateIn="fadeIn">
                Some Text
            </ScrollAnimation>
        </div>
    );  
}

export default ScrollAnimaiton;
 