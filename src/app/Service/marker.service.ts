import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
;

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '../../assets/data/usa-capitals.geojson';


  constructor(private http:HttpClient) { }

  makeCapitalMarkers(map: L.Map): void { 
  this.http.get(`../../assets/data/usa-capitals.geojson`).subscribe((res:any)=>{
    for(let c of res.features){
      let lon = c.geometry.coordinates[0]
      let lat = c.geometry.coordinates[1]
      let marker = L.marker([lat,lon])
      marker.addTo(map)
    }
  }, (error)=>console.log(error))
  }

  makeCircle(){
    return this.http.get(`../../assets/data/data.json`)
  }

}
