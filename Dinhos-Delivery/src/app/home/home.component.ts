import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    image: string = "../assets/img/img1.jpg";
    image1: string = "../assets/img/img2.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
