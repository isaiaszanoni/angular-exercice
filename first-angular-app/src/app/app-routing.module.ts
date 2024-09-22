import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './about-me/first-page.component';
import { ReadMoreComponent } from './about-me/read-more/read-more.component';

const routes: Routes = [
  {
    path: 'about-me', 
    component: FirstPageComponent,
    children : [
      { path: 'read-more', component: ReadMoreComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
