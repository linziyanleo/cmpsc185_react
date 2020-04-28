import React, { Component } from 'react';

import v1 from '../media/vi/1.mp4'
import v2 from '../media/vi/2.mp4'

export class Videos extends Component{
  render(){

    return (
    	<div className="vid">
    		<video src={v1}  controls="controls"  />
			<video src={v2}  controls="controls"  />
    	</div>
    	);
             
      
  }

}


export default Videos;