import './movie-list.styles.css'
import MovieCard from '../movie-card/movie-card.component'

import { MovieDetailsContext } from '../../contexts/sidebar/movieDetails.context'
import { useContext } from 'react'
import MovieDetails from '../movie-details/movie-details.component'

function MovieList({movies}){
    const {movieDetailsState} = useContext(MovieDetailsContext)
    console.log(movieDetailsState)
    return (
            <div className='movies-list'>
                {   
                    movies.map(movie=>{
                       return <MovieCard key={movie.id} poster={movie.poster_path} title={movie.original_title} id={movie.id}/>
                    })
                }
                {movieDetailsState.showDetails === true && <MovieDetails movieID={movieDetailsState.movieID}/>}
            </div>
        )
    
    
}

export default MovieList