import React, { Component } from 'react';
const axios = require('axios');

export class Movie extends Component {
  constructor()
  {
    super();
    this.state = {
      src: '',
      title: '',
      director: '',
      imdb: '',
      plot: '',
      shouldUpdate: false,
    }
  }

  dimPoster(e) {
    e.target.style.opacity = 0.7;
  }

  resetPoster(e) {
    e.target.style.opacity = 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.state.shouldUpdate !== prevState.shouldUpdate){
      this.render();
    }
    if(this.props.movie !== prevProps.movie) {
      this.render();
    }
  }

  render() {
    return(
      <div className='mov-child'>
        <img src={this.props.src} onMouseEnter={this.dimPoster} onMouseLeave={this.resetPoster} onClick={this.props.enlarge.bind(this, this.props.src, this.props.title, this.props.director, this.props.imdb, this.props.plot, this.props.movie)} alt={this.state.title}/>
      </div>      
    );
  }
}
export default Movie;