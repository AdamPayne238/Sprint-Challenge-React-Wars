import React from 'react';
import './StarWars.css';
import { Button } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'


// function StarWarsCard(props){
//     console.log(props);
//     return(
    
//         <div className="starWarsCard">

//             <h2>{props.name}</h2>
//             <p>
//                 {props.gender}
//             </p>
//             <p>
//                 {props.age}
//             </p>
//             <p>
//                 {props.height}
//             </p>
//             <p>
//                 {props.mass}
//             </p>
//             <Button primary>Like</Button>
//     <Button secondary>Comment</Button>
//         </div>
//     );
// }

// export default StarWarsCard;

const StarWarsCard = (props) => (
    <div>
      <Header as='h1'>{props.name}</Header>
      <Header as='h2'>{props.gender}</Header>
      <Header as='h3'>{props.age}</Header>
      <Header as='h4'>{props.height}</Header>
      <Header as='h5'>{props.mass}</Header>
    </div>
  )
  
  export default StarWarsCard;