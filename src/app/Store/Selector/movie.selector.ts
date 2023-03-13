import { createSelector } from "@ngrx/store";
import { MovieState } from "../Reducers/movie.reducers";
import { Movie } from "src/app/Models/movie";




export const movieSelector = createSelector(
    (state:MovieState)=> state.movies,
    (movies:ReadonlyArray<Movie>)=> movies
)


export const movieUserSelector = createSelector(
    (state:MovieState)=> state.movies,
    (state:MovieState)=> {
       console.log(state.user, "StateUSer")
       return state.user},
    (movies:ReadonlyArray<Movie>,user:Readonly<String>)=>{
            console.log(movies)
            return movies.filter((movie: Movie) => movie.userName === user);
    } 
    
)


export const movieExpenseSelector = createSelector(
    (state:MovieState)=> state.movies,
    (state:MovieState)=> {
       console.log(state.user, "StateUSer")
       return state.user},
    (movies:ReadonlyArray<Movie>,user:Readonly<String>)=>{
            console.log(movies)
            return movies.filter((movie: Movie) => movie?.earning > 2000);
    } 
    
)
