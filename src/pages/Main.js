import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, A11y } from 'swiper/modules';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/scss/effect-fade";

const MainWrapper = styled.div`
	display: none;
`;
const ContentWrap = styled.div`
	margin: 0 auto;
	padding: 150px 50px 0;
	width: 1000px;	
	.section {
		padding: 30px 0; 
		h2 {
			margin: 0;
			line-height: 32px;
			font-size: 30px;		
		}
		h3 {
			margin: 30px 0 10px;
			line-height: 26px; 
			font-size: 20px;
		}
		.content {
			padding-left: 10px;
			color: #555;
			line-height: 24px;
			font-size: 16px; 
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
			.red {
				color: red;
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

	return (
		<div>
			<MainWrapper>
				<Swiper className='main-slide' modules={[Navigation, Pagination, EffectFade, Autoplay, A11y]} 
					spaceBetween={50}
					slidesPerView={1}
					// navigation
					// pagination={{ clickable: true }}
					effect="fade"
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					loop={true}
					>
					<SwiperSlide className='slide-item1'></SwiperSlide>
					<SwiperSlide className='slide-item2'></SwiperSlide>
					<SwiperSlide className='slide-item3'></SwiperSlide>				
				</Swiper>			
			</MainWrapper>
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
						<p className='dot'>SX 중괄호 안에 문자열 연결 과 같은 더 복잡한 표현식을 넣을 수도 있습니다 .</p>
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