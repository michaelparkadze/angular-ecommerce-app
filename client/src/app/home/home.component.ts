import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = [
    {
      path: '../../assets/1.jpg',
    },
    {
      path: '../../assets/2.jpg',
    },
    {
      path: '../../assets/3.jpg',
    },
    {
      path: '../../assets/4.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
