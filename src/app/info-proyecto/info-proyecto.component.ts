import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../utils.service";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-info-proyecto',
  templateUrl: './info-proyecto.component.html',
  styleUrls: ['./info-proyecto.component.scss']
})
export class InfoProyectoComponent implements OnInit {

  detalleProyecto:any;

  constructor(private utilsService : UtilsService, private route:Router) { }

  ngOnInit(): void {
    console.log("datos del proyecto", this.utilsService.getData());
    if(this.utilsService.getData() != undefined) this.detalleProyecto = this.utilsService.getData();
    else this.route.navigate(['/']);
  }




}
