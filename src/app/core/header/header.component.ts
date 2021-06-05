import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langs: string[] = [];
  detailPage: Boolean = false;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
    this.translate.stream('HELLO').subscribe((res: string) => {});
    this.translate.stream('HOME').subscribe((res: string) => {});

    router.events.subscribe((val) => {
      if (window.location.href.includes('characters/')) {
        this.detailPage = true;
      } else if (window.location.href.includes('houses/')) {
        this.detailPage = true;
      } else {
        this.detailPage = false;
      }
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  changeToEnglish() {
    this.translate.use('en');
  }

  goBack() {
    this._location.back();
  }

  ngOnInit(): void {}
}
