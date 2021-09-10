import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './training/detail/detail.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    path: 'training/:id',
    component: DetailComponent,
    data: {
      title: 'Detail data dari route'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
