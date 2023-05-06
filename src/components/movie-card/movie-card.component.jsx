import './movie-card.styles.css'
import { useState } from "react"

function MovieCard(props){
    return(
        <div onClick={()=>{}} className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} className="movie-thumbnail"/>
            <p className="movie-card-title">{props.title}</p>
        </div>
    )
}

export default MovieCard