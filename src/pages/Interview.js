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
            color: #555;
            line-height: 24px;
            font-size: 15px;
            &:first-child {
                border-top: 0 none;
            }
            .question {
                margin-bottom: 10px;
                font-weight: bold;
                color: #000;               
            }
            strong {
                color: #000;
            }
        }
     }
     
`;

export default function Interview() {
  return (
    <View>
        <p>출처 : <a href="https://beop07.tistory.com/m/33" target='_blank' rel='noreferrer'>https://beop07.tistory.com/m/33</a></p>
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
                    'ol' 태그는 순서가 있는 리스트를 표현하는 태그이며, <br />
                    'ul' 태그는 순서가 없는 리스트를 표현할 때 사용하는 태그<br /><br />

                    <strong>+ dl dt dd는?</strong><br />
                    dl은 Description-List, - 용어를 설명하는 목록<br />
                    dt는 Description-Term, - 정의되는 용어의 제목<br />
                    dd는 Description-Description - 용어 설명<br /><br />

                    <strong>+ strong, em, b 차이는?</strong><br />
                    strong : 단순 강조보다 더 중요한 텍스트에 사용, 굵은 글씨로 표시<br />
                    em : 태그가 강조하고 싶은 텍스트, 이탤릭체<br />
                    b : 글자를 굵게 표시할 때 쓰는 태그, 의미 없는 물리적 태그<br /><br />

                    <strong>+ figure태그 설명?</strong><br />
                    figure 태그는 삽화나 다이어그램, 사진 등과 같이 문서의 주요 흐름과는 독립적인 콘텐츠를 정의할 때 사용합니다.<br />
                    요소의 콘텐츠는 문서의 내용과는 연관성을 가지지만, 해당 콘텐츠의 위치가 문서의 주요 흐름과는 독립적이어서 제거해도 문서의 흐름에 영향을 주어서는 안 됩니다.
                </div>
            </li>
            <li>
                <p className='question'>7. CSS 전처리기란?</p>
                <div className='answer'>
                    CSS 전처리기는 전처리기가 가진 특별한 syntax으로 CSS를 생성하도록 하는 프로그램입니다.<br /><br />
                    <strong>+ 왜 전처리기를 사용해야 하나</strong><br />
                    측면에서 유지보수성과 동일한 스타일을 적용해야하는 대상을 보다 쉽게 관리할 수 있기 때문<br />
                    너무 큰 CSS파일을 수정하기에 해당하는 위치를 찾아가기가 어렵기 때문<br /><br />

                    <strong>+ 전처리기 종류</strong><br />
                    CSS 전처리기에는 다양한 모듈이 존재하는데 가장 많이 사용되는 전처리기에는 Sass, Less, Stylus 3가지가 있다. <br /> 
                    postCss : `PostCSS는 JS 플러그인을 통해 스타일을 변형하는 도구이다.`<br /><br />

                    <strong>+ sass, scss, portcss, less 등 사용경험은?</strong>
                </div>
            </li>
            <li>
                <p className='question'>8. MDN 사이트를 아는가? </p>
                <div className='answer'>
                    MDN 이란 Mozilla Developer Network 의 약자입니다. 모질라 개발자들의 네트워크를 의미합니다. <br />
                    하지만, 모질라 개발자만이 아닌 웹 기술과 웹을 더 강력하게 만들어주는 소프트웨어를 배우기 위해 끊임없이 발전하는 학습 플랫폼입니다.<br /><br />
                    <strong>+ MDN에서 다루고 있는 주제</strong> <br />
                    CSS, HTML, JavaScript 와 같은 웹 표준 <br />
                    열린 Web을 위한 애플리케이션 개발<br />
                    Firefox 부가 기능 개발 <br /><br />
                    <strong>목표</strong>는 열린 웹에 대한 모든 것을 문서로 제공하는 것입니다. 
                </div>
            </li>
            <li>
                <p className='question'>9. Button태그의 Default type은?</p>        

                <div className='answer'>
                    아무런 값도 지정하지 않는다면 Default는 submit이 된다.<br /><br />

                    <strong>+ &lt;input type="button"&gt; 과 차이점은?</strong><br />
                    input은 열린 태그라 자식 요소를 가질 수 없다는 점<br />
                    button은 자식 태그를 가질 수 있고, CSS에서 가상 선택자로 꾸미는것도 가능하다.
                </div>
            </li>
            <li>
                <p className='question'>10. 문장에 취소선을 넣고싶을때 어떤 태그를 사용하는가? </p>
                <div className='answer'>
                    text-decoration: line-through;<br /><br />
                    <strong>+ 밑줄 넣는 태그는?</strong><br />
                    text-decoration: underline;
                </div>
            </li>
            <li>
                <p className='question'>11. section 태그와 article 태그의 차이점을 설명해달라</p>
                <div className='answer'>
                    section 태그는 섹션(부분, 구역, 영역) 들을 그룹화 해서 분리하는 역할<br />
                    article 태그는 문서내에서 그룹화해서 분리하는 역할을 한다.<br /><br />
                    <strong>+ section article 차이</strong><br />
                    ▷ article은 내용이 독립적이다.<br />
                    article 태그는 section과 다르게 독립적으로 존재할 수 있으며 재사용 할 수 있다.<br />
                    즉 article이 좀 더 구체적이다.<br />
                    주로 블로그글, 포럼, 뉴스 기사 등을 article로 묶음<br /><br />

                    ▷ section은 주제별로 구분한 그룹이다.<br />
                    논리적으로 관계있는 요소 또는 문서를 분리할 때 사용한다.<br />
                    다른 주제의 문서를 구분 짓기위해 사용 (주제별 영역들을 그룹화)<br />
                    ※ 논리적인 관계가 없는 요소들을 그룹화 할 경우에는 div를 사용한다.
                </div>
            </li>
            <li>
                <p className='question'>12. cdn이란? </p>
                <div className='answer'>
                    콘텐츠 전송 네트워크(CDN)는 데이터 사용량이 많은 애플리케이션의 웹 페이지 로드 속도를 높이는 상호 연결된 서버 네트워크입니다<br /><br />

                    <strong>+ cdn방식이 빠른가? 직접로드가 빠른가? 혹은 케바케?</strong><br />
                    위의 CDN에 대하여 설명한 것을 보면 무조건 CDN방식이 효율적이라고 생각할 수 있다.<br />
                    맞다. CDN 방식이 효율적이다.<br />
                    하지만 무조건 100% CDN 방식을 사용하라고 권할 수는 없다.<br />
                    CDN Server는 확실히 성능을 향상시킬 수 있지만 그건 CDN Server의 성능이 바춰줘야한다.<br />
                    성능도 떨어지고, 위의 그림에서 보다시피  CDN Node들이 많이 보유되지 않는다면 부정적인 결과를 초래할 수 있다.<br />
                    부정적인 결과로 최악의 경우는 SPOF(단일 장애점)이 초래될 수 있다.<br />
                    단일 장애점이란 한군데가 중단되면 전체 시스템이 중단되버리는 현상이다.<br />
                    그렇기에 신뢰성이 높아야하는 프로젝트라면 특히 신경써야하는 부분이다.
                </div>
            </li>
            <li>
                <p className='question'>13. 가상요소와 가상클래스에 대해서 설명해달라 </p>
                <div className='answer'>
                    <strong>+ 가상요소 </strong><br />
                    실제로 존재하지 않는 가상의 요소를 만들어 스타일을 주는 것을 말한다. <br />
                    보통 콜론(:)을 사용하지만 가상 클래스와의 구분을 하기 위해 이중콜론(::)의 사용을 권장하고 있다.<br />
                    ex) ::before, ::after, ::first-letter , ::first-line
                    <br /><br />
                    <strong>+ 가상클래스 </strong><br />
                    먼저 가상 클래스란 실제로 존재하는 요소에 특정 이벤트나 환경에 맞춰 가상으로 클래스를 줘서 css로 제어하는 것을 말한다.<br />
                    ex) :active, :hover, :checked, :disabled 등등<br /><br />

                    <strong>+ 가상요소 : 한개와 :: 두개의 차이는?</strong><br />
                    이중 콜론(::)은 ie9 이상 부터 지원한다.
                </div>
            </li>
            <li>
                <p className='question'>14. css 적용 우선순위를 말해달라</p>
                <div className='answer'>
                    1)속성 값 뒤에 !important 를 붙인 속성<br />
                    2) HTML에서 style을 직접 지정한 속성<br />
                    3) #id 로 지정한 속성<br />
                    4) .클래스, :추상클래스 로 지정한 속성<br />
                    5) 태그이름 으로 지정한 속성<br />
                    6) 상위 객체에 의해 상속된 속성<br /><br />
                    같은 우선 순위에 있는 경우,<br /> 부모-자식 관계가 많은 경우가 우선되며,<br /> 모든 설정이 같은 경우 나중에 선언한 것이 우선되어 적용됩니다.
                </div>
            </li>
            <li>
                <p className='question'>15. 바닐라JS란?</p>
                <div className='answer'>
                    바닐라 자바스크립트(Vanilla JS)란 프레임워크 또는 라이브러리가 적용되지 않은 순수한 자바스크립트를 뜻한다.<br /><br />

                    <strong>+ 장점, 단점, 사용경험</strong><br />
                    단점 : 일단 동일한 기능을 사용하기 위해서는 코드가 좀 더 길고 복잡할 수 있는 단점<br />
                    장점 : 순수 자바스크립트는 불필요한 코드를 완전히 배제해 필요한 기능만 성능상 가장 우수하게 구현할 수 있겠죠.<br />
                    사용경험 : 
                
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
                    Query는 2006년 미국의 존 레식(John Resig)이 뉴욕시 바캠프(Barcamp)에서 처음 소개한 ‘자바 스크립트 라이브러리’입니다. 
                    코드가 브라우저의 영향을 받아 작동하지 못하는 문제를 해결하기 위해 개발되었는데요.<br /><br />
                    <strong>+ 무엇을 사용해보았나?</strong><br />

                    <strong>+ 장점, 단점</strong><br />
                    1. 장점<br />
                    - 멀티 브라우저 지원<br />
                    - 코드가 단순하여 쉽게 사용 가능<br />
                    - 서버 사이드 코드와 클라이언트 사이드 코드를 효과적으로 분리작업, 분업작업이 가능<br />
                    - Ajax를 사용하고, 클라이언트 객체를 통해 작업하여 페이지가 가볍고 빠름<br />
                    - 오픈 소스이므로 타 개발자들의 소스를 분석 및 플러그인 형태로 붙여넣는 게 쉬움<br />
                    - 구조적인 코딩이 가능하여 클라이언트용 RIA 컨트롤을 만들기가 용이<br />
                    2. 단점<br />
                    - 디버깅, 에러 핸들링이 어려움<br />
                    - 코드 관리가 어려움<br />
                    - 업데이트의 문제<br />
                    - Virtual DOM과 상성이 안 좋음
                </div>
            </li>
            <li>
                <p className='question'>18. 크로스브라우징이란?</p>
                <div className='answer'>
                    웹 페이지 제작 시에 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게(호환성) 나오게 하는 작업을 말합니다.<br />
                    <strong>+ 경험을 말해달라</strong><br />
                </div>
            </li>
            <li>
                <p className='question'>19. CSS 스트라이프란?</p>
                <div className='answer'>
                 CSS Sprite란 웹사이트의 로딩 속도를 빠르게 하여 UX를 향상시키기 위한 최적화 기법 중의 하나로, 
                 여러개의 이미지를 하나의 이미지로 합쳐서 관리하는 기술을 의미합니다. 
                 브라우저는 웹사이트를 로드하는데 필요한 HTML파일, 이미지등의 리소스를 HTTP요청을 통해 가져옵니다.<br /><br />
                 <strong>+ 장점은? 단점은?</strong><br />
                 1. 장점<br />
                    - 서버로의 요청 횟수를 줄여 사이트 로딩 속도를 줄여준다.<br />
                    - 많은 이미지 파일을 관리하는 대신 하나의 스프라이트 이미지 파일만 관리하면 된다.<br />
                 2. 단점 <br />
                  - 이미지 개수가 늘어남에 따라 스프라이트 자체의 용량이 커질 수 있다.<br />
                  - 일부 이미지, 로고의 수정이 필요한 경우 (ex.덮어쓰기도 안될 때) 유지 보수가 까다롭다..<br />
                   그렇기 때문에 웬만하면 수정이 안될 것 같은 단순한 이모티콘이나 로고의 경우에 자주 쓰인다.
                </div>
            </li>
            <li>
                <p className='question'>20. script를 로드할때 defer, async는 각각 무엇을 나타내는가? </p>
                <div className='answer'>
                     <strong>* async와 defer 차이점 명확하게 이해하기</strong><br /><br />
                    <strong>defer</strong><br />
                    - defer 방식은 스크립트 로딩이 완료돼도 무조건 html parsing이 끝난 후 스크립트를 실행시킨다<br />
                    - defer 방식은 먼저 작성된 스크립트가 마지막에 작성된 스크립트보다 늦게 로딩 되어도 먼저 실행시킨다 (실행 순서를 지킴)<br />
                    - defer방식은 DOM 전체가 필요한 스크립트나 실행 순서가 중요한 경우에 사용하는 것이 적합하다<br /><br />
                     
                    <strong>async</strong><br />
                    - async 방식은 스크립트 로딩이 완료되면 html parsing이 끝나지 않아도, 잠시 멈춰놓고 일단 스크립트를 실행시킨다<br />
                    - async 방식은 마지막으로 선언된 스크립트 파일이 제일 먼저 선언된 스크립트 파일보다 먼저 다운로드 되면 순서에 상관없이 먼저 실행되고, 
                    이렇게 먼저 로드 된 스크립트가 먼저 실행되는 걸 'load-first order'라고 부른다<br />
                    - 즉 async는 '마이웨이'를 생각하면 된다.<br />
                    - 그래서 async 방식은 방문자 수 카운터, 광고 관련 스크립트처럼 각 독립적인 역할을 하는 서드파티 스크립트를 
                    현재 개발 중인 스크립트에 통합하려 할 때 아주 유용하다 (async 스크립트는 개발 중인 스크립트에 의존하지 않고, 그 반대도 마찬가지이기 때문)<br /><br />
                   
                    <strong>&lt;script defer src=""&gt;&lt;script&gt;</strong><br />
    
                    이 방법은 외부 script를 다운로드하면서 html parsing을 시작하는데 (비동기처리로 동시에 진행됨)<br />
                    이 단계에선 fetching 만 하고 (일단 실행시키기 직전의 준비만 마쳐놓고)<br />
                    html 다운로드가 모두 끝나서야 미리 받아놨던 외부 script 파일을 실행한다.<br />
                    즉 스크립트를 다운로드하는 도중에도 html parsing이 멈추지 않고 계속 진행된다. <br /><br />
                
                    외부 스크립트 파일을 여러 개 작성했다면<br />
                    마지막에 작성된 스크립트 파일의 용량이 제일 작아 먼저 다운로드가 되어도<br />
                    마지막에 작성되었기 때문에 제일 마지막에 실행된다 (script의 실행순서를 정할 수 있다)<br /><br />
                
                    defer 방식의 단점은<br />
                    스크립트가 실행되기 전에 페이지가 화면에 출력된다는 점을 유의해야 한다.<br />
                    만약 스크립트가 로딩 지연이 될 때 영향을 받는 영역에는 로딩 인디케이터가 존재해야 하며<br />
                    관련 버튼도 사용 불가 처리를 해줘야 사용자에게 혼란을 주지 않을 수 있다.<br />
                    + 참고로 defer 속성은 외부 스크립트에만 유효하여 src 속성을 넣지 않으면 defer 은 무시된다. (내부 script 사용 불가)<br /><br />

                    <strong>&lt;script async src=""&gt;&lt;script&gt;</strong><br />
                    위의 defer와는 다르게 async 속성은 페이지와 매우 독립적으로 동작하는 특징을 가진다.<br />
                    이 방식은 웹브라우저에서 쭉 읽다가 script를 만나면 우선 병렬적으로 실행을 시켜놓은 후 (이것도 비동기처리)<br />
                    기다리지 않고 그다음 코드들을 쭉 해석한다.<br />
                    그러다 script 로딩이 완료되면 html parsing을 일단 멈추고<br />
                    로딩이 완료된 자바스크립트를 실행시킨 후 다시 html parsing을 시작한다.<br /><br />
                
                    이로써 defer방식처럼 자바스크립트 다운로드하는 시간을 절약할 수 있다<br /><br />
                    
                    하지만 자바스크립트가 html 파싱이 완료되기 전에 실행이 되기 때문에 만약 자바스크립트 파일에서 쿼리셀렉터로 DOM 요소를 조작한다면, 
                    조작하려는 시점에 우리가 원하는 html 요소가 아직 정의되어 있지 않을 수 있다 (위험 가능성 존재)<br />
                    또한 자바스크립트를 실행하기 위한 html 파싱을 잠시 멈추기 때문에 웹페이지 로딩 속도가 살짝 느리다는 느낌을 받을 수도 있고,<br />
                    스크립트가 (작성한 순서에 상관없이) 먼저 다운로드 되는 순서대로 실행을 하기 때문에 스크립트 실행 순서에 의존적이라면 문제가 될 수 있음.<br />
                     (a-b-c 순서로 실행되어야 하는데 b가 먼저 다운되면 b-a-c로 로딩되어버림)                    
                </div>
            </li>
            <li>
                <p className='question'>21. AJAX란?</p>
                <div className='answer'>
                    비동기 자바스크립트와 XML(Asynchronous Javascript And XML)을 말한다.<br />
                    Ajax는 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하며 XML 뿐만 아니라 HTML, JSON, 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있다.<br />
                    Ajax의 가장 큰 특징과 핵심적인 부분은 웹 페이지 전체를 다시 로딩하지 않고 웹 페이지의 필요한 일부분만을 갱신할 수 있게 해주는 것이다.<br /><br />

                    <strong>+ 장점</strong><br />
                    필요한 데이터만 가지고 오는 것으로 웹 페이지를 새로고침 하는 것보다 속도가 향상된다<br />
                    서버의 처리가 완료될 때 까지 기다리지 않고 처리 가능하다  (비동기적인 특징)<br />    
                    서버에서 데이터만 전송하면 되어 전체적인 코드의 양이 줄어든다<br /><br />
                    <strong>+ 사용 경험</strong><br />
                    없음<br /><br />
                    <strong>+ 비동기 통신이란?</strong><br />
                    비동기(Async) 통신은 동기(Sync)의 반댓말로, 웹페이지를 새로고침하지 않고도 데이터를 불러오는 방식이다.<br />
                    전체 페이지를 다시 로딩하지 않고 필요한 부분만 업데이트하기 때문에 웹페이지의 속도와 성능을 향상시킬 수 있다.<br />
                    서버와의 통신량이 줄어들고, 자원과 시간을 절약할 수 있다.화면이 깜빡거리거나 멈추지 않고 부드럽게 작동하기 때문에 사용자 경험을 개선시킬 수 있다.
                    요청과 응답이 동시에 일어나지 않아도 되기 때문에 요청을 보낸 후에 다른 작업을 할 수 있다.

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
                    <strong>attr</strong><br />
                    어트리뷰트(attribute)는 HTML 태그에 지정된 속성을 의미한다.<br />
                    제이쿼리 attr() 함수는 해당 attribute 값을 가져오거나 설정할때 사용된다.
                    
                    <br /><br />
                    <strong>prop</strong><br />
                    프로퍼티(property)는 HTML 요소의 JavaScript 객체 속성을 나타낸다.<br />
                    프로퍼티 이벤트 프로퍼티, 엘리먼트 프로퍼티, 노드 프로퍼티 등이 있는데<br />
                    가장 이해하기 쉬운 예시로는 엘리먼트 프로퍼티의 input radio, checkbox의 checked를 예시로 들겠다.<br />
                    해당 checkbox에 checked가 true인지 false인지 크롬 DevTools(f12)에서 Elements에서 노출되지 않는다는 차이가 있다.<br />
                    disabled, checked, selected등도 해당이 된다.<br />
                    제이쿼리 prop()은 DOM 요소의 프로퍼티 값을 가져오거나 설정하는데 쓰인다.<br />
                    - https://beop07.tistory.com/70
                </div>
            </li>
            <li>
                <p className='question'>24. 체크박스의 네모버튼을 커스텀으로 수정하고싶다 어떻게 하는가?</p>
                <div className='answer'>
                    &lt;input type="checkbox" id="check1"&gt;<br/>
                    &lt;label for="check1"&gt;&lt;/label&gt;<br/><br/>
                    근데 단순하게 style로 바로 input태그를 커스텀할수가 없다.<br/>
                    이때 사용하는 방법이 바로 lable이다.<br/>
                    이 라벨을 원하는 디자인으로 css 스타일을 꾸며준다.
                </div>
            </li>
            <li>
                <p className='question'>25. 제이쿼리 선택자중 형제노드를 탐색하고 싶다 어떻게 하는가?</p>
                <div className='answer'>
                    <strong>+ 형제노드?</strong><br />
                    .prev( [selector] ) : 선택된 요소에 같은 노드 위치에서 선택된 요소에 이전 요소가 selector와 같은 요소를 찾음<br />
                    .prevAll( [selector] ) : 같은 노드 위치에서 선택된 요소에 이전 요소들 중에 selector에 해당하는 요소만 찾음 <br />
                    .next( [selector] ) : 같은 노드 위치에서 선택된 요소에 다음 요소가 selector와 같은 요소를 찾음<br />
                    .nextAll( [selector] ) : 같은 노드 위치에서 선택된 요소에 다음 요소들 중에 selector에 해당하는 요소만 찾음<br />
                    .siblings() : 같은 노드 위치에서 선택된 요소를 제외한 나머지 요소를 전부 찾음<br /><br />

                    <strong>+ 부모선택자는?</strong><br />
                    .parent( [selector] ) : 선택된 요소에 부모 노드 중에 해당되는 요소를 찾음 <br />
                    .parents( [selector] ) : 선택된 요소에 최상위 부모 노드 중에 해당되는 요소를 찾음<br />
                    .closest( [selector] ) : 선택된 요소에 부모 노드 요소중에 가장 가까운 요소를 찾음<br /><br />

                    <strong>+ 자식선택자는?</strong><br />
                    .children( [selector] ) : 선택된 요소에서 자식 노드에 해당하는 요소를 찾음<br />
                    .find( [selector] ) : 선택된 요소에서 자식 노에 해당하는 요소들 중  매개변수에 해당하는 요소를 찾음
                </div>
            </li>
            <li>
                <p className='question'>26. 제이쿼리 선택된 요소의 위치를 알고 싶다 어떻게 하는가? </p>
                <div className='answer'>
                .offset()	선택한 요소 집합의 첫 번째 요소의 위치를 HTML 문서를 기준으로 반환하거나, 선택한 요소의 위치를 인수로 전달받은 값으로 설정한다.<br />
                .position()	선택한 요소 집합의 첫 번째 요소의 위치를 해당 요소가 웹 페이지에 위치할 때 기준이 되었던 부모 요소를 기준으로 하는 상대 위치를 반환한다.
                </div>
            </li>
            <li>
                <p className='question'>27. 제이쿼리 e.preventDefault()란?</p>
                <div className='answer'>
                a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행됩니다.<br />
                    preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.<br />
                    주로 사용되는 경우는<br />
                    1. a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우<br />
                    2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)
                </div>
            </li>
            <li>
                <p className='question'>28. 전파방지란? </p>
                <div className='answer'>
                    브라우저에서 요소에 대한 event가 발생하면 해당 요소에 할당된 handler가 동작하게 되는데, <br />
                    이 때 handler가 동작하면서 다음과 같이 Bubbling과 Capturing이 발생하게 됩니다.<br /><br />             
                    <strong>bubbling</strong>은 특정 요소에서 event가 발생했을 때 상위 요소로 event가 전파되는 것을 의미합니다.<br />
                    <strong>capturing</strong>은 특정 요소에서 event가 발생했을 때 bubbling과 반대로 하위 요소로 event가 전파되는 것을 의미합니다.<br /><br />

                    <strong>Event.stopPropagation</strong><br />
                     event.stopPropagation()은 이벤트 전파를 중단시킵니다. 따라서 bubbling 이나 capturing을 막아야하는 경우에 사용합니다.<br /><br />

                    <strong>event.stopImmediatePropagation()</strong><br />
                    event.stopImmediatePropagation()은 이벤트 전파를 중단시키고 다른 event handler의 동작도 막아줍니다. 따라서 target이 기본 동작을 가지고 있는 경우에 기본 동작만 일어나게 됩니다.<br /><br />

                    <strong>return false</strong><br />
                    return false는 onclick handler에 사용했을 경우에 대하여 event.preventDefault()를 사용한 것과 같은 동작을 합니다. 따라서 이벤트 전파는 발생하지만 기본 동작은 중단되게 됩니다.
                </div>
            </li>
            <li>
                <p className='question'>29. css keyframe을 사용하여 위아래로 움직이는 도형을 만들수 있는가? </p>
                <div className='answer'>
                    <strong>html</strong><br />
                    &lt;i class="icon fas fa-bomb"&gt;&lt;/i&gt;<br /><br />

                    <strong>css</strong><br />                    
                        .icon&#123;<br />   
                        　　　font-size: 5em;<br />   
                        　　　animation: motion 0.3s /* 속도 */<br />   
                        　　　linear 0s   /* 처음부터 끝까지 일정 속도로 진행 */<br />   
                        　　　infinite alternate; /* 무한 반복 */<br />   
                        &#125;<br />   
                        @keyframes motion &#123;<br />   
                        　　　0% &#123;margin-top: 0px;&#125; /* 처음 위치 */<br />   
                        　　　100% &#123;margin-top: 10px;&#125; /* 마지막 위치 */<br />   
                        &#125;                  
                </div>
            </li>
            <li>
                <p className='question'>30. css로 세모는 어떻게 만드는가?</p>
                <div className='answer'>
                <strong>html</strong><br />
                &lt;div id = "triangle"&gt;&lt;/div&gt;<br /><br />

                <strong>css</strong><br />    
                #triangle&#123;<br />  
                　　　width: 0;<br />  
                　　　height: 0;<br />  
                　　　border-bottom: 10px solid red;<br />  
                　　　border-left: 10px solid transparent;<br />  
                　　　border-right: 10px solid transparent;<br />  
                &#125;
                </div>
            </li>
            <li>
                <p className='question'>31. 자바스크립트에서 호이스팅이라고 들어보았는가?(프론트영역)</p>
                <div className='answer'>
                    호이스팅은 코드가 실행하기 전 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말한다.<br />
                    자바스크립트 엔진은 코드를 실행하기 전 실행 가능한 코드를 형상화하고 구분하는 과정(*실행 컨텍스트를 위한 과정)을 거친다.<br />
                    자바스크립트 엔진은 코드를 실행하기 전 실행 컨텍스트를 위한과정에서 모든 선언(var, let, const, function, class)을 스코프에 등록한다.<br />
                    코드 실행 전 이미 변수선언/함수선언이 저장되어 있기 때문에 선언문보다 참조/호출이 먼저 나와도 오류 없이 동작한다.<br />
                    (정확히는 var 키워드로 선언한 변수와 함수 선언문일 경우 오류 없이 동작한다. 이는 선언이 파일의 맨 위로 끌어올려진 것 처럼 보이게 한다.)
                </div>
            </li>
            <li>
                <p className='question'>32. 자바스크립트 ES6에서 많은 변화가 일어났는데 대표적으로 3가지만 말해달라</p>
                <div className='answer'>
                    1. ES6 이후로 let과 const 키워드의 등장으로 블록 범위가 적용되었습니다.<br />
                    2. 화살표 함수<br />
                    3. 클래스 : class 키워드로 자바스크립트에서 객체를 생성할 수 있는 템플릿인 클래스를 선언할 수 있습니다.<br />
                    <strong>+ let, var, const 차이는?</strong><br />


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
                    Flex(플렉스)는 Flexible Box, Flexbox라고 부르기도 합니다.<br />
                    Flex는 레이아웃 배치 전용 기능으로 고안되었습니다. 그래서 앞서서 소개했던 레이아웃을 만들 때 딱히 사용할게 없어서 쓰던 float나 inline-block 등을
                     이용한 기존 방식보다 훨씬 강력하고 편리한 기능들이 많이 지원됩니다.
                </div>
            </li>
            <li>
                <p className='question'>35. 반응형웹이란? 적응형웹이란?</p>
                <div className='answer'>
                반응형 웹 디자인은 감지된 화면 크기에 따라 자동으로 페이지가 재배열되는 유동적인 접근 방식입니다. <br />
                반면, 적응형 웹 디자인은 브라우저가 주어진 플랫폼에 맞춰 특별히 생성된 레이아웃을 불러오는 웹 디자인 유형입니다.<br /><br />

                <strong>+ 반응형에서 중요한건 무엇이라 생각하는가?</strong><br />

                </div>
            </li>
            <li>
                <p className='question'>36. meta태그는 무엇인가?</p>               
                <div className='answer'>
                    하이퍼텍스트(Hyper text) 생성 언어 HTML 문서의 맨 위쪽에 위치하는 태그(tag)로 HEAD 태그 사이 또는 뒤에 있어도 되지만 반드시 BODY 태그 앞쪽에 위치해야 한다.<br />
                    브라우저와 검색 엔진을 사용할 수 있도록 웹 문서의 정보를 포함하고 있다​<br />
                    메타태그(meta tag)는 웹페이지(Web page)의 요약이므로 상당히 중요하다고 할 수 있다.<br /><br />
                    
                    <strong>+ 오픈그래프란(og)?</strong><br /><br />
                    대부분의 콘텐츠는 URL로 공유된다. 이 때, 콘텐츠가 표시되는 방식을 관리하기 위해 오픈 그래프 태그(OG TAG)로 웹사이트를 마크업하여 마케팅 효과를 낼 수 있다.<br />
                    즉, 해당 콘텐츠의 요약내용이 "SNS에 게시되는데 최적화된 데이터"를 가지고 갈 수 있도록 설정하는 것.

                    <strong>+ 모바일에서 손가락으로 확대하는것을 2배까지만 제한하고 싶다 어떻게하는가?</strong><br /><br />
                    maximum-scale : 2 (늘릴 수 있는 최대 크기를 지정합니다. 0~10 사이의 값을 가집니다.

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
                    크롬 62.92프로 / 사파리 19.97 / 엣지 5.5
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

