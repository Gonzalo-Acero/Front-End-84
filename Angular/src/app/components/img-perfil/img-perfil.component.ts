import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-img-perfil',
  templateUrl: './img-perfil.component.html',
  styleUrls: ['./img-perfil.component.css']
})
export class ImgPerfilComponent implements OnInit {
  miPortfolio:any;
  constructor(private obtenerDatos:PortfolioService){}


    ngOnInit(): void {
        this.obtenerDatos.obtenerDatos().subscribe(data =>{
          console.log(data);
          this.miPortfolio=data;
        });
    }
}
