import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";

// function ScrollAnimaiton() {
//     return (
//         <div className="wrap">
//             <p style={{margin: '30px 0', fontSize: '30px', color: 'blue'}}>
//                 참고사이트 : <a href="https://dbramwell.github.io/react-animate-on-scroll/" target='_blank' rel="noopener noreferrer">https://dbramwell.github.io/react-animate-on-scroll/</a> 
//             </p>
//             <p style={{margin: '30px 0', fontSize: '30px', color: 'black'}}>
//             설치 : npm install react-animate-on-scroll  --legacy-peer-deps
//             </p>
//             <ScrollAnimation animateIn='fadeIn'
//                 animateOut='fadeOut'>
//                 <h1>
//                     React Animate On Scroll
//                 </h1>
//                 <h2>
//                     Using:
//                 </h2>
//                 </ScrollAnimation>
//                 <ScrollAnimation animateIn='bounceInRight'
//                 animateOut='bounceOutLeft'>
//                 <h2>
//                     <a href='https://daneden.github.io/animate.css/'>
//                     Animate.css
//                     </a>
//                 </h2>
//                 </ScrollAnimation>
            
//         </div>
//     );  
// }

// export default ScrollAnimaiton;

// function Profile() {
//     return (
//         <img 
//             src="https://i.imgur.com/MK3eW3As.jpg"
//             alt="Katherine Johnson"
//         />
//     );
// }
// export function Gallery() {
//     return (
//         <section>
//             <h1>Amazing scientists</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }

function Item({name, isPacked}) {   
    return (
        <li className='item'>{name} {isPacked && '✔'}</li>
    );    
}

const ScrollAnimaiton = () => {
    
  return (
    <div className='wrap'>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item
                isPacked={true}
                name="Space suit"
            />
            <Item
                isPacked={true}
                name="Helmet with a golden leaf"
            />
            <Item
                isPacked={false}
                name="Photo of Tam"
            />
        </ul> 
    
        {/* 웹에서 HTML을 사용하면 및 다음과 같은 내장된 태그 세트를 사용하여 풍부하고 구조화된 문서를 만들 수 있습니다  */}
        {/* <article>
            <h1>My First Component</h1>
            <ol>
                <li>Component: UI BUilding Blocks</li>
                <li>Defining a Componont</li>
                <li>Using a Component</li>
            </ol>
        </article>        */}

        {/* HTML 태그와 마찬가지로 구성 요소를 구성, 정렬 및 중첩하여 전체 페이지를 디자인 */}
        {/* <PageLayout>
            <NavigationHeader>
                <SearchBar />
                <Link to="/docs">Docs</Link>
            </NavigationHeader>
            <Sidebar />
            <PageContent>
                <TableOfContents />
                <DocumentationText />
            </PageContent>
        </PageLayout> */}
    </div>
  )
}




export default ScrollAnimaiton;
 