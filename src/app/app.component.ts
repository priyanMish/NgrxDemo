import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './Models/movie';
import { DataService } from './Service/data.service';
import { addMovies, getMovies,changeUser }  from "./Store/Actions/movie.action"
import * as L from 'leaflet';
import { BehaviorSubject } from 'rxjs';


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
  earningChange :number=  0
  nameChange:string = ''
 
  constructor(private dataService: DataService, private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
  }

  addNewMovies(): void {
    this.newMovie.name = this.nameChange
    this.newMovie.earning = this.earningChange
   
    this.store.dispatch(addMovies(this.newMovie));
    console.log(this.newMovie, "NewMovie")
  }

  changeUser():void{
    this.store.dispatch(changeUser({user:this.user}))
  }
  onEarningChange(event:any){
    this.earningChange = event.target.value
  }

  onNameChange(event:any){
    this.nameChange = event.target.value
  }
}
