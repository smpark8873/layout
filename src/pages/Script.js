import React from 'react'
import styled from 'styled-components';

const ContentWrap = styled.div`
	margin: 0 auto;
	padding: 150px 50px 0;
	width: 1000px;	
	.section {
		padding: 30px 0; 
		h2 {
			margin: 0 0 20px;
			line-height: 34px;
			font-size: 32px;
		}		
		h3 {
			margin: 30px 0 10px;
			line-height: 26px; 
			font-size: 22px;
		}
		h4 {
			margin: 20px 0 10px;
			line-height: 20px;
			font-size: 18px;
			color: #000;
		}
		.tbl { 
			border-collapse : collapse;
			th {
				padding: 10px 20px;
				border: 1px solid #ddd;
				background-color: #f8f8f8;
			}
			td {
				padding: 10px 20px;
				border: 1px solid #ddd;
			}
		}
		.content {
			padding-left: 10px;
			color: #555;
			line-height: 24px;
			font-size: 16px; 			
			.red {
				color: red;
			}
			.bold {
				font-weight: bold;
			}
			button {
				padding: 0 20px;
				height: 30px;
				border: 1px solid #777;
				background-color: #999;
				border-radius: 5px;
				font-size: 18px;
				color: #fff;
				font-weight: bold;
			}
			li {
				margin-top: 10px;
			}
		}
		.dot {
			position: relative; 
			padding-left: 10px;
			&::before {
				display: inline-block;
				content:'';
				position: absolute;
				top: 10px;
				left: 0;
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background-color: #999;					
			}
		}
	}
`;

export default function Script() {
  return (
    <div>
    <ContentWrap>
      <div className='section'>
        <h2>JavaScript 기본</h2>
        <h3>JavaScript는 무엇인가?</h3>
        <div className='content'>
          <p className='dot'>웹사이트상에서 동적 상호작용성(예를 들면, 게임, 버튼이 눌리거나 폼에 자료가 입력될 때 반응, 동적인 스타일링과 애니메이션)을 제공할 수 있는 완전한 동적 프로그래밍 언어</p>
         	<p className='dot'>
              <strong>참고:</strong> script 요소를 HTML 파일의 맨 아래쪽 근처에 둔 이유는 HTML은 파일 내에 나타나는 순서대로 브라우저에 로드(load)되기 때문입니다.
              만약 JavaScript가 먼저 로드되고 자신의 아래 쪽에 있는 HTML에 영향을 준다고 하면, 영향을 줄 HTML 보다 먼저 JavaScript가 로드되기 때문에 작동하지 않을 것입니다.
               따라서, HTML 페이지의 맨 아래쪽 근처에 JavaScript를 두는 것이 최고의 전략입니다.
          </p>
        </div>
      </div>
    </ContentWrap>
  </div>
  )
}

