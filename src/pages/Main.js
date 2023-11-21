import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


const ContentWrap = styled.div`
	margin: 0 auto;
	padding: 150px 50px 0;
	width: 1000px;	
	.section {
		padding: 30px 0; 
		h2 {
			margin: 0;
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

const Main = (props) => {
	const products = [
		{ title: 'Cabbage', isFruit: false, id: 1 },
		{ title: 'Garlic', isFruit: false, id: 2 },
		{ title: 'Apple', isFruit: true, id: 3 },
	  ];

	const listItems = products.map(product =>
		<li
		  key={product.id}
		  style={{
			color: product.isFruit ? 'magenta' : 'darkgreen'
		  }}
		>
		  {product.title}
		</li>
	);

	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}	

	const name = 'Gregorio Y. Zara';
	return (
		<div>
			<ContentWrap>
				<div className='section'>
					<h2>빠른 시작</h2>
					<h3>구성요소 생성 및 중첩</h3>
					<div className='content'>
						<p className='dot'>React 앱은 컴포넌트로 만들어집니다.</p>
						<p className='dot'>React 구성 요소는 마크업을 반환하는 JavaScript 함수입니다.</p>
						<p className='dot'>function MyButton(){} 선언해서 &lt;MyButton /&gt;로 다른 구성요소에 중첩</p>
						<p className='dot red'>&lt;MyButton /&gt;대문자로 시작한다는 점에 유의!!! React 요소 이름은 항상 대문자로 시작해야하면 HTML태그는 소문자여야 함!!</p>
						<p className='dot'>키워드 <em>export default</em>는 파일의 주요 구성 요소를 지정</p>						
					</div>

					<h3>JSX로 마크업 작성</h3>
					<div className='content'>
						<p className='dot'>React 프로젝트에서는 편의를 위해 JSX를 사용</p>
						<p className='dot'>JSX는 HTML보다 엄격!! <span className='red'>무조건 태그를 닫아야함&lt; /&gt;</span> </p>
						<p className='dot'>구성요소는 여러 JSX 태그를 반환할 수 없습니다. <span className='red'>&lt;div&gt;...&lt;/div&gt;이를 빈 래퍼와 같은 공유 상위 항목으로 래핑해야 합니다</span></p>
					</div>

					<h3>스타일 추가</h3>
					<div className='content'>
						<p className='dot'>React에서는 <em>className</em>이 html class속성과 동일</p>
						<p className='dot'>별도의 css 파일에 규칙 작성</p>
						<p className='dot'>React는 CSS 파일을 추가하는 방법을 규정하지 않습니다.</p>
					</div>

					<h3>데이터 표시</h3>
					<div className='content'>
						<p className='dot'>중괄호를 사용하면 JavaScript로 "이스케이프백"하여 코드의 일부 변수를 포함하고 사용자에게 표시</p>
						<p className='dot'>&#123;user.name&#125;</p>
						<p className='dot'>SX 중괄호 안에 문자열 연결과 같은 더 복잡한 표현식을 넣을 수도 있습니다 .</p>
					</div>

					<h3>조건부 렌더링</h3>
					<div className='content'>
						<p className='dot'>React에는 조건 작성을 위한 특별한 구문이 없습니다. 대신 일반 JavaScript 코드를 작성할 때 사용하는 것과 동일한 기술을 사용</p>
						<p className='dot'>if문</p>
						<p className='dot'>?연산자 사용 , JSX내부에서 작동</p>
						<p className='dot'>분기가 필요하지 않은 경우 더 짧은 논리 구문을else 사용할 수도 있습니다 .&&</p>
					</div>

					<h3>렌더링 목록</h3>
					<div className='content'>
						<p className='dot'><em>for루프</em>및 <em>배열 map()</em>과 같은 JavaScript 기능을 사용하여 구성 요소 목록을 렌더링</p>
						<ul>
							{listItems}
						</ul>
						<p className='dot'>key. 목록의 각 항목에 대해 동위 항목 중에서 해당 항목을 고유하게 식별하는 문자열이나 숫자를 전달해야 합니다.</p>
					</div>

					<h3>이벤트에 응답</h3>
					<div className='content'>
						<p className='dot red bold'>onClick=&#123;handleClick&#125; 끝에 괄호가 없다는 것에 주목!!! 함수 호출이 아니라 전달하기만 하면 된다!!!!</p>
						<p className='dot'>구성 요소 내부에 <em>이벤트 핸들러</em>함수를 선언하여 이벤트에 응답할 수 있음</p>
						<button onClick={handleClick}>Clink me</button>
					</div>

					<h3>화면 업데이트 중</h3>
					<div className='content'>
						<p className='dot'>종종 구성요소가 일부 정보를 "기억"하고 표시하도록 하는 경우가 있음.<br /> 예를 들어 버튼을 클릭한 횟수를 계산하고 싶을때 <strong className='red'>구성요소에 상태</strong>를 추가</p>
						<ul style={{margin:'20px'}}>
							<li>
								1. 먼저 <strong className='red'>useState</strong>React에서 가져옵니다<br />
								<strong>import &#123; useState &#125; from 'react';</strong>
							</li>
							<li>
								2. 구성 요소 내에서 상태 변수를 선언<br />
								<strong>const &#91;count, setCount&#93; = useState(0);</strong><br />
								<p className='dot'>useState 현재상태 count와 이를 업데이트 할 수 있는 함수 setCount 두가지 정보를 얻을 수 있음</p>
								<p className='dot'>이름은 무엇이든 지정할 수 있지만 관례는 &#91;something, setSomething&#93;.</p>
								<button onClick={handleClick}>Clicked {count} times</button>
							</li>
						</ul>
						<p className='dot'>동일한 구성 요소를 여러 번 렌더링하면 각각 고유한 상태를 갖게 됩니다.</p>
					</div>

					<h3>hook 사용</h3>
					<div className='content'>
						<p className='dot'>use로 시작하는 기능을 Hook라 합니다. React에서 제공하는 내장 Hook입니다.<br />
						API 참조 에서 다른 내장 후크를 찾을 수 있습니다 . 기존 Hook을 결합하여 자신만의 Hook을 작성할 수도 있습니다.</p>
						<p className='dot'>
							후크는 다른 기능보다 더 제한적입니다. <strong className='red'>구성 요소(또는 다른 후크) 상단에서만 후크를 호출할 수 있습니다 .</strong>
						</p>
						<p className='dot'>useState조건이나 루프에서 사용하려면 새 구성요소를 추출하여 거기에 넣으세요.</p>
					</div>

					<h3>구성 요소 간 데이터 공유</h3>
					<div className='content'>
						<MyButton count={count} onClick={handleClick} />
     					<MyButton count={count} onClick={handleClick} />
					</div>
				</div>
				<div className='section'>
					<h2>UI 설명</h2>					
					<p>컴포넌트는 React 핵심 개념 중 하나! 사용자 인터페이스를 구축하는 기반</p>
					
					<h3>Component: UI빌링 블록</h3>
					<div className='content'>
						<p className='dot'>React를 사용하면 마크업, CSS 및 JavaScript를 <strong>앱의 재사용 가능한 UI 요소인 사용자 정의 "구성 요소"로 결합</strong>할 수 있습니다.</p>
						<p className='dot'>HTML 태그와 마찬가지로 구성 요소를 구성, 정렬 및 중첩하여 전체 페이지를 디자인할 수 있습니다. </p>
						<p className='dot'>이미 작성한 구성 요소를 재사용하여 많은 디자인을 구성하여 개발 속도를 높일 수 있다</p>
					</div>

					<h3>Component 정의</h3>
					<div className="content">
						<p className='dot'>React는 동일한 기술을 사용하면서도 상호작용을 최우선으로 생각합니다.</p>
						<p className='dot'><strong> React 구성요소는 마크업을 뿌릴 수 있는 JavaScript 함수입니다 .</strong></p>

						<p>### 구성요소를 빌드하는 방법 ###</p>
						<h4>1단계 : 컴포넌트 내보내기</h4>
						<p className='dot'>접두사 는 표준 JavaScript 구문<em className='red'>export default</em></p>
						<p className='dot'>나중에 다른 파일에서 가져올 수 있도록 파일의 주요 기능을 표시할 수 있습니다.</p>

						<h4>2단계 : 함수 정의</h4>
						<p className='dot'><em className="red">function Profile() {}</em>로 JavaScript함수를 정의</p>
						<p className='dot bold'>React 구성 요소는 일반 JavaScript 함수이지만 이름은 대문자로 시작해야 하며 그렇지 않으면 작동하지 않습니다!</p>

						<h4>3단계 : 마크업 추가</h4>
						<p className='dot'>컴포넌트는 태그를 반환합니다. HTML처럼 작성되지만 실제로 내부적으로는 JavaScript입니다. 이 구문을 <strong className='red'>JSX</strong>라고 합니다.</p>
						<p className='dot'>반환문(return)은 한줄에 모두 작성할 수도 있다.</p>
						<p className='dot bold'>여러줄 일 경우 반드시 한쌍의 괄호로 묶어야 한다. <span className='red'>괄호가 없으면 다음 줄의 모든 코드는 return 무시됩니다 !</span></p>
					</div>

					<h3>Component 사용</h3>
					<div className='content'>
						<p>Component를 정의했으므로 Profile이를 다른 Component 내에 중첩할 수 있습니다.<br /> 예를 들어 여러 Component를 사용하는 Component를 내보낼 수 있습니다 </p>

						<h4>브라우저가 보는 것</h4>
						<strong>대소문자 차이점 확인</strong>
						<p className='dot'>소문자 : html 태그를 참조</p>
						<p className='dot'>대문자로 시작 : Component를 사용</p>

						<h4>Component 중첩 및 구성</h4>
						<p className='dot'>컴포넌트를 한 번 정의하면 원하는 만큼 여러 장소에서 사용할 수 있습니다.</p>
						<p className='dot'>컴포넌트는 다른 컴포넌트를 렌더링할 수 있지만 정의를 중첩해서는 안됩니다.</p>
						<p className='dot'>최상위 수준에서 모든 컴포넌트를 정의</p>
					</div>
				</div>
				<div className='section'>
					<h2>Component 가져오기 및 내보내기</h2>

					<h3>root Component 파일</h3>
					<div className='content'>
						<p className='dot'>App.js 파일 안에 function Profile(){}과 export default function Gallery() {} 작성, 하지만 설정에 따라 루트 구성 요소가 다른 파일에 있을 수 도 있음. </p>
						<p className='dot'>Next.js와 같은 파일 기반 라우팅이 포함된 프레임워크를 사용하는 경우 루트 구성 요소는 페이지마다 다름</p>
					</div>

					<h3>Component 내보내기 및 가져오기</h3>
					<table className='tbl'>
						<tr>
							<th>직접 가져오기</th>
							<td>import Gallery from './Gallery.js';</td>
							<td>export defaunt function Gallery () {};</td>
						</tr>
						<tr>
							<th>명명된 가져오기</th>
							<td>import &#123; Profile &#125; from './Gallery.js'; </td>
							<td> export function Profile() {}</td>
						</tr>
					</table>
				</div>
				<div className='section'>
					<h2>JSX</h2>					
					<p className='dot'>JSX는 JavaScript 파일 내에 HTML과 유사한 마크업을 작성할 수 있게 해주는 <strong>자바스크립트 확장 문법</strong>!!! </p>

					<h3>JSX: JavaScript에 마크업 넣기</h3>
					<div className='content'>
						<p className='dot'> React에서 렌더링 로직과 마크업이 같은 장소, 즉 구성 요소에 함께 존재하는 이유</p>
						<p className='dot'>JSX와 React는 서로 다른 두 가지입니다. 함께 사용되는 경우가 많지만, 서로 독립적으로 사용할 수도 있습니다 . <br /> JSX는 구문 확장이고 React는 JavaScript 라이브러리입니다.</p>
					</div>

					<h3>HTML을 JSX로 변환</h3>
					<div className='content'>
						<p className='dot'>JSX가 HTML보다 더 엄격하고 몇 가지 더 많은 규칙을 가지고 있음!!</p>
					</div>

					<h3>JSX 규칙</h3>
					<div className='content'>
						<h4>1. 단일 루트 요소를 반환</h4>
						<p className='dot'>구성 요소에서 여러 요소를 반환하려면 단일 상위 태그로 요소를 래핑하세요.</p>
						<p className='dot'>
							&lt;div&gt;마크업에 추가 항목을 추가하고 싶지 않은 경우 대신 다음 <></>을 작성할 수 있습니다<br />
							빈 태그를 <em>조각</em>이라고 합니다. 프래그먼트를 사용하면 브라우저 HTML 트리에 흔적을 남기지 않고 항목을 그룹화할 수 있습니다.
						</p>
						
						<h4>2. 모든 태그를 닫아야함</h4>
						<p className='dot'>JSX에서는 태그를 명시적으로 닫아야 합니다. 자체 닫는 태그인 &lt;img /&gt;와 래핑 태그인 처럼 작성</p>

						<h4>3. CamelCase의 모든것</h4>
						<p className='dot'>속성,변수이름에는 대시를 포함하거나 예약어를 사용 할 수 없음</p>
						<p className='dot'>역사적인 이유로 속성 aria-*은 data-*대시를 사용하여 HTML로 작성됩니다.</p>

						<h4>전문가팁 : JSX 변환기 사용</h4>
						<p className='dot'>오류 메시지는 마크업 수정에 대한 올바른 방향을 알려주는 경우가 많습니다.</p>
						<a href="https://transform.tools/html-to-jsx" target='blank'>https://transform.tools/html-to-jsx</a>

						<h4>요약</h4>
						<p className='dot'>React 컴포넌트는 서로 관련되어 있기 때문에 렌더링 논리를 마크업과 함께 그룹화 한다.</p>
						<p className='dot'>JSX는 HTML과 유사하지만 몇가지 차이점이 있다. 필요한 경우 변환기를 사용할 수 있다.</p>
						<p className='dot'>오류 메시지는 마크업 수정에 대한 올바른 방향을 알려주는 경우가 많다.</p>
					</div>
				</div>
				<div className='section'>
					<h2>중괄호가 있는 JSX의 JavaScript</h2>
					<p className='dot'>중괄호를 사용하면 JavaScript 논리와 변수를 마크업으로 가져올 수 있습니다.</p>

					<h3>따옴표로 문자열 전달하기</h3>
					<div className='content'>
						<p className='dot'>문자열 속성을 JSX에 전달하려면 작은따옴표나 큰따옴표로 묶어야 합니다.</p>
						<p className='dot'> src나 alt를 동적으로 지정하려면 <strong>"and"나 &#123;and&#125;사용</strong></p>
					</div>

					<h3>중괄호 사용: JavaScript 세계로 통하는 창</h3>
					<div className='content'>
						<p className='dot'>중괄호를 사용하여 내부에서 JavaScript를 사용할 수 있음</p>
						<p className='dot'>{name}'s To Do List</p>
						<p className='dot'>함수 호출을 포함하여 모든 JavaScript 표현식은 중괄호 사이에서 작동</p>
						<h4>중괄호를 사용하는 위치</h4>
						<ul>
							<li>1. JSX 태그 내부 텍스트</li>
							<li>2. 속성 값  ex) src=&#123;target&#125;</li>
						</ul>
					</div>

					<h3>이중컬리 사용 : JSX의 css 및 기타 객체</h3>
					<div className='content'>
						<p className='dot'>JSX에서 JS 객체를 전달하려면 객체를 또 다른 중괄호 쌍( )으로 묶어야 합니다 person=&#123;&#123; name: "Hedy Lamarr", inventions: 5 &#125;&#125;.</p>
						<p className='dot'>JSX의 인라인 CSS 스타일에서 이를 볼 수 있습니다. </p>
						<p className='dot bold red'>인라인 style속성은 camelCase로 작성됩니다. </p>
					</div>	
				</div>
				<div className='section'>
					<h2>Props를 Component에 전달하기</h2>
					<p>props(properties)는 컴포넌트 속성을 설정할때 사용</p>
					<p>props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서만 설정 가능</p>
					<p>props를 통해 객체, 배열 및 삼수를 포함한 모든 JavaScript값을 전달 가능</p>
				</div>
				<div className='section'>
					<h2>조건부 렌더링</h2>
					<p>if명령문, &&연산자, 삼항연산자( ? : )</p>
					
					<h3>조건부로 JSX반환</h3>
					<div className="content"></div>
				</div>	
			</ContentWrap>
		</div>
	);
};

function MyButton({ count, onClick }) {
	return (
	  <button onClick={onClick}>
		Clicked {count} times
	  </button>
	);
  }

export default Main;