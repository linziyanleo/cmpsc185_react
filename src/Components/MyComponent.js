import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper

import p1 from '../media/im/1.jpg'
import p2 from '../media/im/2.png'
import p3 from '../media/im/3.jpg'
import p4 from '../media/im/4.jpg'
import p5 from '../media/im/5.jpeg'
import p6 from '../media/im/6.jpg'
import p7 from '../media/im/7.jpg'
import p8 from '../media/im/8.jpg'
import p9 from '../media/im/9.png'
import p10 from '../media/im/10.jpg'
 
function MyComponent() {
  return (
    <div className="MyComponent">
      <SRLWrapper>
            <img src={p1}/>
			{/* <img src={p2}/> */}	
			<img src={p3}/>
			<img src={p4}/>			
			<img src={p5}/>
			<img src={p6}/>
			<img src={p7}/>
			<img src={p8}/>
			<img src={p9}/>
			<img src={p10}/>
      </SRLWrapper>
    </div>
  );
}
 
export default MyComponent;