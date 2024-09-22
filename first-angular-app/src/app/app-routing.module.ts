import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page.component';

const routes: Routes = [
  { path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: '', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
