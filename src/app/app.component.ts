import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'game-of-thrones';

  detailPage: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (window.location.href.includes('characters/' || 'houses/')) {
        this.detailPage = true;
      } else {
        this.detailPage = false;
      }

      console.log('detailPage = ' + this.detailPage);
    });
  }
}
