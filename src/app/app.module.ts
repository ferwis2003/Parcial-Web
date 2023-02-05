import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoComponent } from './componentes/foto/foto.component';
import { ZodiacoComponent } from './componentes/zodiaco/zodiaco.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    ZodiacoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
