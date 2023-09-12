import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarClienteComponent } from './components/cliente_appleunig/mostrar-cliente/mostrar-cliente.component';
import { EliminarClienteComponent } from './components/cliente_appleunig/eliminar-cliente/eliminar-cliente.component';
import { CrearClienteComponent } from './components/cliente_appleunig/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente_appleunig/actualizar-cliente/actualizar-cliente.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: MostrarClienteComponent
  },
  {
    path: "addclientes",
    component: CrearClienteComponent
  },
  {
    path: "clientes/edit/:id",
    component: ActualizarClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
