import './movie-list.styles.css'
import MovieCard from '../movie-card/movie-card.component'

function MovieList({movies}){
   
    if(movies){
        return (
                <div className='movies-list'>
                    {
                        movies.map(movie=>{
                        return <MovieCard key={movie.id} poster={movie.poster_path} title={movie.original_title} movieID={movie.id}/>
                        })
                    
                    }
                  
                </div>
            )
     }
    
}

export default MovieList