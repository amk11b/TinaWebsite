// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }
];
