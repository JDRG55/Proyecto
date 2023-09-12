import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/Models/cliente_appleunig';
import { Router } from '@angular/router';


@Component({
  selector: 'mostrar-cliente.component',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent implements OnInit {
  public clientes:ClienteI[] = [
    {id:1,
nombre: "julian",
direccion: "calle 2",
telefono: "12365488",
correo: "jd@hghs.com"},
{id:2,
  nombre: "Jose Tello",
  direccion: "calle 49",
  telefono: "487842354",
  correo: "jt@hghs.com"},
  {id:3,
    nombre: "Jose Mindiola",
    direccion: "calle 70",
    telefono: "7645135443",
    correo: "jm@hghs.com"},
    {id:4,
      nombre: "Allenmar Sierra",
      direccion: "calle 14",
      telefono: "785454658953",
      correo: "as@hghs.com"},
  ]
  public displayedColumns: string[] = ["id", "nombreCliente", "direccionCliente", "telefonoCliente", "correoCliente","Acciones"]
  constructor(
   
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  
}