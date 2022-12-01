import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  miPortfolio:any;
  constructor(private obtenerDatos:PortfolioService){}


    ngOnInit(): void {
        this.obtenerDatos.obtenerDatos().subscribe(data =>{
          console.log(data);
          this.miPortfolio=data;
        });
    }

}
