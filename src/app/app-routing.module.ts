import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'social', loadChildren: './social/social.module#SocialModule'},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
