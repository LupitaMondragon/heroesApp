import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';
import { HeroesModule } from './heroes/heroes.module';
import { HomeComponent } from './heroes/pages/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes=[
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path:'heroes',
    loadChildren:()=>import('./heroes/heroes.module').then(h=>HeroesModule)
  },
   {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    // component:ErrorPageComponent
    redirectTo:'404'
  }
 
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
