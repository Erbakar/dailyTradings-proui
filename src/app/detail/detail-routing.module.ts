import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DetailComponent,
        data: {
          title: 'Home'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule { }
