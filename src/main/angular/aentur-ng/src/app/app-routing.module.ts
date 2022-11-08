import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesUtils } from './routes.utils';
import { WorldMapComponent } from './world-map/world-map.component';

const routes: Routes = RoutesUtils.getRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
