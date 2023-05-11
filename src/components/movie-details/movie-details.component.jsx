import './movie-details.style.css'
import { fetchMovieById } from '../../fetchers/fetchers'
import { fetchMovieTrailer } from '../../fetchers/fetchers'
import { useContext } from 'react'
import { MovieDetailsContext } from '../../contexts/sidebar/movieDetails.context'
import  useSWR  from 'swr'
import {ReactComponent as CloseIcon} from '../../assets/x_icon.svg'

function MovieDetails({movieID}){
        const {setMovieDetailsState} = useContext(MovieDetailsContext)

        function closeMovieDetails(){
            setMovieDetailsState({showDetails:false,movieID:null})
        }
    

        const {data:movie_details,error,isLoading} = useSWR(movieID,fetchMovieById);

        const {data:trailer_url} = useSWR(movieID,fetchMovieTrailer)
        
        if(isLoading){
            console.log('loading')
            return(
            <div className='movie-details-container' onClick={closeMovieDetails}> 
                <div className='controls'>
                        <button className='close-btn' onClick={closeMovieDetails}>
                            <CloseIcon/>
                        </button>
                        <button className='close-btn' onClick={closeMovieDetails}>
                            <CloseIcon/>
                        </button>
                    </div>
                <p className='loading'>loading</p>
            </div>
            )
        }
        if(error){
            console.log(error)
            return(
                <div className='movie-details-container' onClick={closeMovieDetails}>
                   <div className='controls'>
                        <button className='close-btn' onClick={closeMovieDetails}>
                            <CloseIcon/>
                        </button>
                        <button className='close-btn' onClick={closeMovieDetails}>
                            <CloseIcon/>
                        </button>
                    </div>
                    <p className='loading'>error</p>
                </div>
                )
        }
        if(movie_details){
            console.log(movie_details)
            return(
                <div className='movie-details-container'>
                    <div className='controls'>
                        <button className='close-btn' onClick={closeMovieDetails}>
                            <CloseIcon/>
                        </button>
                        <button className='close-btn' onClick={closeMovieDetails}>
                            <CloseIcon/>
                        </button>
                    </div>
                  
                    <div className='movie-background-container'>
                       <img src={`https://image.tmdb.org/t/p/original/${movie_details.backdrop_path}`} alt="" />
                       <h2 className='movie-title'>{movie_details.original_title}</h2>
                    </div>
                    <div className='movie details'>
                       <p className='overview'>Overview</p>
                       <p className='overview-details'>{movie_details.overview}</p>
                    </div>
                </div>
            )
        }
        
}

export default MovieDetails