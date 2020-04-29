import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './searchBox'; 
import './App.css';
//import searchBox from './searchBox'; This will not work because of 
//small 's' used in writing searchBox

/*const state={
	robots:robots,
	searchfield:''
}*/

class App extends React.Component{
	constructor(){
		super();
		this.state={
			robots:robots,
			searchfield:''
		}
	}

	onSearchChange=(event)=>{
		//updating the searchfield according to the value received from searchBox component and setting the new state
		this.setState({searchfield: event.target.value})
		
		

	}
	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		 return (
			    <div className='tc'>
			      <h1 className='f1'>RoboFriends</h1>
			      <SearchBox searchChange={this.onSearchChange}/>
			      <CardList robots={filteredRobots}/>
			    </div>

               )

	}
 
}
export default App;