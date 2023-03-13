import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './app.material.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './Service/in-memory.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { movieReducer, userReducer } from './Store/Reducers/movie.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './Store/Effects/movie.effects';
import { MapleafLetComponent } from './mapleaf-let/mapleaf-let.component';
import {MarkerService} from './Service/marker.service'
import { MarkerService2 } from './marker2.service';
// import { movieReducer } from './Store/Reducers/movie.reducers';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MapleafLetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    StoreModule.forRoot({movies:movieReducer, user:userReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [MarkerService,MarkerService2],
  bootstrap: [AppComponent],
})
export class AppModule {}
