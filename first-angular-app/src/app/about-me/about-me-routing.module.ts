import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
    children: [
      { path: 'read-more', component: ReadMoreComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AboutMeRoutingModule { }
