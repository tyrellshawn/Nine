import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGaurd } from './auth/auth-gaurd.service';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'social', canActivate: [AuthGaurd], loadChildren: './social/social.module#SocialModule'},
  {path: 'iou', canActivate: [AuthGaurd], loadChildren: './iou/iou.module#IOUModule'},
  {path: 'financial', canActivate: [AuthGaurd], loadChildren: './financial/financial.module#FinancialModule'},
  {path: 'transfer', canActivate: [AuthGaurd], loadChildren: './transfer/transfer.module#TransferModule'},
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
