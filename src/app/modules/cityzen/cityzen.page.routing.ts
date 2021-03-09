import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CreateCityzenComponent } from './views/create-cityzen/create-cityzen.component';
import { ListCityzenComponent } from './views/list-cityzen/list-cityzen.component'; 
import { UpdateCityzenComponent } from './views/update-cityzen/update-cityzen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cityzen/list',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'cityzen/list',
        component: ListCityzenComponent,
      } ,
      {
        path: 'cityzen/update/:id',
        component: UpdateCityzenComponent,
      } ,
      {
        path: 'cityzen/create',
        component: CreateCityzenComponent
      } 
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityzenPageRoutingModule {}
