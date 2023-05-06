import './movie-list.styles.css'
import MovieCard from '../movie-card/movie-card.component'
import { AppContext } from '../../App'
import { useContext } from 'react'

function MovieList({movies}){
    return (
            <div className='movies-list'>
                {   
                    movies.map(movie=>{
                       return <MovieCard key={movie.id} poster={movie.poster_path} title={movie.original_title}/>
                    })
                }
            </div>
        )
    
    
}

export default MovieList