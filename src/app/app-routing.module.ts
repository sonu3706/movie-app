import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from './home/home.module';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
