import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTaskComponent } from './views/list-task/list-task.component';
 

const routes: Routes = [
  {
    path: 'task/list',
    redirectTo: 'task/list',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'task/list/:id',
        component: ListTaskComponent,
      }  
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule {}
