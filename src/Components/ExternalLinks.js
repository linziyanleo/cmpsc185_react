import React, { Component } from 'react';

import e1 from '../media/ex/1.png'
import e2 from '../media/ex/2.png'
import e3 from '../media/ex/7.png'



export class ExternalLinks extends Component{
  render(){

    return (
		<div className="project">

    	<div className="blocks">
		<a href="http://lzyleo.me/work/swirls.html">
			<img src={e1} alt="button" width="80" height="80"/></a>
			<p>&nbsp; &nbsp; &nbsp;  It draws curves with random perlin noise.</p>

		</div>
		<br></br>
		

    	<div className="blocks">
		<a href='https://github.com/Alexxx411/cs48_jocker'>
			<img src={e2} alt="button" width="80" height="80"/></a>
			<p>&nbsp; &nbsp; &nbsp;  Touch to explore more Bubbles with different colors.</p>
		</div>
		<br></br>
    	<div className="blocks">
		<a href='https://www.mynamestats.com/Last-Names/Y/YA/YAN/index.html'>
			<img src={e3} alt="button" width="80" height="80"/></a>
			<p>&nbsp; &nbsp; &nbsp;  Touch to make connections with dots floating in space.</p>	
		</div>
		
		
		</div>
		
    	);       
      
  }

}


export default ExternalLinks;