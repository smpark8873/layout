import React from 'react';
import styled from 'styled-components';
import { Fade , Slide , Bounce, Flip, JackInTheBox, Rotate, Zoom} from "react-awesome-reveal";
//Hinge, Roll

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

const Business = () => {
    return (
        <div className='wrapper'>            
            <AnimationWrap>
            <p style={{margin: '30px 0', fontSize: '30px', color: 'blue'}}>
                참고사이트 : <a href="https://react-awesome-reveal.morello.dev/docs/getting-started" rel='noreferrer' target='_blank'>https://react-awesome-reveal.morello.dev/docs/getting-started</a> 
            </p>
                <Fade direction='up'  cascade damping={0.5}> {/* direction : 애니메이션의 원점 변경. up, down, left, right */}
                    <p>Fade Up</p>
                    <p>Fade Up</p>
                </Fade>                
                <Fade direction='down' delay={2} > {/* delay : 애니메이션이 시작되기전 대기시간 */}
                    <p>Fade Down</p>    
                </Fade>
                 <Fade direction='left' className='kk'>
                    <p>Fade Left</p>                 
                </Fade>
                <Fade direction='right' triggerOnce>
                    <p>Fade Right</p>                  
                </Fade>
                <Fade cascade damping={0.1}>Each character will appear one by one</Fade>

                <Fade cascade>
                    <ul>
                        <li>I enter first...</li>
                        <li>...then comes my turn...</li>
                        <li>...and finally you see me!</li>
                    </ul>
                </Fade>

                <Slide direction='left'>
                    <p>Slide</p>
                </Slide>

                <Slide direction='right'>
                    <p>Slide</p>
                </Slide>

                <Bounce>
                    <p>Bounce</p>
                </Bounce>

                <Flip>
                    <p>Flip</p>
                </Flip>
                

                <JackInTheBox>
                    <p>JackInTheBox</p>
                </JackInTheBox>
                
                <Rotate>
                    <p>Rotate</p>
                </Rotate>

                <Zoom>
                    <p>Zoom</p>
                </Zoom>

                {/* <Roll>
                    <p>Roll</p>
                </Roll>
                <Hinge>
                    <p>Hinge</p>
                </Hinge>
                */}
            </AnimationWrap>            
        </div>
    );
};
  
export default Business;