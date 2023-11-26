import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';


(mapboxgl as any).accessToken = 'pk.eyJ1IjoiaXZhbnMyMCIsImEiOiJja2N5MXRjMXQwNXQ0MnN0aXM3M29qZ2NmIn0.s051qIVjSMPxWLj5WgpELA';

import { MapsRoutingModule } from './maps-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ArroyoPointPageComponent } from './pages/arroyo-point/arroyo-point-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ArroyoAreaComponent } from './pages/arroyo-area/arroyo-area.component';


@NgModule({
  declarations: [
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    ArroyoPointPageComponent,
    ArroyoAreaComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    HttpClientModule
  ]
})
export class MapsModule { }
