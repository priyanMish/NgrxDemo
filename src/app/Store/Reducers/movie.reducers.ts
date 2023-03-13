import { createReducer,on } from "@ngrx/store";
import { Movie } from "src/app/Models/movie";
import { addMovies, deleteMovie, getMovies,getMoviesSuccess,addMoviesSuccess ,changeUser} from "../Actions/movie.action";



export interface MovieState{
    movies: ReadonlyArray<Movie>
    user:Readonly<String>
}

 const initialState: ReadonlyArray<Movie>=[];

 export const movieReducer = createReducer(
    initialState,
    on(getMoviesSuccess,(state,{movies})=>[...movies]),
    on(addMoviesSuccess, (state,{movie})=>[...state, movie]),
    on(deleteMovie, (state,{movie})=>{
     return [...state.filter((item)=>item!==movie)]
    }
    )
 )
 const initialUserSate = 'Priyanshu';
 export const userReducer = createReducer(
   initialUserSate,
   on(changeUser, (state, { user }) => user)
 );