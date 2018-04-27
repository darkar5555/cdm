import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas de la aplicacion
import { APP_ROUTES } from './app.routes';

//Angular material
import 'hammerjs';
import { MaterialModule } from './material/material.module';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
