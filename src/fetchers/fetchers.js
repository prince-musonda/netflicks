import axios from "axios";

export async function fetchMoviesWithGenre(pageParams,genresArray){
    const choiceOfGenres = genresArray.join('%2C') // special url encoding for the comma character
    const res =await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d5f1019dac07311575395bb62a076af&language=en-US&with_genres=${choiceOfGenres}&page=${pageParams}`)
    console.log(pageParams)
    return res.data

}