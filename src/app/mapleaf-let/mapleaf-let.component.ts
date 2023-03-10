import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapleaf-let',
  templateUrl: './mapleaf-let.component.html',
  styleUrls: ['./mapleaf-let.component.css']
})
export class MapleafLetComponent implements OnInit,AfterViewInit {
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
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

}
