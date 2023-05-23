import './movie-billboard.styles.css'
import { imageUrlGenerator } from '../../URL-generators/url-genrators'
import { useNavigate } from 'react-router-dom'
function MovieBillboard({movie}){
    const navigate = useNavigate()
    const movieID = movie.id
    return (
            <div className="movie-preview-container" onClick={()=>{navigate('/movie-details/'+movieID)}}>
                <p className='backdrop'></p>
                <video poster={imageUrlGenerator(movie.backdrop_path)} src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' autoPlay>
                </video>
            </div>
        )
}

export default MovieBillboard