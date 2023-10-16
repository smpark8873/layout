
// 챌린지 3/3 : _ _children소품 에 JSX 전달하기
// Card아래 마크업에서 구성 요소를 추출 하고 childrenprop을 사용하여 다른 JSX를 전달합니다.

// function Card ({children}) {
//   return (
//     <div className="card">
//       <div className="card-content">
//           {children}
//       </div>
//     </div>
//   );
// }



// export default function Profile() {
//   return (
//     <div className="wrap">
//       <Card> 
//         <h1>Photo</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={70}
//           height={70}
//         />
//       </Card>
//       <Card>
//           <h1>About</h1>
//           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//       </Card>
//     </div>
//   );
// }




//이 예에서는 너비와 높이 를 결정하는 Avatar숫자 소품을 받습니다 . 이 예에서는 소품 이 로 설정되어 있습니다 . 
//그러나 새 탭에서 이미지를 열면 이미지 자체가 더 큰( 픽셀) 것을 알 수 있습니다. 실제 이미지 크기는 요청하는 썸네일 크기에 따라 결정됩니다.size<img>size40160

//Avatar소품 을 기반으로 가장 가까운 이미지 크기를 요청하도록 구성 요소를 변경합니다 size.
// 특히, 가 size보다 작 으면 (“big”) 대신 (“small”)을 함수에 90전달합니다 . 다양한 소품 값으로 아바타를 렌더링 하고 새 탭에서 이미지를 열어 변경 사항이 작동하는지 확인하세요 .'s''b'getImageUrlsize

// function Avatar({ person, size }) {
//   let thumbnailSize = 's';
//   if (size >90) {
//     thumbnailSize = 'b';
//   }
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, thumbnailSize)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div className="wrap">
//       <Avatar
//         size={40}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//       <Avatar
//         size={120}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//     </div>
//   );
// }


// export function getImageUrl(person, size) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     size +
//     '.jpg'
//   );
// }




// function Profile() {
//     return (
//         <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2021/04/urbanbrush-20210409171013216893.jpg" alt="" style={{margin: '5px', width:'100px'}} />
//     );
// }

// export default function Ui() {
//     return (
//         <section className='warp'>
//             <h1>Amazing scientiste</h1>
//             <Profile />
//             <Profile />
//             <Profile />            
//         </section>
//     );
// }

{/*
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};


export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos https://i.imgur.com/7vQD0fPs.jpg</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
*/}


// function Avatar({ person,size }) {
//     return (
//       <img
//         className="avatar"
//         src="https://i.imgur.com/1bX5QH6.jpg"
//         alt={person.name}
//         width={size}
//         height={size}        
//       />
//     );
//   }
  
//   export default function Profile() {
//     return (
//         <div style={{padding: "150px 50px 50px"}}>
//             <Avatar 
//                 person ={{name:'Lin Lanyin', imageId: '1vX5QH6'}}
//                 size={100}
//             />
//         </div>
//     );
//   }

// function Avatar({ person, size }) {
//     return (
//       <img
//         className="avatar"
//         src={getImageUrl(person)}
//         alt={person.name}
//         width={size}
//         height={size}
//       />
//     );
//   }
  
//   export default function Profile() {
//     return (
//       <div style={{padding: '150px 50px 50px'}}>
//         <Avatar
//           size={100}
//           person={{ 
//             name: 'Katsuko Saruhashi', 
//             imageId: 'YfeOqp2'
//           }}
//         />
//         <Avatar
//           size={80}
//           person={{
//             name: 'Aklilu Lemma', 
//             imageId: 'OKS67lh'
//           }}
//         />
//         <Avatar
//           size={50}
//           person={{ 
//             name: 'Lin Lanying',
//             imageId: '1bX5QH6'
//           }}
//         />
//       </div>
//     );
//   }
  
// export function getImageUrl(person, size = 's') {
//     return (
//       'https://i.imgur.com/' +
//       person.imageId +
//       size +
//       '.jpg'
//     );
//   }
  


// import { getImageUrl } from './utils.js';


// //이 Gallery구성 요소에는 두 프로필에 대한 매우 유사한 마크업이 포함되어 있습니다. Profile중복을 줄이기 위해 구성요소를 추출 합니다 . 전달할 소품을 선택해야 합니다.
// function Profile ({
//     imageId,
//     name,
//     profession,
//     awards,
//     discovery,
//     imageSize = 70
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         width = {imageSize}
//         height = {imageSize}
//         />
//       <ul>
//         <li>
//           <b>Profession: </b> {profession}
//         </li>
//         <li>
//           <b>Awards: {awards.length} </b> 
//           ({awards.join(',')})
//         </li>
//         <li>
//         <b>Discovered: </b> {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }


// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>

//       <Profile 
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal', 
//           'Matteucci Medal'
//         ]
//       }
//       />
//        <Profile 
//         imageId="YfeOqp2"
//         name="Katsuko Saruhashi"
//         profession="geochemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize'
//         ]
//       }
//       />     
//     </div>
//   );
// }

// export function getImageUrl(imageId, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     imageId +
//     size +
//     '.jpg'
//   );
// }


