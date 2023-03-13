import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { DataService } from '../Service/data.service';
import { MovieState } from '../Store/Reducers/movie.reducers';
import { Store,select } from '@ngrx/store';
import { deleteMovie } from '../Store/Actions/movie.action';
import { movieSelector } from '../Store/Selector/movie.selector';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input()
  movies: Movie[] = [];

  // movies$ = this.store.select('movies')
  movies$ = this.store.pipe(select(movieSelector))
  constructor(private dataService: DataService,  private store:Store<MovieState>) {}

  ngOnInit(): void {}

  deleteMovie(movie:Movie){
    console.log(movie)
    this.store.dispatch(deleteMovie({movie}))
  }
}
