import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarkerService2 {
  capitals: string = '/assets/data/usa-capitals.geojson';


  constructor(private http:HttpClient) { }

  makeCapitalMarkers(map: L.Map): void { 
  this.http.get(`https://raw.githubusercontent.com/do-community/angular-leaflet-example/master/src/assets/data/usa-capitals.geojson`).subscribe((res:any)=>{
    for(let c of res.features){
      let lon = c.geometry.coordinates[0]
      let lat = c.geometry.coordinates[1]
      let marker = L.marker([lat,lon])
      marker.addTo(map)
    }
  }, (error)=>console.log(error))
  }

  makeRoundMakrers():Observable<any>{
    return this.http.get(`/assets/data/usa-capitals.geojson`)
  }

  makeCircle():Observable<any>{
    return this.http.get(`../assets/data/data.json`)
  }

}
