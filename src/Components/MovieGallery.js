import React, { Component } from 'react';
import Movie from './Movie';

export class MovieGallery extends Component {  
  render() {
    return this.props.movieList.map((movie) => (
      <Movie movie={movie.id} src={movie.src} title={movie.name} director={movie.director} imdb={movie.imdb} plot={movie.plot} enlarge={this.props.enlarge} />
    ));
  }
}
export default MovieGallery;