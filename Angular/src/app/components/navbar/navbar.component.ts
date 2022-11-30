import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private obtenerDatos:PortfolioService){}


    ngOnInit(): void {
        this.obtenerDatos.obtenerDatos();
    }

}
