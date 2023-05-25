import MovieList from "../../components/movie-list/movie-list.component"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
function Home(){
    
    const {data,status,error,isPaused} = useQuery({queryKey:['homePage'],
            queryFn:async ()=>{
                const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d5f1019dac07311575395bb62a076af`)
                const results = res.data.results;
                return results
            }})
    
    if(status == 'loading'){
        return(
            <div className="home-page">
                {console.log('loading',status)}
                <p className="loading">Loading</p>
            </div>
        )
    }
    
    else if(status == 'error'){
       return <div className="home-page">
             {console.log('error',status)}
                <p className="error loading" >Erorr: {error.message}</p>
            </div>
    }
    return(
        <div className="home-page">
            {console.log('sucess',status)}
            <MovieList movies={data}/>
        </div>
    )
}

export default Home