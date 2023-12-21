import React from 'react'
import styled from 'styled-components'

const View = styled.div`
     margin: 0 auto;
     padding: 100px 0;
     width: 1000px;
     font-size: 12px;
     .list {
        li { 
            padding: 20px 0;
            border-top: 1px solid #ddd;
            color: #333;
            line-height: 24px;
            font-size: 15px;
            &:first-child {
                border-top: 0 none;
            }
            .question {
                margin-bottom: 10px;
                font-weight: bold;
            }
        }
     }
     
`;

export default function Interview() {
  return (
    <View>
        <p>출처 : <a href="https://beop07.tistory.com/m/33" target='_blank'>https://beop07.tistory.com/m/33</a></p>
       <ul className='list'>
            <li>
                <p className='question'>1. Doctype에 대해서 아시는대로 설명하라</p>
                <div className='answer'>
                    DOCTYPE 선언은 HTML 문서에서 &lt;html&gt; 태그를 정의하기 전에 가장 먼저 선언되어야만 합니다. <br />
                    이러한 DOCTYPE 선언은 HTML 태그는 아니지만, 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할을 하는 선언문으로, 대소문자를 구분하지 않습니다.<br />
                    HTML 5에서는 선언이 간단합니다.<br />
                    이전 문서(HTML 4 또는 XHTML)에서는 선언이 DTD(문서 유형 정의)를 참조해야 하므로 선언이 더 복잡합니다.<br /><br />

                    <strong> + 안썼을때는 어떻게 되는가?</strong><br />
                    생략할 경우 바람직스럽지 못한 결과가 발생할 수 있다. (웹브라우저가 비표준모드(Quirks mode)로 렌더링)<br /><br />
                    <strong> + 쿼크모드? 표준모드?</strong><br />
                    Quirks mode : 오래된 브라우저의 행동 모방하여 렌더링<br />
                    Standard mode : W3C 표준에 따라 렌더링
                </div>
            </li>
            <li>
                <p className='question'>2. 웹표준은 무엇이며 웹접근성은 무엇인가?</p>
                <div className='answer'>
                <strong>웹 표준</strong>이란 어떤 운영체제나 어느 브라우저에서든 상관없이 웹사이트가 항상 동일하게 보여지도록 표준을 맞추는 것이고, <br />
                <strong>웹 접근성이</strong>란 장애인, 고령자 등을 포함한 모든 사용자가 웹사이트에 쉽게 접근할 수 있도록 구현하는 것입니다.<br /><br />
                <strong>+ 접근성에 대한 경험이 있는가?</strong>
                </div>
            </li>
            <li>
                <p className='question'>3. 시멘틱태그는 무엇이며 왜 사용하는가? </p>
                <div className='answer'>
                    시맨틱 태그를 활용하면 코드를 읽기 쉽게 만들 뿐만 아니라, SEO에 유리하며 웹 접근성에도 이점을 가집니다.<br /><br />
                    <strong> + seo는 무엇인가?</strong><br />
                    SEO(검색 엔진 최적화, Search Engine Optimization)는 웹 사이트가 검색 엔진에서 잘 인식되도록 최적화하는 작업입니다.<br />
                    시맨틱 마크업은 검색 엔진이 웹 페이지의 구조와 콘텐츠를 더 잘 파악하도록 도와주며, <br />
                    무엇을 색인화할지 알려줍니다. 이를 통해 검색 결과에서 웹 사이트의 노출 순위를 높이고, 더 많은 트래픽을 유도할 수 있습니다.
                </div>
            </li>
            <li>
                <p className='question'>4. UI가 무엇인가?</p>
                <div className='answer'>
                    사용자 인터페이스(UI: User Interface)는 사람과 사물 또는 시스템, 특히 기계, 컴퓨터 프로그램 등 사이에서 의사소통을 할 수 있도록 
                    일시적 또는 영구적인 접근을 목적으로 만들어진 물리적, 가상적 매개체를 뜻합니다. 즉, UI는 사람들이 컴퓨터와 상호작용하는 시스템입니다.<br />
                    UI는 쉽게 말해서 사용자가 컴퓨터 프로그램 또는 모바일 앱을 사용할 때 마주하는 디자인, 레이아웃 등 직접 눈으로 보이는 것을 뜻하기도 합니다.<br />
                    UI란 우리가 스마트폰을 사용 할때 눈으로 보여지는 화면들을 UI라고 합니다.<br /><br />
                    <strong>+ Interface란?</strong><br />
                    인터페이스란 일종의 매개체입니다. 2개 이상의 장치나 소프트웨어 사이에 정보나 신호를 주고 받을 수 있도록 합니다. 인터페이스는 하드웨어이거나 소프트웨어가 될 수도 있습니다.<br /><br />
                    <strong>+ API란?</strong><br />
                    API는 Application Programming Interface(애플리케이션 프로그램 인터페이스)의 줄임말입니다. 
                    API의 맥락에서 애플리케이션이라는 단어는 고유한 기능을 가진 모든 소프트웨어를 나타냅니다. 
                    인터페이스는 두 애플리케이션 간의 서비스 계약이라고 할 수 있습니다. 
                    이 계약은 요청과 응답을 사용하여 두 애플리케이션이 서로 통신하는 방법을 정의합니다. 
                    API 문서에는 개발자가 이러한 요청과 응답을 구성하는 방법에 대한 정보가 들어 있습니다.
                    API는 정의 및 프로토콜 집합을 사용하여 두 소프트웨어 구성 요소가 서로 통신할 수 있게 하는 메커니즘입니다. 
                </div>
            </li>
            <li>
                <p className='question'>d </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>5. float를 clear하는 방법 대표적으로 2가지만 말해달라. </p>
                <div className='answer'>
                    1. 부모에 overflow:hidden 적용<br />
                    - float된 요소들의 부모태그에 overflow:hidden을 적용한다.<br />
                    - 하단의 예시처럼 부모 바깥으로 표현되어야하는 요소가 있을 때 표현이 불가하다.<br />
                    2. 부모 다음 요소/임의의 요소에 clear:both 적용<br />
                    - float된 요소들의 부모태그 다음에 오는 요소 또는 임의의 요소를 만들어 clear:both를 한다.<br />
                    - 줄바꿈은 적용되지만 부모태그의 높이는 여전히 인지되지 않으며,<br />
                    - 다음 요소가 어떤 클래스를 사용하는지에 따라 매번 수정될 가능성이 있으며, margin-top 이 정확하게 적용되지 않는다.<br />
                    - 또한 임의의 요소에 clear:both를 적용하는 것은 굳이 불필요한 요소를 추가하는 것이기에 가장 비추천하는 방법이다.<br />
                    3. 부모에 가상요소 after에 clear:both<br />
                    - float된 요소들의 부모태그에 가상요소 after를 사용해서 clear:both를 적용한다.<br />
                    - 가장 보편적으로 이용되는 방법이다.<br />
                    - 부모태그가 의도치 않게 inline-block 요소로 바뀌지 않으며, 높이가 정확하게 잡히고, 불필요한 요소가 추가되지 않는다.<br />
                <strong>+ 각각의 장단점은?</strong>
                </div>
            </li>
            <li>
                <p className='question'>6. 각종 태그 문제</p>
                <div className='answer'>
                <strong>+ ul, ol의 차이는?</strong><br />
                <strong>+ dl dt dd는?</strong><br />
                <strong>+ strong, em, b 차이는?</strong><br />
                <strong>+ figure태그 설명?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>7. CSS 전처리기란?</p>
                <div className='answer'>
                    <strong>+ sass, scss, portcss, less 등 사용경험은?</strong>
                </div>
            </li>
            <li>
                <p className='question'>8. MDN 사이트를 아는가? </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>9. Button태그의 Default type은?</p>
                <div className='answer'>
                    <strong>+ &lt;input type="button"&gt; 과 차이점은?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>10. 문장에 취소선을 넣고싶을때 어떤 태그를 사용하는가? </p>
                <div className='answer'>
                    <strong>+ 밑줄 넣는 태그는?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>11. section 태그와 article 태그의 차이점을 설명해달라</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>12. cdn이란? </p>
                <div className='answer'>
                    <strong>+ cdn방식이 빠른가? 직접로드가 빠른가? 혹은 케바케?</strong><br />
                    <strong>- https://beop07.tistory.com/68</strong><br />

 
                </div>
            </li>
            <li>
                <p className='question'>13. 가상요소와 가상클래스에 대해서 설명해달라 </p>
                <div className='answer'>
                    <strong>+ 가상요소 : 한개와 :: 두개의 차이는?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>14. css 적용 우선순위를 말해달라</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>15. 바닐라JS란?</p>
                <div className='answer'>
                    <strong>+ 장점, 단점, 사용경험</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>16. JQuery란?</p>
                <div className='answer'>
                    <strong>+ 장점, 단점, 개인적인 생각</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>17. Plugin이란?</p>
                <div className='answer'>
                    <strong>+ 무엇을 사용해보았나?</strong><br />
                    <strong>+ 장점, 단점</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>18. 크로스브라우징이란?</p>
                <div className='answer'>
                    <strong>+ 경험을 말해달라</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>19. CSS 스트라이프란?</p>
                <div className='answer'>
                    <strong>+ 장점은? 단점은?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>20. script를 로드할때 defer, async는 각각 무엇을 나타내는가? </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>21. AJAX란?</p>
                <div className='answer'>
                    <strong>+ 사용 경험</strong><br />
                    <strong>+ 비동기 통신이란?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>22. 슬라이드를 직접 구현할 수 있는가? </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>23. 제이쿼리의 attr(), prop()의 차이는?</p>
                <div className='answer'>
                - https://beop07.tistory.com/70
                </div>
            </li>
            <li>
                <p className='question'>24. 체크박스의 네모버튼을 커스텀으로 수정하고싶다 어떻게 하는가?</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>25. 제이쿼리 선택자중 형제노드를 탐색하고 싶다 어떻게 하는가?</p>
                <div className='answer'>
                    <strong>+ 부모선택자는? 자식선택자는?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>26. 제이쿼리 선택된 요소의 위치를 알고 싶다 어떻게 하는가? </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>27. 제이쿼리 e.preventDefault()란?</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>28. 전파방지란? </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>29. css keyframe을 사용하여 위아래로 움직이는 도형을 만들수 있는가? </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>30. css로 세모는 어떻게 만드는가?</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>31. 자바스크립트에서 호이스팅이라고 들어보았는가?(프론트영역)</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>32. 자바스크립트 ES6에서 많은 변화가 일어났는데 대표적으로 3가지만 말해달라</p>
                <div className='answer'>
                    <strong>- let, var, const 차이는?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>33. 국내에선 아직 최신 브라우저를 사용하지 않아 ES6에 대해 완벽한 지원이 안되고있다 어떻게하면 좋을까? </p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>34. css flex에 대해 설명하라</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>35. 반응형웹이란? 적응형웹이란?</p>
                <div className='answer'>
                    <strong>+ 반응형에서 중요한건 무엇이라 생각하는가?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>36. meta태그는 무엇인가?</p>
                <div className='answer'>
                    <strong>+ 오픈그래프란(og)?</strong><br />
                    <strong>+ 모바일에서 손가락으로 확대하는것을 2배까지만 제한하고 싶다 어떻게하는가?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>37. 팝업창을 구현해달라고 의뢰 받았다. 대략적으로 어떤 방식으로 구현이 되는지 말로 설명해달라.</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>38. 현재 국내 브라우저 점유율이 어떤지 파악하고 있는가? (웹에 대한 관심도를 보기위함 https://gs.statcounter.com/ 한국을 참고.)</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>39. 협업에 대한 경험은?</p>
                <div className='answer'>                    
                    <strong>+ git을 써보았나? </strong><br />
                </div>
            </li>
            <li>
                <p className='question'>40. 퍼블리싱 스터디는 어떻게하는가?</p>
                <div className='answer'>
                    <strong>+ 보고있는 개발 유튜브 있는가?</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>41. 최종 목표가 무엇인가?</p>
                <div className='answer'>
                    DTD
                </div>
            </li>
            <li>
                <p className='question'>42. 마지막질문/어필(장황하게 말고 핵심 내용을 정리해서 자신있게 어필하길바람.) </p>
                <div className='answer'>
                
                </div>
            </li>            
       </ul>
            
    </View>
  )
}

