import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.styl']
})
export class VideoComponent implements OnInit {
  api:VgAPI;

  constructor() { }

  ngOnInit() {
    // Animate Square Video
    document.getElementById("video-container").addEventListener("click", function() {
      this.classList.toggle("is-active");
    });
  }

  onPlayerReady(api:VgAPI)
  {
    this.api = api;

    //this.api.getDefaultMedia().subscriptions.
  }

}
