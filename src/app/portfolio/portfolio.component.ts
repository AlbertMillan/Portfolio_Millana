import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { VideoComponent } from '../video/video.component'

declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.styl']
})

export class PortfolioComponent implements OnInit {
  @ViewChild(VideoComponent) private video: VideoComponent;


  constructor() { 
  }

  ngOnInit() {
    
  }

  onClickMe() {
    document.getElementById("video-container").classList.toggle("is-active");
    this.video.playVideo();
  //   $(".dragon-video").click(function(){
  //     document.getElementById("video-container").classList.toggle("is-active");
  //     this.video.playVideo();
  //   });
  }

}
