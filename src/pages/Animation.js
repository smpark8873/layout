import React from 'react';
import styled from 'styled-components';
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// function CustomAnimation({ children }) {
//     return <Reveal keyframes={customAnimation}>{children}</Reveal>;
// }


const AnimationWrap = styled.div`
    padding: 150px 50px 50px;
    text-align: center;

    & > div { 
        p {
            line-height: 70px;
            font-size: 50px;
        }
    }
`;

const Animation = (children) => {
    return (
        <div className='wrapper'>
            <AnimationWrap>
                {/* <Fade direction="left"><p>fade fade</p></Fade> */}
                <Reveal keyframes={customAnimation}>{children}</Reveal>
            </AnimationWrap>            
        </div>
    );
};
  
export default Animation;