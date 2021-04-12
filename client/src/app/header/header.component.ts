import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenHeight: any;
  screenWidth: any;
  isMenuOpen = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth > 768) this.isMobile = false;
    else this.isMobile = true;
    console.log(this.screenHeight, this.screenWidth);
  }

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {}

  onClickFunc() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
