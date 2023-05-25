import './search-panel.styles.css'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import left_arrow_icon from '../../assets/left-arrow-icon.svg'
import { searchForMovies, searchForTvShows } from '../../fetchers/fetchers'
import { useState } from 'react'
import MovieList from '../movie-list/movie-list.component'


function SearchPanel() {
    const navigate = useNavigate()
    const [showTvShows, setShowTvShows] = useState(false)
    const [searchWord,setSearchWord] = useState('')

    const {data:moviesData,status:moviesFetchingStatus} = useQuery(['search movies',searchWord],()=>searchForMovies(searchWord),{enabled:searchWord.length > 0})
    const {data:tvShowsData,status:tvShowsFetchingStatus} = useQuery(['search tv shows',searchWord],()=>searchForTvShows(searchWord),{enabled:searchWord.length > 0})

    function handleOnTextChange(event){
        setSearchWord(event.target.value)
    }
    return(
        <div className='search-panel'>
            <div className='search-panel-top'>
                <button onClick={()=>{navigate(-1)}}><img src={left_arrow_icon} alt="go back"/></button>
                <input type="text" onChange={handleOnTextChange} placeholder='search for movies and TV shows'/>
            </div>
            <div className='buttons-container'>
                <button onClick={()=>{setShowTvShows(false)}} className={showTvShows? null : 'selected-category-btn'}>
                    Movies
                </button>
                <button onClick={()=>{setShowTvShows(true)}} className={showTvShows? 'selected-category-btn' : null}>
                    TV Shows
                </button>
            </div>
           {
           moviesData ?
            <MovieList movies={showTvShows? tvShowsData : moviesData}/>
                : 
            searchWord.length > 0?  <p className='loading'>searching ...</p>
                : null
           }
        </div>
    )
}

export default SearchPanel