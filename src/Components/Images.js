import React, { Component } from 'react';

import BackToTop from "react-back-to-top-button";
import Popup from "reactjs-popup";

import MyComponent from "./MyComponent";
import SimpleReactLightbox from "simple-react-lightbox";

export class Images extends Component{
  render(){

    return (
	

    	<div className="gallary">
			
			<SimpleReactLightbox>

					<MyComponent />

			</SimpleReactLightbox>	
			
    	</div>
    	);
  }

}


export default Images;