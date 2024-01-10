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
			- JavaScript 코드 블록 : JavaScript 문은 중괄호 &#123;...&#125; 안에 코드 블록으로 그룹화될 수 있습니다.
			<h3>JS Syntax</h3>
			- 자바스크립트 구문 고정값 , 변수값<br />
			- 고정값 : 자바스크립트 리터럴<br />
			- 숫자는 소수점 유무에 관계없이 작성<br />
			- 문자열은 큰따옴표나 작은 따옴표로 작성된 텍스트<br />
			- 자바스크립트 변수는 데이터 값을 저장하는데 사용<br />
			- var , let, const 키워드 사용<br />
			- 자바스크립트 연산자 - 산술 연산자 ( + - * /) 를 사용하여 값을 계산합니다 .<br />
			- 할당 연산자 ( =) 를 사용하여 변수에 값을 할당합니다 .<br />
			- 자바스크립트 표현식 : 표현식은 값을 계산하는 값, 변수 및 연산자의 조합입니다.<br />
			- JavaScript 키워드는 수행할 작업을 식별하는 데 사용됩니다.<br />
			- 이중 슬래시 뒤 //또는 /*및 사이의 코드는 주석*/ 으로 처리<br />
			- 식별자는 JavaScript 이름입니다. JavaScript 이름은 다음으로 시작해야 합니다. 1. 문자(AZ 또는 az) 2. 달러 기호($) 3. 아니면 밑줄(_)<br />
			- JavaScript는 대소문자를 구분합니다.lastName및 는 lastname두 개의 다른 변수<br />
			- vaScript에서는 하이픈을 사용할 수 없습니다. 뺄셈을 위해 예약되어 있습니다. Camel 케이스<br />
			- JavaScript는 유니코드 문자 집합을 사용합니다.<br />
			<h3>JS 주석</h3>
			<p className='dot'>한줄 주석 //</p>
			<p className='dot'>여러줄 주석(블록주석) /*  ~ */</p>
			<p className='dot'>한 줄 주석을 사용하는 것이 일반적 / 블록 주석은 공식 문서에 자주 사용</p>
			<h3>JS 변수</h3>
			<p className='dot'>변수는 데이터를 저장하는 컨테이너</p>
			<strong>변수 이름 규칙</strong>
			<p className='dot'>이름에는 문자, 숫자, 밑줄 달러 기호가 포함될 수 있다.</p>
			<p className='dot'>이름은 문자로시작해야 한다.</p>
			<p className='dot'>이름은 $ 및 _로 시작 할 수도 있다.</p>
			<p className='dot'>이름은 대소문자를 구분</p>
			<p className='dot'>예약어(키워드)는 이름으로 사용할 수 없다.</p>
			<h3>JS let</h3>
			<h3>JS const</h3>
			<p className='dot'>재 할당 할 수 없다</p>
			<p className='dot'>JavaScript const변수는 선언될 때 값을 할당해야 합니다.</p>
			<p className='dot'>const값이 변경되어서는 안 된다는 것을 알고 있는 경우에는 항상 변수를 선언하십시오 .</p>
			&lt;다음을 선언할때 사용&gt;
			<p className='dot'>새로운 배열</p>
			<p className='dot'>새로운 객체</p>
			<p className='dot'>새로운 함수</p>
			<p className='dot'>새로운 regExp</p>
			<p className='dot'>상수 배열의 요소를 변경할 수 있다. 하지만 배열을 다시 할당할 수는 없다.</p>
			<p className='dot'>상수 개체의 속성을 변경할 수 있다. 하지만 객체를 재할당할 수는 없다. </p>
			<p className='dot'>let는 constInternet Explorer 11 이하에서는 지원되지 않습니다.</p>
			<h3>JS 연산자</h3>
			<p className='dot'>산술 연산자 : + - * ** / % ++ ++</p>
			<p className='dot'>할당 연산자 : = += -+ *= /+ %= **= </p>
			<p className='dot'>비교 연산자 : == === != !== &gt; < >= &lt;= ?</> </p>
			<p className='dot'>문자열 연산자 : 모든 비교 연산자는 문자열에도 사용 할 수 있다. 알페벳 순의로 비교된다.<br />  +문자열을 추가(연결)하는 데에도 사용할 수 있습니다 .<br /> 할당 연산자 +=를 사용하여 문자열을 추가(연결)할 수도 있습니다.</p>
			<p className='dot'>논리 연산자 : && || !</p>
			<p className='dot'>비트 연산자 : &, |, ~, ^, &lt;&lt;, &gt;&gt;, &gt;&gt;&gt;</p>
			<p className='dot'>삼항 연산자 : 조건 ? true = false</p>
			<p className='dot'>유형 연산자 : typeof , instanceof </p>
			<h3>JS 산술</h3>
        </div>
      </div>
    </ContentWrap>
  </div>
  )
}

