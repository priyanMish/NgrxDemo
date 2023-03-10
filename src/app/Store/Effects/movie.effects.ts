import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EmptyError } from "rxjs";
import { catchError, exhaustMap,map,concatMap,tap } from "rxjs/operators";
import { DataService } from "src/app/Service/data.service";
import { getMovies,addMoviesSuccess,addMovies, getMoviesSuccess } from "../Actions/movie.action";

@Injectable()
export class MovieEffects{
loadMovies$ = createEffect(()=>
this.action$.pipe(
    ofType(getMovies),
    exhaustMap(() =>
    this.dataService.getMovies().pipe(
        map((movies)=>getMoviesSuccess({movies})),
        // catchError(()=> )
        // catchError(()=> EmptyError)
    )
    )
))

addMovies$ = createEffect(()=>
this.action$.pipe(
    ofType(addMovies),
    tap((movie)=>console.log(movie)),
    concatMap(({movie}) =>
    this.dataService.addMovies(movie).pipe(
        map((movie)=>addMoviesSuccess(movie)),
    )
    )
))

constructor(private action$:Actions, private dataService:DataService){
}


}