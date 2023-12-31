import { useState } from 'react';


// const sculptureList = [{
//     name: 'Homenaje a la Neurocirugía',
//     artist: 'Marta Colvin Andrade',
//     description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
//     url: 'https://i.imgur.com/Mx7dA2Y.jpg',
//     alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
//   }, {
//     name: 'Floralis Genérica',
//     artist: 'Eduardo Catalano',
//     description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
//     url: 'https://i.imgur.com/ZF6s192m.jpg',
//     alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
//   }, {
//     name: 'Eternal Presence',
//     artist: 'John Woodrow Wilson',
//     description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
//     url: 'https://i.imgur.com/aTtVpES.jpg',
//     alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
//   }, {
//     name: 'Moai',
//     artist: 'Unknown Artist',
//     description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
//     url: 'https://i.imgur.com/RCwLEoQm.jpg',
//     alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
//   }, {
//     name: 'Blue Nana',
//     artist: 'Niki de Saint Phalle',
//     description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
//     url: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
//   }, {
//     name: 'Ultimate Form',
//     artist: 'Barbara Hepworth',
//     description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
//     url: 'https://i.imgur.com/2heNQDcm.jpg',
//     alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
//   }, {
//     name: 'Cavaliere',
//     artist: 'Lamidi Olonade Fakeye',
//     description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
//     url: 'https://i.imgur.com/wIdGuZwm.png',
//     alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
//   }, {
//     name: 'Big Bellies',
//     artist: 'Alina Szapocznikow',
//     description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
//     url: 'https://i.imgur.com/AlHTAdDm.jpg',
//     alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
//   }, {
//     name: 'Terracotta Army',
//     artist: 'Unknown Artist',
//     description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
//     url: 'https://i.imgur.com/HMFmH6m.jpg',
//     alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
//   }, {
//     name: 'Lunar Landscape',
//     artist: 'Louise Nevelson',
//     description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
//     url: 'https://i.imgur.com/rN7hY6om.jpg',
//     alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
//   }, {
//     name: 'Aureole',
//     artist: 'Ranjani Shettar',
//     description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
//     url: 'https://i.imgur.com/okTpbHhm.jpg',
//     alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
//   }, {
//     name: 'Hippos',
//     artist: 'Taipei Zoo',
//     description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
//     url: 'https://i.imgur.com/6o5Vuyu.jpg',
//     alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
//   }];
  


// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);
//   const hasNext = index < sculptureList.length - 1;

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <div class="wrap" style={{margin:'0 auto', width: '1000px'}}>
//       <button onClick={handleNextClick} style={{margin: '10px 0', padding: '0 10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#e8e8e8', height: '40px', fontSize: '20px'}}>
//         Next
//       </button>
//       <h2 style={{margin: '30px 0'}}>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3 style={{margin: '20px 0'}}>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick} style={{margin: '10px 0', padding: '0 10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#e8e8e8', height: '40px', fontSize: '20px'}}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p style={{margin: '30px 0'}}>{sculpture.description}</p>}
//       <img style={{display:'block'}}
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </div>
//   );
// }



// function Image() {
//   return (
//     <img src="https://i.imgur.com/ZF6s192.jpg"
//         alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals" />
//   );
// }


// export default function Test2() {
//  return(
//   <div className='wrap'>
//     <h1>Inspiring Sculptures</h1>
//     <Image />
//       <Image />
//       <Image />
//   </div>
  
//  )
// }

// export default function Test2() {
//   const [number, setNumber] = useState(0);

//   return(
//     <div className='wrap'>
//       <h1>{number}</h1>
//       <button onClick={()=> {
//         setNumber(number + 5);
//       }}> + 5</button>
//     </div>
//   );
// }

// export default function Test2() {
//   const [to,setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(()=> {
//       alert(`You said ${message} to ${to}`);
//     },5000);
//   }

//   return (
//     <div className='wrap'>
//       <form onSubmit={handleSubmit}>
//         <label>
//           To:{' '}
//           <select
//             value={to}
//             onChange={e => setTo(e.target.value)}>
//             <option value="Alice">Alice</option>
//             <option value="Bob">Bob</option>
//           </select>
//         </label>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//       </div>
//   );
// }

// #### 퀴즈1 ####
// 사용자가 구매 버튼을 누를 때마다 보류카운터가 1 씩 증가해야 합니다. 
// 3초후에는 보류중 카운터가 감소하고 완료 카운터가 증가해야 합니다.

// export default function Test2() {
//   const[pending, setPending] = useState(0);
//   const[completed, setCompleted] = useState(0);

//   async function handleClick() {
//     setPending(p => p+1);
//     await delay(3000);
//     setPending(pending -1);
//     setCompleted(completed+1);
//   }

//   return (
//     <div className='wrap'>
//       <h3>Pending  :{pending}</h3>
//       <h3>completed : {completed}</h3>
//       <button onClick={handleClick}>Buy</button>
//     </div>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve,ms);
//   });
// }

export default function Test() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if(status ==='success') {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitForm(answer);
      setStatus('success');     
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className='wrap'>
      <h2>City quize</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
        {error !== null && 
        <p className="Error">{error.message}</p>}
      </form>
    </div>
  )
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}