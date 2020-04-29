import React from 'react';
import Card from './Card';


const CardList = ({robots}) =>{
	//const {robots}=props;
	//looping to get all the robot from robots.js file.
	const cardsArray=robots.map((user,i)=>{
		return (
		<Card
		   key={i} 
		   id={robots[i].id} 
		   name={robots[i].name} 
		   email={robots[i].email}
		/>)
	});
	return (
	<div>
	  {cardsArray}
	</div> 
	);
}
export default CardList;
