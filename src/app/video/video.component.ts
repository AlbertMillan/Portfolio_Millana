import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.styl']
})
export class VideoComponent implements OnInit {
  preload:string = 'auto';
  api:VgAPI;
  isPlaying:boolean = false;

  constructor() { }

  ngOnInit() { }

  onPlayerReady(api:VgAPI)
  {
    this.api = api;
  }

  // Play/Pause video whenever displayed or minimized
  playVideo()
  {
    if( !this.isPlaying )
    {
      this.api.getDefaultMedia().play();
      this.isPlaying = true;
    }
    else
    {
      this.api.getDefaultMedia().pause();
      this.isPlaying = false;
    }
      
  }

}
