import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArroyoPoint } from '../interfaces/pointsArroyos';
import { ArroyosAreas } from '../interfaces/areaArroyos';

@Injectable({providedIn: 'root'})
export class ArroyoService {

  private apiUrl:string = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }


  searchArroyoPoint():Observable<ArroyoPoint[]>{
    return this.http.get<ArroyoPoint[]>(`${this.apiUrl}/data`);
  }

  searchArroyoArea():Observable<ArroyosAreas[]>{
    return this.http.get<ArroyosAreas[]>(`${this.apiUrl}/dataDic/`);
  }
}
