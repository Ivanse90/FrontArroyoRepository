import { Component } from '@angular/core';
import { ArroyoService } from '../../services/points.service';

@Component({
  selector: 'app-arroyo-area',
  templateUrl: './arroyo-area.component.html',
  styleUrls: ['./arroyo-area.component.css']
})
export class ArroyoAreaComponent {
  constructor( private arroyoService :ArroyoService){}

  public tweetA : any[] =[];


  createAreatList(){


  this.arroyoService.searchArroyoArea().subscribe( area =>{
    this.tweetA = area;
  })

  }
}
