import { useContext } from 'react'
import { MovieDetailsContext } from '../../contexts/sidebar/movieDetails.context'
import './movie-card.styles.css'
import { useState } from "react"



function MovieCard(props){
    const {setMovieDetailsState} = useContext(MovieDetailsContext)
    return(
        <div onClick={()=>{
            setMovieDetailsState({showDetails:true,movieID:props.MovieID})
        }}
        className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} className="movie-thumbnail"/>
            <p className="movie-card-title">{props.title}</p>
        </div>
    )
}

export default MovieCard