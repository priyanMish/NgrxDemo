import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../Service/marker.service';
import { MarkerService2 } from '../marker2.service';



const iconRetinaUrl = "../../assets/marker-icon-2x.png";
const iconUrl = '../../assets/marker-icon.png';
const shadowUrl = '../../assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-mapleaf-let',
  templateUrl: './mapleaf-let.component.html',
  styleUrls: ['./mapleaf-let.component.css']
})
export class MapleafLetComponent implements AfterViewInit {
  // map = L.map('map').setView([51.505, -0.09], 13);
  private map:any;
  

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  constructor(private markerService:MarkerService, private markerService2:MarkerService2) { }
//  ngOnInit(): void {
//   // this.markerService.makeCircle().subscribe((res)=>console.log(res,"init"))
//   this.markerService2.makeCircle().subscribe((res)=>console.log(res,"init2"))
//  }
  ngAfterViewInit(): void {
    this.initMap();
    this.markerService2.makeCapitalMarkers(this.map)
    // console.log("hello")
    // this.markerService.makeCircle().subscribe((res)=>console.log(res,"init"))
    this.markerService2.makeCircle().subscribe((res)=>console.log(res,"init2"))
  }

}
