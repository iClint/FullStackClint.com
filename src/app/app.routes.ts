import { Routes } from '@angular/router';
import { AboutComponent } from './models/about/about.component';
import { BlogComponent } from './pages/about/blog/blog.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/about/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  // Add a wildcard route to handle unknown paths
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
