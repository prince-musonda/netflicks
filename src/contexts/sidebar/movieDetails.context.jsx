import { createContext } from "react";
import { useState } from "react";

export const MovieDetailsContext = createContext({
    movieDetailsState :{},
    setMovieDetailsState: ()=>null
})

export const MovieDetailsProvider =(children)=>{
    const {movieDetailsState, setMovieDetailsState} = useState({showDetails:false,movieID:null});
    const value = {movieDetailsState,setMovieDetailsState}
    return(
    <MovieDetailsContext.Provider value={value}>
        {children}
    </MovieDetailsContext.Provider>
    )
} 