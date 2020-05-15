import React, { Component } from 'react';
import MovieGallery from './MovieGallery';
const movies = require('../movies.json');

export class Movies extends Component {
  enlarge(imgSrc, title, director, rating, plot) {
    document.body.style.overflow = 'hidden';
    var lbContent = document.createElement('img');
    lbContent.className = 'movLightbox-content';
    lbContent.src = imgSrc;
    lbContent.id = 'lbContent';
    var lbInfo = document.createElement('div');
    lbInfo.className = 'movLightbox-info';
    lbInfo.id = 'lbInfo';
    lbInfo.innerHTML = '<span class=\'title\'>'+title+'</span><br/><span class=\'director\'>'+director+'</span><br/><br/><span class=\'rating\'>IMDb Rating: '+rating+'</span><br/><br/><br/><p>'+plot+'</p>';
    var lbMovie = document.createElement('div');
    lbMovie.id = 'lbMovie';
    lbMovie.className = 'movLightbox-container';
    var lightbox = document.createElement('div');
    lightbox.id = 'lb';
    lightbox.className = 'movLightbox';
    document.body.appendChild(lightbox);  
    document.getElementById('lb').appendChild(lbMovie);
    document.getElementById('lbMovie').appendChild(lbContent);
    document.getElementById('lbMovie').appendChild(lbInfo);
    //document.getElementById('lb').appendChild(lbInfo);
    document.getElementById('lb').addEventListener('click', function(event) {
      if(event.target.className === 'movLightbox') {
        document.getElementById('lb').removeChild(document.getElementById('lbMovie'));
        //document.getElementById('lb').removeChild(document.getElementById('lbInfo'));
        document.body.removeChild(document.getElementById('lb'));
        document.body.style.overflow = 'auto';
      }
    });
  }

  retrieveIds() {
    let movieList = [];
    for (let movie of movies) {
      movieList.push(movie.id);
    }
    return movieList;
  }
  
  render() {
    let movieList = this.retrieveIds();
    return (
      <div>
        <div className='content'>
          <div className='mov-container'>
            <MovieGallery movieList={movieList} enlarge={this.enlarge} />
          </div>
        </div>
      </div>
    );
  }
}
export default Movies;