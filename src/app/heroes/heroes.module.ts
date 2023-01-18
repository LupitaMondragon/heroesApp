import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { MatButtonModule} from '@angular/material/button';
import { HeroesTarjetaComponent } from './components/heroes-tarjeta/heroes-tarjeta.component';
import { ImagenHPipe } from './pipes/imagen-h.pipe';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroesTarjetaComponent,
    ImagenHPipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    MatButtonModule
  ]
})
export class HeroesModule { }
