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
					<div className='content'>
						<p className='dot'>props(properties)는 컴포넌트 속성을 설정할때 사용</p>
						<p className='dot'>props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서만 설정 가능</p>
						<p className='dot'>props를 통해 객체, 배열 및 삼수를 포함한 모든 JavaScript값을 전달 가능</p>
					</div>
				</div>
				<div className='section'>
					<h2>조건부 렌더링</h2>
					<p p className='dot'>if명령문, &&연산자, 삼항연산자( ? : )</p>
					
					<h3>조건부로 JSX반환</h3>
					<div className="content">
						
					</div>
					<h3>조건부로 아무것도 반환하지 않음null </h3>
					<div className="content">
						<p className='dot'>return null</p>
					</div>
					<h3>조건부로 JSX 포함</h3>
					<h3>조건부(삼항) 연산자( ? :)</h3>
					<h3>논리 AND 연산자( &&)</h3>
					<p className='dot'>JavaScript && 표현식은 왼쪽(조건)이 이면 오른쪽(여기서는 체크 표시)의 값을 반환합니다 </p>
					<p className='dot'>&& 왼쪽에 숫자를 넣지 마세요!!!</p>
					<h3>조건부로 JSX를 변수에 할당</h3>
					<h3>요약</h3>
					<div className="content">
						<p className='dot'>React에서는 JavaScript를 사용하여 분기 논리를 제어한다.</p>
						<p className='dot'>if 명령문을 사용하여 JSX 표현식을 조건부로 반환할 수 있다.</p>
						<p className='dot'>일부 JSX를 조건부로 변수에 저장한 다음 중괄호를 사용하여 다른 JSX 안에 포함시킬 수 있다.</p>
						<p className='dot'>JSX에서는 if,render, else를 &#123;cond ? a : b&#125;를 의미한다.</p>
						<p className='dot'>JSX에서는 if,render 그렇지 안흐면 아무것도 없음을 &#123;cond && a &#125; 의미한다.</p>
						<p className='dot'>단축키는 일반적이지만 if plain을 선호하는 경우에는 단축키를 사용할 필요가 없다.</p>
						<p className='dot'></p>
					</div>
				</div>
				<div className='section'>
					<h2>렌더링 목록</h2>
					<p className='dot'>데이터 컬렉션에서 여러 유사한 구성 요소를 표시하는 경우가 많다.</p>
					<p className='dot'>JavaScript를 사용하여 배열에서 구성 요소를 렌더링하는 방법 map()</p>
					<p className='dot'>JavaScript를 사용하여 배열에서 구성 요소를 렌더링하는 방법 filter()</p>
					<p className='dot'>React 키를 사용하는 시기와 이유</p>

					<h3>배열에서 데이터 렌더링</h3>
					<div className='content'>
						<h4>배열에서 항목 목록을 생성하는 방법</h4>
						<p className='dot'>1. 데이터를 배열로 이동</p>
						ex) const peopel = [
							'Creola Katherine Johnson: mathematician',
							'Mario José Molina-Pasquel Henríquez: chemist',
							'Mohammad Abdus Salam: physicist',
							'Percy Lavon Julian: chemist',
							'Subrahmanyan Chandrasekhar: astrophysicist'
						]
						<p className='dot'>2. 멤버 people를 새로운 JSX노드 배열로 매핑</p>
						ex) const listItems = people.map(person =&gt; &lt;li&gt;&#123;person&#125;&lt;/li&gt;);
						<p className='dot'>3. listItems 다음으로 래핑된 구성 요소에서 돌아옵니다. </p>
						ex) return &lt;ul&gt;&#123;listItems&#125;&lt;/ul&gt;;
					</div>
					<h3>항목 배열 필터링</h3>
					<div className='content'>
						<p className='dot'>JavaScript의 filter()메소드를 사용하여 직업이 chemist인 사람들만 반환할 수 있습니다.</p>
						<h4>방법</h4>
						<p>필터링을 호출하여 화확자라는 새로운 배열을 만든다</p>
						<p>const chemists = people.filter(person =&gt; person.profession === 'chemist'	);</p>
						<p>2. 매핑</p>
						<p>3. 구성요소 반환</p>
					</div>
					<h3>목록 항목을 순서대로 유지key </h3>
					<div className='content'>
						<p className='dot red bold'>호출 내부의 JSX 요소에는 map()항상 키가 필요합니다!</p>
						<p className='dot'>키는 각 구성 요소가 어떤 배열 항목에 해당하는지 React에게 알려주므로 나중에 일치시킬 수 있습니다. </p>
						<p className='dot'>배열 항목이 이동(예: 정렬로 인해)되거나 삽입되거나 삭제될 수 있는 경우 이는 중요합니다. </p>
					</div>
					<h3>어디서 구할 수 있나요?key </h3>
					<div className='content'>
						<p className='dot'>데이터베이스의 데이터: 본질적으로 고유한 데이터베이스 키/ID를 사용 할 수 있다.</p>
						<p className='dot'>로컬에서 생성된 데이터: 데이터가 로컬에서 생성되고 유지되는 경우(예: 메모 작성 앱의 메모) 항목을 생성할 때 crypto.randomUUID()처럼 증분 카운터나 패키지를 사용</p>
					</div>
					<h3>키의 규칙</h3>
					<div className='content'>
						<p className='dot'>키는 형제간에 고유해야한다. 그러나 다른배열의 jsx노드에서 동일한 키를 사용하는 것은 괜찮다.</p>
						<p className='dot'>키는 변경되어서는 안된다. 그렇지 않으면 키의 목적이 무산된다. 렌더링 하는 동안 생성 금지!!</p>
					</div>
					<h3>React에 키가 필요한 이유는 무엇입니까?</h3>
					<div className='content'>
						<p className='dot'>데스크탑의 파일에 이름이 없다고 상상해 보십시오. </p>
						<p className='dot'>폴더의 파일 이름과 배열의 JSX 키는 비슷한 용도로 사용됩니다.  형제간에 항목을 고유하게 식별할 수 있다. 위치가 변경되더라도 react는 해당 항목을 전체 수명동안 식별 할 수 있다.</p>
						<p className='dot bold'>배열에 있는 인덱스키를 사용하면 항목을 삽입하거나 삭제했을때 배열이 재정렬되면서 렌더링 순서가 변경된다. </p>
						<p className='dot'>즉석에서 키를 생성하지 마라. 속도가 느릴뿐만아니라 목록 항목 내의 사용자 입력이 손실되므로 안정적인 id를 사용하자</p>
						<p className='dot'>key구성 요소는 소품으로 수신되지 않습니다 . 이는 React 자체에서 힌트로만 사용됩니다. 컴포넌트에 ID가 필요한 경우 별도의 prop: 으로 전달해야 합니다.</p>
					</div>
					<h3>요약</h3>
					<div className='content'>
						<p className='dot'>컴포넌트에서 배열 및 객체와 같은 데이터 구조로 데이터를 이동하는 방법</p>
						<p className='dot'>JavaScript의 map()</p>
						<p className='dot'>JavaScript를 사용하여 필터링된 항복의 배열을 만드는 방법</p>
						<p className='dot'>Key 위치나 데이터가 변경되더라고 React가 각 구성 요소를 추적할 수 있도록 컬렉션의 각 구성요소를 설정하는 이유와 방법</p>
					</div>
				</div>
				<div className='section'>
					<h2>구성 요소를 순수하게 유지</h2>
					<p>일부 JavaScript함수는 순수합니다. 순수함수는 계산만 수행하며 그 이상은 수행하지 않습니다.</p>
					<h3>순도: 공식으로서의 구성요소</h3>
					<div className='content'>
						<p className='dot'>그것은 자신의 일을 생각합니다. 호출되기 전에 존재했던 객체나 변수는 변경되지 않습니다.</p>
						<p className='dot'>동일한 입력, 동일한 출력, 동일한 입력이 주어지면 순수 함수는 항상 동일한 결과를 반환해야합니다.</p>						
					</div>
					<h3>부작용:(의도하지 않은)결과</h3>
					<div className='content'>
						<p className='dot'>React의 렌더링 프로세스는 항상 순수해야 합니다. 구성 요소는 JSX 만 반환 해야 하며, 렌더링 전에 존재했던 객체나 변수를 변경하면 안 됩니다. 그러면 불순해질 수 있습니다!</p>
					</div>
				</div>
				<div className='section'>
					<h2>UI를 트리로 이해하기</h2>
					<div className='content'>
						<p className='dot'>React 및 기타 많은 UI 라이브러리는 UI를 트리로 모델링</p>
						<p className='dot'>앱을 트리로 생각하는 것은 구성요소간의 관계를 이해하는데 유용, 성능 및 상태관리와 같은 미래개념 디버깅에 도움</p>
					</div>
					<h3>UI를 트리로 표현</h3>
					<p className='dot'>React 앱을 통해 데이터가 흐르는 방식과 렌더링 및 앱 크기를 최적화하는 방법을 이해하는 데 유용한 도구</p>
					<h3>렌더 트리</h3>
					<h3>요약</h3>
					<div className='content'>
						<p className='dot'>트리는 엔터티 간의 관계를 나타내는 일반적인 방법. UI를 모델링하는 데 자주 사용</p>
						<p className='dot'>렌더 트리는 단일 렌더 전반에 걸쳐 React 구성요소간의 중첩 관계를 나타냄</p>
						<p className='dot'>조건부 렌더링을 사용하면 렌더링 크리가 여러 렌더링에 걸쳐 변경될 수 있다. prop값이 다르면 구성 요소가 다른 하위 구성 요소를 렌더링할 수 있다.</p>
						<p className='dot'>렌더 트리는 최상위 구성 요소와 리프 구성 요소가 무엇인지 식별하는데 도움이 된다. 최상위 구성 요소는 그 아래 있는 모든 구성 요소의 렌더링 성능에 영향을 미치며,
							리프 구성 요소는 자주 다시 렌더링 되는 경우가 많다. 이를 식별하는 것은 렌더링 성능을 이해하고 디버깅하는데 유용하다.
						</p>
						<p className='dot'>종속성 트리는 React앱의 모듈 종속성을 나타낸다.</p>
						<p className='dot'>종속성 트리는 빌드 도구에서 앱을 출시하는 데 필요한 코드를 묶는데 사용</p>
						<p className='dot'>종속성 트리는 페인팅 시간을 늦추고 번들로 묶인 코드를 최적화할 수 있는 기회를 제공하는 대규모 번들 크기를 디버깅하는데 유용</p>
					</div>
				</div>
				<div className='section'>
					<h2>상호작용 추가</h2>
					<p>React에서는 시간이 지남에 따라 변하는 데이터를 <strong>상태</strong>라고 한다.</p>
					<p>모든 구성요소에 상태를 추가하고 필요에 따라 업데이트 가능</p>
					<div className='content'>
						<p className='dot'>사용자가 시작한 이벤트를 처리하는 방법</p>
						<p className='dot'>구성요소가 상태와 함께 정보를 "기억"하도록 만드는 방법</p>
						<p className='dot'>React가 두 단계로 UI를 업데이트하는 방법</p>
						<p className='dot'>상태를 변경한 직후에 상태가 업데이트되지 않는 이유</p>
						<p className='dot'>여러 상태 업데이트를 대기열에 추가하는 방법</p>
						<p className='dot'>상태의 객체를 업데이트하는 방법</p>
						<p className='dot'>상태의 배열을 업데이트하는 방법</p>
					</div>
					<h3>이벤트에 응답</h3>
					<p className='dot'>React를 사용하면 JSX에 이벤트 핸들러 추가 가능</p>
					<p className='dot'>사용자 상호 작용에 대한 응답으로 트리거되는 자체 함수임</p>
					<h3>상태: 구성 요소의 메모리</h3>
					<p className='dot'>Hook useState을 사용하여 구성 요소에 상태를 추가 할 수 있음</p>
					<p className='dot'>Hook useState을 사용하면 상태 변수를 선언할 수 있습니다. 초기 상태를 가져와 현재 상태와 이를 업데이트할 수 있는 상태 설정 함수 등 한 쌍의 값을 반환합니다.</p>
					<p className='dot'>ex&gt; const [index, setIndex] = useState(0);</p>
					<h3>렌더링 및 커밋</h3>
					<p className='dot'>구성 요소가 화면에 표시되기 전에 React로 렌더링되어야 한다.</p>
					<p className='bold'>1. 렌더링 트리거 (식당의 주문을 주방으로 전달)</p>
					<p className='bold'>2. 컴포넌트 렌더링 (주방에서 주문 준비)</p>
					<p className='bold'>3. DOM에 커밋 (테이블 위에 주문 배치)</p>
					<h4>1단계: 렌더링 트리거</h4>
					<p className='dot'>이는 구성요소의 초기 렌더링</p>
					<p className='dot'>구성요소 상태 업데이트시 다시 렌더링</p>
					<h4>2단계: React가 구성 요소를 렌더링</h4>
					<p className='dot'> "렌더링"은 React가 구성 요소를 호출하는 것</p>
					<p className='dot'>초기 렌더링 시 React는 루트 구성 요소를 호출</p>
					<p className='dot'>후속 렌더링의 경우 React는 상태 업데이트가 렌더링을 트리거한 함수 구성 요소를 호출합</p>
					<h4>3단계: React는 DOM에 변경 사항을 커밋합니다.</h4>
					<p className='dot'>초기 렌더링의 경우 react는 appendChild() DOM API를 사용하여 생성된 모든 DOM 노드를 화면에 배치</p>
					<p className='dot'>재렌더링의 경우 react는 DOM이 최신 렌더링 출력과 일치하도록 최소한의 필수 작업을 적용</p>
					<p className='dot bold'>React는 렌더링 간에 차이가 있는 경우에만 DOM 노드를 변경</p>
					<h3>요약</h3>
					<p className='dot'>React 앱의 화면 업데이트 세단계 : Trigger &gt; Render &gt; Commit</p>
				</div>
				<div className='section'>
					<h2>스냅샷으로 상태</h2>
					<h3>상태를 설정하면 렌더링이 트리거된다.</h3>
					<p className='dot'>React는 한 렌더의 이벤트 핸들러 내에서 상태 값을 "고정"으로 유지합니다. </p>
					<h3>요약</h3>
					<p className='dot'>상태를 설정하면 새로운 렌더링이 요청됩니다.</p>
					<p className='dot'>React는 마치 선반에 있는 것처럼 구성 요소 외부에 상태를 저장합니다.</p>
					<p className='dot'>호출하면 useState 상태의스냅샷을 제공</p>
					<p className='dot'>변수와 이벤트 핸들러는 다시 렌더링해도 생존하지 않는다. 모든 렌더링에는 자체 이벤트 핸들러가 있다.</p>
					<p className='dot'>모든 렌더(및 그 내부함수)는 항상 React가 해당 렌더에 제공한 상태의 스냅샷을 확인한다.</p>
					<p className='dot'>렌더링된 JSX에 대해 생각하는 dh 방식과 유사하게 이벤트 핸들러에서 상태를 정신적으로 대체할 수 있다.</p>
					<p className='dot'>과거에 생성된 이벤트 핸들러는 생성된 렌더링의 상태 값을 갖는다.</p>
				</div>
				<div className='section'>
					<h2>일련의 상태 업테이트 대기열에 넣기</h2>
					<p className='dot'>상태 변수를 설정하면 다른 렌더링이 대기열에 추가됨, 렌더링을 대기열에 넣기전에 값에 대해 여러 작업을 수행해야 할 수 도 있다. react가 상태를 일괄 업데이트 하는 방법</p>
					<h3>React 배치 상태 업데이트</h3>
					<p className='dot'>각 렌더의 상태 값은 고정되어 있으므로 호출횟수에 관계없이 number 첫 번빼 렌더의 이벤트 핸들러 내부 값은 항상 0</p>
					<p className='dot'>React는 상태 업데이트를 처리하기 전에 이벤트 핸들러의 모든 코드가 실행될때까지 기다립니다.</p>
					<p className='dot'>React는 클릭과 같은 여러 의도적인 이벤트를 일괄 처리하지 않습니다. 각 클릭은 별도로 처리</p>
					<p className='dot'>안전한 경우에만 일괄 처리를 수행하므로 안심</p>
					<h3>다음 렌더링 전에 동일한 상태를 여러번 업데이트 </h3>					
				</div>
				<div className='section'>
					<h2>상태의 객체 업데이트</h2>

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