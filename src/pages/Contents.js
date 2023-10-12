import React, { useState } from 'react';
import styled from "styled-components";

const ContentWrap = styled.div`
    padding: 150px 50px 50px;
    min-height: 1000px;
    .btn {
        width: 100px;
        height: 40px;
        font-size: 30px; 
        line-height: 38px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
`



const Contents = () => {
    const [number, setNumber] = useState(0); 

    const onIncrease = () => {
        // setNumber 함수를 통한 state 값 변경
        setNumber(prevNumber => prevNumber + 1);
      }
    
      const onDecrease = () => {
        // setNumber 함수를 통한 state 값 변경
        setNumber(prevNumber => prevNumber - 1);
      }
    
    return (
        <ContentWrap>
            <h1>{number}</h1>
            <button className="btn" onClick={onIncrease}>+</button>
            <button className="btn" onClick={onDecrease}>-</button>
        </ContentWrap>
    );
}

export default Contents;