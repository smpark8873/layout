


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

function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function Profile() {
    return (
      <div style={{padding: '150px 50px 50px'}}>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
          }}
        />
        <Avatar
          size={80}
          person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
          }}
        />
        <Avatar
          size={50}
          person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}
        />
      </div>
    );
  }
  
export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  