import { Component, OnInit } from '@angular/core';

//declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.styl']
})
export class PortfolioComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    document.getElementById("dragon-video").addEventListener("click", function() {
      document.getElementById("video-container").classList.toggle("is-active");
    });
  }

}
