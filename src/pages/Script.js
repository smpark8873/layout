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
        <h2>JS튜토리얼</h2>		
        <div className='section'>
			<h3>js 소개</h3>
			<h3>js 위치</h3>
			<h3>js 출력</h3>
			<p className='dot'>1. innerHTML</p>
			ex) document.getElementById("demo").innerHTML = 5 + 6;
			<p className='dot'>2. document.write(5 + 6);</p>
			- HTML 문서가 로드된 후 document.write()를 사용하면 기존 HTML이 모두 삭제 됩니다 .<br />
			- document.write() 메서드는 테스트용으로만 사용해야 합니다.
			<p className='dot'>3. window.alert() 사용</p>
			- 경고 상자를 사용하여 데이터를 표시할 수 있습니다.<br />
			- 키워드를 건너뛸 수 있습니다 window.
			<p className='dot'>4. onsole.log() 사용</p>
			- 디버깅을 위해 console.log()브라우저에서 메서드를 호출하여 데이터를 표시
			<p>자바스크립트 인쇄</p>
			- JavaScript에는 인쇄 개체나 인쇄 메서드가 없습니다. <br />
			- JavaScript에서는 출력 장치에 액세스할 수 없습니다. <br />
			- 유일한 예외는 window.print()현재 창의 내용을 인쇄하기 위해 브라우저에서 메서드를 호출할 수 있다는 것입니다.
			<h3>JS Statements</h3>
			JavaScript 문은 다음으로 구성됩니다.<br />
			- 값, 연산자, 표현식, 키워드 및 설명.<br />
			- 명령문은 작성된 순서와 동일한 순서로 하나씩 실행됩니다.<br />
			- 세미콜론은 JavaScript 문을 구분합니다. 각 실행문 끝에 세미콜론을 추가합니다.<br />
			- 세미콜론으로 구분하면 한 줄에 여러 문이 허용됩니다.<br />
			- JavaScript는 여러 공백을 무시합니다. let person = "Hege";<br />
			- 연산자 주위에 공백을 두는 것이 좋습니다( = + - * / ).let x = y + z;<br />
			- 최고의 가독성을 위해 프로그래머는 80자를 초과하는 코드 줄을 피하는 경우가 많습니다. JavaScript 문이 한 줄에 맞지 않는 경우 이를 나누는 가장 좋은 위치는 <strong>연산자 다음</strong>입니다.<br />
			- JavaScript 코드 블록 : JavaScript 문은 중괄호 {...} 안에 코드 블록으로 그룹화될 수 있습니다.
			<h3>JS Syntax</h3>
			- 자바스크립트 구문 고정값 , 변수값<br />
			- 고정값 : 자바스크립트 리터럴<br />
			- 숫자는 소수점 유무에 관계없이 작성<br />
			- 문자열은 큰따옴표나 작은 따옴표로 작성된 텍스트<br />
			- 자바스크립트 변수는 데이터 값을 저장하는데 사용<br />
			- var , let, const 키워드 사용<br />
			- 자바스크립트 연산자 - 산술 연산자 ( + - * /) 를 사용하여 값을 계산합니다 .<br />
			- 할당 연산자 ( =) 를 사용하여 변수에 값을 할당합니다 .<br />
			- 자바스크립트 표현식
        </div>
      </div>
    </ContentWrap>
  </div>
  )
}

