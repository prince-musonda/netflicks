import { Routes,Route } from 'react-router-dom'
import './App.css'
import NavigationAndSideBar from './routes/navigationAndSideBar/navigationAndSideBar'
import Search from './routes/search/search'
import Home from './routes/home/home'
import MoviesByGenre from './components/movies-by-genre/movies-by-genre.component'
import MovieDetails from './routes/movieDetails/movieDetails.component'

const App = ()=>{
  return (
          
    <Routes>
    <Route path='/' element={<NavigationAndSideBar/>}>
      <Route index element={<Home/>}/>
      <Route path='genre/' element={<MoviesByGenre/>}/>
      <Route path='/movie-details/:movieID' element={<MovieDetails/>}/>
    </Route>
    <Route path='/search' element={<Search/>}/>
    
  </Routes>
  )
}

export default App