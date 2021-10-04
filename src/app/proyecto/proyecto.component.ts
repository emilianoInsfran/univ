import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../utils.service";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
  proyectos:any = [{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER1',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER2',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER3',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER4',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER5',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER6',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER7',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER8',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },{
    imagen:'../../assets/Uber-Logo.png',
    nombreProyecto:'UBER9',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime quisquam laboriosam alias eveniet aspernatur.    Ad, a autem magni quos ab nostrum architecto, sed alias fugit commodi odio nobis voluptatibus?',
    objetivo:'El sistema ermitira la asistencia de un chofer para el cliente que lo necesite precentado la ubicación en todo momento',
    beneficios:'Los clientes conoceran la descripción del conductor y el numero de patente del auto',
    alcance:'El conducto se limita a los pedidos a travez de la aplicación'
  },]
  constructor(private utilsService : UtilsService, private route:Router) { }

  ngOnInit(): void {
  }

  gotoPage(url:any,info:any) {
    console.log(url,info);
    this.utilsService.setData(info);
    this.route.navigate([url]);
  }


}
