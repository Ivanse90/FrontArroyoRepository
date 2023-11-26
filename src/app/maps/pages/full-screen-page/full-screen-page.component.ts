import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';
import { ArroyoService } from '../../services/points.service';
import * as mapboxgl from 'mapbox-gl';




interface MarkerC{
  color:string;
  marker:Marker;
}

interface Cord{
  lat:string;
  long:Marker;
}



@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{

  constructor( private arroyoService:ArroyoService){}

  @ViewChild('map') divMap? : ElementRef;
  public markers : MarkerC[] =[];
  public zoom: number = 13;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-74.78, 10.98);
  public currentCor: LngLat = new LngLat(-74.78, 10.98);



  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemnto HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });
    this.mapListeners();
    this.mapmarker();

  }

  ngOnDestroy():void{
    this.map?.remove();
  }

  mapListeners(){
    if(!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev)=>{
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev)=>{
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move',()=>{
      this.currentCenter = this.map!.getCenter();
    })

  }

  zoomIn(){
    this.map?.zoomIn();
  }
  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

  createMarker(){
    if(!this.map) return;


    this.arroyoService.searchArroyoPoint().subscribe( point =>{
      let data = [];
      let dataArray: number[][]= [];
      console.log(point);
      for(let arr=0;arr<point.length;arr++){
        this.currentCor = new LngLat(
          Number(point[arr]["longitud"]),
          Number(point[arr]["latitud"]));
        this.addMarker(this.currentCor);

      }

    })
  }

  addMarker(lnLat:LngLat, color:string = 'red'){
    if(!this.map) return;

    const marker = new Marker({color:color
    }).setLngLat(lnLat).addTo(this.map);



    this.markers.push({
      color:color,
      marker:marker
    });

  }


  flyTo(marker:Marker){
    this.map?.flyTo({
      zoom: 20,
      center: marker.getLngLat()
    })
  }

  mapmarker(){
    console.log("linea map");
    this.map?.on('load', ()=> {
      this.map?.addSource('ArroyoBqlla', {
        'type': 'vector',
        'url': 'mapbox://ivans20.clntjxvlm25og2olk5kqauwlc-46cv3'
        });

      this.map?.addLayer({
        'id': 'ArroyoBqlla',
        'type': 'fill',
        'source': 'ArroyoBqlla',
        'source-layer': 'ArroyoBqlla',
        'layout': {},
        'paint': {
        'fill-color': '#216AB8',
        'fill-opacity': 0.3,
        'fill-outline-color':'#072D56',
  }
      });
  });
}
}
