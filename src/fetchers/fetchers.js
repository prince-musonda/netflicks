import axios from "axios";

export async function fetchMoviesWithGenre(pageParams   ,genresArray){
    try{
        const choiceOfGenres = genresArray.join('%2C') // special url encoding for the comma character
        const res =await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d5f1019dac07311575395bb62a076af&language=en-US&with_genres=${choiceOfGenres}&page=${pageParams}`)
        return res.data
    }catch(error){
        throw error
    }

}

export async function fetchMovieById(movieID){
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=9d5f1019dac07311575395bb62a076af&language=en-US`)
        const data = res.data;
        return data
    }catch(error){
         // react query doesn't catch errors unless explicitly thrown by the fetch function
        throw error
    }
    
}

export async function fetchMovieTrailer(movieID){
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=9d5f1019dac07311575395bb62a076af&language=en-US`)
        const data = res.data
        const trailer_object = data.results.filter(video_object =>{
            if(video_object.site==='YouTube' && video_object.type === 'Trailer'){
                return true
            }
            return false
    
        })
        const trailerURL = `https://youtube.com/watch?v=${trailer_object[0].key}`
        return trailerURL
    }catch(error){
        // react query doesn't catch errors unless explicitly thrown by the fetch function
        throw error
    }
}

export async function fetchRecommededMovies(movieID){
    try{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=9d5f1019dac07311575395bb62a076af`)
    const recommededMovies = res.data.results
    return recommededMovies
    }catch(error){
         // react query doesn't catch errors unless explicitly thrown by the fetch function
        throw error
    }
}