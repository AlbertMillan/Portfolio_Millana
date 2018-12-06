import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'myPortfolio';

  constructor() {

  }

  scrollTo(){
    // window.scroll(0, this.findPos(document.getElementById("sheit")));
    document.getElementById("about").scrollIntoView();
  }

  findPos(obj) {
    var curtop = 0;
    if( obj.offsetParent )
    {
      do
      {
        curtop += obj.offsetTop;
      } while( obj = obj.offsetParent)
    }
    return [curtop];
  }
}
