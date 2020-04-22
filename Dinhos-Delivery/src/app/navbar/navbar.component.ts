import { Component, OnInit } from '@angular/core';
import { faTruck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
faTruck = faTruck

  constructor() { }

  ngOnInit(): void {
  }

}
