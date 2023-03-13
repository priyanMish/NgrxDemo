import { createSelector } from "@ngrx/store";
import { MovieState } from "../Reducers/movie.reducers";
import { Movie } from "src/app/Models/movie";




export const movieSelector = createSelector(
    (state:MovieState)=> state.movies,
    (movies:ReadonlyArray<Movie>)=> movies
)