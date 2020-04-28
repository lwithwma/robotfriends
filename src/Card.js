import React from 'react';

const Card=(props)=>{
	const {name,email,id}=props;
	//return should should be one element
	return ( 
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		 <img alt="robot" src={`https://robohash.org/${id}?100*100`}/>
		 <div>
		   <h2>{name}</h2>
		   <p>{email}</p>
		 </div>
		</div>
		)
}

export default Card;