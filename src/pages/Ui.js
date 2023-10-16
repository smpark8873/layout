

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}


export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul style={{padding: '150px 50px 50px'}}>{listItems}</ul>;
}



// 챌린지 3/3 : _ _일련의 ? :to if및 변수 리팩터링
// 이 Drink구성 요소는 일련의 조건을 사용하여 소품이 인지 인지 ? :에 따라 다른 정보를 표시합니다 . 
// 문제는 각 음료에 대한 정보가 여러 조건에 걸쳐 분산되어 있다는 것입니다. 
// 세 가지 조건 대신 단일 문을 사용하도록 이 코드를 리팩터링합니다 .name"tea""coffee"if? :

// function Drink({ name }) {
//   let part, caffeine, age;
//   if (name === 'tea') {
//     part = 'leaf';
//     caffeine = '15–70 mg/cup';
//     age = '4,000+ years';
//   } else if (name === 'coffee') {
//     part = 'bean';
//     caffeine = '80–185 mg/cup';
//     age = '1,000+ years';
//   }
//   return (
//     <section className="wrap">
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{part}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{caffeine}</dd>
//         <dt>Age</dt>
//         <dd>{age}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }




// 챌린지 2/3 : _ _다음으로 항목 중요도 표시&& 
// 이 예에서 각각은 Item숫자 importanceprop을 받습니다. &&" (중요도: X) "를 기울임꼴로 렌더링하려면 연산자를 사용하세요 . 단, 중요도가 0이 아닌 항목에만 해당됩니다. 항목 목록은 다음과 같이 표시됩니다.
// 우주복 (중요도: 9)
// 황금잎이 달린 헬멧
// 탐의 사진 (중요도: 6)
// 두 라벨 사이에 공백을 추가하는 것을 잊지 마세요!

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name} 
//       {importance > 0 && ' '}
//       {importance > 0 && <i>(Importance: {importance})</i>}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section className="wrap">
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           importance={9} 
//           name="Space suit" 
//         />
//         <Item 
//           importance={0} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           importance={6} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }



// 챌린지 1/3 : _ _완료되지 않은 항목에 대한 아이콘 표시? : 
// 조건 연산자( cond ? a : b)를 사용하여 ❌ if isPackedis not 을 렌더링합니다 true.
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked ? '✔' : '❌'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section className="wrap">
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }

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


