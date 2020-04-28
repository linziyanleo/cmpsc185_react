import React, { Component } from 'react';
 
import cat from '../media/logo2.png'


export class Home extends Component{
  render(){

    return (

    	<div className="home">
			<img src= {cat} alt="logo"/>
			<h3>I'm Leo. <br></br>
				Nice to meet you here. </h3>
			
    	</div>

    	);
  }

}


export default Home;