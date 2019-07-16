import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './comingsoon/comingsoon.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Overview',
    pathMatch: 'full'
  },
  {
    path: 'Overview',
    component: ComingSoonComponent,
    data: {title: 'Resources Overview'}
  },
  {
    path: 'NPMpackages',
    component: ComingSoonComponent,
    data: {title: 'NPM Packages'}
  },
  {
    path: 'DesignPatterns',
    component: ComingSoonComponent,
    data: {title: 'Design Patterns / Examples'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
