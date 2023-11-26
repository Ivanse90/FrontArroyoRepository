import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ArroyoPointPageComponent } from './pages/arroyo-point/arroyo-point-page.component';
import { ArroyoAreaComponent } from './pages/arroyo-area/arroyo-area.component';

const routes: Routes = [
  {
    path:'',
    component: MapsLayoutComponent,
    children:[
      {path:'fullscreen',component:FullScreenPageComponent},
      {path:'points',component:ArroyoPointPageComponent},
      {path:'areas',component:ArroyoAreaComponent},
      {path:'**',redirectTo:'fullscreen'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
