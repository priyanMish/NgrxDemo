import { createAction,props } from "@ngrx/store";
import {Movie} from '../../Models/movie'


export const getMovies = createAction("[Movie] Get Movie")
export const getMoviesSuccess = createAction("[Movie] Get Movie Success", 
// (movies:ReadonlyArray<Movie>)=>movies)
props<{movies:ReadonlyArray<Movie>}>())

export const addMovies = createAction("[Movie] Add Movie", 
(movie:Movie)=>({movie}))

export const addMoviesSuccess = createAction("[Movie] Add Movie Success",(movie:Movie)=>({movie}))

export const deleteMovie = createAction('[Movie] Delete Movie',props<{movie:Movie}>())
export const deleteMovieSuccess = createAction('[Movie] Delete Movie Success' ,props<{movie:Movie}>())
export const changeUser = createAction('[Movie] Change User', props<{user:string}>())