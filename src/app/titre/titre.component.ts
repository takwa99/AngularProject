import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {

  PathLogo :string = "assets/img/logo.png"; 
  constructor() { }

  ngOnInit(): void {
  }

}
