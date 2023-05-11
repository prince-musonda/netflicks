import './movie-details.style.css'
import { fetchMovieById } from '../../fetchers/fetchers'
import { fetchMovieTrailer } from '../../fetchers/fetchers'
import useSWR  from 'swr'
import close_icon from '../../assets/x_icon.svg'

function MovieDetails({movieID}){
        const {data:movie_details,error,isLoading} = useSWR(movieID,fetchMovieById,{
            revalidateOnFocus:false,
        })
        const {data:trailer_url} = useSWR(movieID,fetchMovieTrailer)
        if(isLoading){
            return(
            <div className='movie-details-container'> 
                <button><img src={close_icon} alt="close window"/></button>
                <p className='loading'>loading</p>
            </div>
            )
        }
        else if(error){
            console.log(error)
            return(
                <div className='movie-details-container'>
                    <button><img src={close_icon} alt="close window"/></button> 
                    <p className='loading'>error</p>
                </div>
                )
        }
        else{
            return(
                <div className='movie-details-container'>
                    <button className='close-btn'><img src={close_icon} alt="close window"/></button>
                    <div className='movie-image-container'>
                        <img src="" alt="" />
                    </div>
                </div>
            )
        }
        
}

export default MovieDetails