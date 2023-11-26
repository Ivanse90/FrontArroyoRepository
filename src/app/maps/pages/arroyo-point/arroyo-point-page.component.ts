import { ArroyosAreas } from '../../interfaces/areaArroyos';
import { Component } from '@angular/core';
import { ArroyoService  } from '../../services/points.service';



interface pointsT{
  tweet:string;
  direccion:string;
  latitud:string;
  longitud:string;

}



@Component({
  templateUrl: './arroyo-point-page.component.html',
  styleUrls: ['./arroyo-point-page.component.css']
})
export class ArroyoPointPageComponent {


  constructor( private arroyoService :ArroyoService){}

  public tweetP : any[] =[];



  createPointList(){


  this.arroyoService.searchArroyoPoint().subscribe( point =>{
    this.tweetP = point;
  })


  }
}
