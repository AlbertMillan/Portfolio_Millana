import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(){
    // window.scroll(0, this.findPos(document.getElementById("sheit")));
    document.getElementById("about").scrollIntoView();
  }

}
