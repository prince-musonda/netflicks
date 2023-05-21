import { useContext } from 'react'
import { MovieDetailsContext } from '../../contexts/sidebar/movieDetails.context'
import './movie-card.styles.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function MovieCard(props){
    const navigate = useNavigate()
    const {setMovieDetailsState} = useContext(MovieDetailsContext)
    return(
        <div onClick={()=>{
           navigate(`/movie-details/${props.movieID}`)
        }}
        className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} className="movie-thumbnail"/>
            <p className="movie-card-title">{props.title}</p>
        </div>
    )
}

export default MovieCard