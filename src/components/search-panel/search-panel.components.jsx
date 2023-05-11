import './search-panel.styles.css'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import left_arrow_icon from '../../assets/left-arrow-icon.svg'
import axios from 'axios'

function SearchPanel() {
    const navigate = useNavigate()

    async function searchForMovies(movieName){
        const res = axios.get(`https://api.themoviedb.org/3/search/movies?api_key=9d5f1019dac07311575395bb62a076af&query=${movieName}`)
        const results = (await res).data.results
    } 

    async function searchForTvShows(tvShowName){
        const res = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=9d5f1019dac07311575395bb62a076af&query=${tvShowName}`)
        const results = (await res).data.results
    }

    const {data:moviesData,status:moviesFetchingStatus} = useQuery({queryKey:['movies search'],queryFn:searchForMovies})
    const {data:tvShowsData,status:tvShowsFetchingStatus} = useQuery({queryKey:['movies search'],queryFn:searchForMovies})

    function handleOnTextChange(){

    }
    return(
        <div className='search-panel'>
            <div className='search-panel-top'>
                <button onClick={()=>{navigate(-1)}}><img src={left_arrow_icon} alt="go back"/></button>
                <input type="text" onChange={''} placeholder='search for movies and TV shows'/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SearchPanel