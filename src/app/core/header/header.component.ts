import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  langs: string[] = [];


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('en');
    this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();
    this.translate.stream('HELLO')
    .subscribe((res: string) => {
    });
    this.translate.stream('HOME').subscribe((res: string) => {});
  }
  
  changeLang(lang: string){
    this.translate.use(lang);
    }

  ngOnInit(): void {
  }

}
