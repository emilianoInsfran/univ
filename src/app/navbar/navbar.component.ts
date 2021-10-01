import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
// import { UtilsService } from '../../app/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  idResto:number;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
    // this.idResto =this.utils.getIdResto().resto.id_admin;
    this.idResto =1;
  }

  gotoPage(codigo :any ,page:any){
    console.log(codigo); 
    this.route.navigate([`${page}`])
  }

}
