import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-of-thrones';
  langs: string[] = [];


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('en');
    this.translate.addLangs(['en', 'es']);
  this.langs = this.translate.getLangs();
  this.translate.stream('HELLO')
  .subscribe((res: string) => {
  });
  this.translate.stream('HOME')
  .subscribe((res: string) => {
  });
  }
  changeLang(lang: string){
    this.translate.use(lang);
    }
}
