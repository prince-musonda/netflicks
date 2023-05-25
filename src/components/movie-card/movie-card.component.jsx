import { useContext } from 'react'
import { imageUrlGenerator } from '../../URL-generators/url-genrators'
import { MovieDetailsContext } from '../../contexts/sidebar/movieDetails.context'
import './movie-card.styles.css'
import { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'

function MovieCard(props){
    const imgContainerRef = useRef(null) 
    const navigate = useNavigate()
    const {setMovieDetailsState} = useContext(MovieDetailsContext)
    
    //on error loading image event handler
    function imgErrorHandler(event){
        imgContainerRef.current.className = 'image-fallback'
        // hide the alt value in the image but still allow 
        // screen readers to understand the unloaded image 
        event.target.style.display = 'none'
    }
    return(
        <div onClick={()=>{
           navigate(`/movie-details/${props.movieID}`)
        }}
        className='movie-card'>
                <div ref={imgContainerRef}>
                <img src={imageUrlGenerator(props.poster)} alt={props.title} className="movie-thumbnail" onError={imgErrorHandler}/>
                </div>
            <p className="movie-card-title">{props.title}</p>
        </div>
    )
}

export default MovieCard