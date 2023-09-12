import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table'

import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { MostrarClienteComponent } from './components/cliente_appleunig/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente_appleunig/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente_appleunig/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/cliente_appleunig/eliminar-cliente/eliminar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    MostrarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent
  ],
  imports: [
    TableModule,
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
