import Reac from 'react';
//import React, { useState } from 'react';

import styled from "styled-components";

// const ContentWrap = styled.div`    
//     min-height: 1000px;
//     .btn {
//         width: 100px;
//         height: 40px;
//         font-size: 30px; 
//         line-height: 38px;
//         border: 1px solid #ddd;
//         border-radius: 5px;
//     }
// `;

const ActiveItem = styled.div`
    min-height: 1000px; 
    margin-top: 100px;
    li {
        line-height: 50px;
        font-size: 20px;    
        &.active {
            font-weight: bold;
            color: blue;
        }    
    }

`;

function Contents() {
    //const [isActive, setIsActive] = useState(false);

    const handleClick = event => { 
         document.querySelectorAll('li').forEach(list => { list.classList.remove('active') })
         event.currentTarget.classList.toggle('active');  
    };  

    return (
        <ActiveItem>
            <ul>
                <li onClick={handleClick}>
                    1. nav
                </li>
                <li onClick={handleClick}>
                    2. swiper
                </li>
                <li onClick={handleClick}>
                    3. video
                </li>
                <li onClick={handleClick}>
                    4. animation
                </li>
            </ul>

            {/* <ul>
                <li className={isActive ? 'active' : ''} onClick={handleClick}>
                    1. nav
                </li>
                <li className={isActive ? 'active' : ''} onClick={handleClick}>
                    2. swiper
                </li>
                <li className={isActive ? 'active' : ''} onClick={handleClick}>
                    3. video
                </li>
                <li className={isActive ? 'active' : ''} onClick={handleClick}>
                    4. animation
                </li>
            </ul> */}
        </ActiveItem>
    );
}

export default Contents;



// 클릭시 카운트 증감
// const Contents = () => {
//     const [number, setNumber] = useState(0); 

//     const onIncrease = () => {
//         // setNumber 함수를 통한 state 값 변경
//         setNumber(prevNumber => prevNumber + 1);
//     }

//     const onDecrease = () => {
//     // setNumber 함수를 통한 state 값 변경
//     setNumber(prevNumber => prevNumber - 1);
//     }  

//     return (
//         <ContentWrap>
//             <h1>{number}</h1>
//             <button className="btn" onClick={onIncrease}>+</button>
//             <button className="btn" onClick={onDecrease}>-</button>
//         </ContentWrap>
//     );
// }

// export default Contents;