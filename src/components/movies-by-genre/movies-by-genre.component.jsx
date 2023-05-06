import { useSearchParams } from "react-router-dom";
import MovieList from "../movie-list/movie-list.component";
import { fetchMoviesWithGenre } from "../../fetchers/fetchers";
import { useInfiniteQuery } from "@tanstack/react-query";
import './movies-by-genre.styles.css'
import { useState } from "react";


function MoviesByGenre(){
    //get the optional parameters(i.e genres) from the url using useSearchParams
    const [searchParams,setSearchParams] = useSearchParams()
    const movieGenre1 = searchParams.get('id1')
    const movieGenre2 = searchParams.get('id2')
    const {data,fetchNextPage,hasNextPage,isFetchingNextPage,isLoading,isError,error} = useInfiniteQuery({
        queryKey:[`movies by genre ${movieGenre1} ${movieGenre2}`],
        queryFn:async ({pageParam=1})=>{
        const data = await fetchMoviesWithGenre(pageParam,[movieGenre1,movieGenre2])
        return data
        },
        getNextPageParam: (lastPage)=>{
            if(lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1
            }
            else return undefined
        }
    })
        
        if(isLoading){
            return <p className="loading">Loading</p>
        }else if(isError){
            return <p className="loading">Error:{error}</p>
        }else{
            return(
                <div className="movies-by-genre-container">
                    {
                        data.pages.map((page,index)=>{
                        return <MovieList movies={page.results} key={index}/>})
                    }
                    {
                        hasNextPage &&
                        <button className="load-more-btn" onClick={()=>{fetchNextPage()}}>Load more</button>
                    }
                </div>
                
            )
        }
}

export default MoviesByGenre