import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { FirstPageComponent } from './first-page.component';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
  declarations: [
    FirstPageComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
