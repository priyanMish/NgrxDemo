import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './Models/movie';
import { DataService } from './Service/data.service';
import { addMovies, getMovies,changeUser }  from "./Store/Actions/movie.action"
import * as L from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'movieApp';
  user:string = "Priyanshu"
 
  constructor(private dataService: DataService, private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
  }

  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
  }

  changeUser():void{
    this.store.dispatch(changeUser({user:this.user}))
  }
}
