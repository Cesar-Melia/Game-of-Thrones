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
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
    this.translate.stream('HELLO')
    .subscribe((res: string) => {
    });
    this.translate.stream('HOME').subscribe((res: string) => {});
  }
  
  changeLang(lang: string){
    this.translate.use(lang);
    }

    changeToEnglish(){
      this.translate.use('en');
    }

  ngOnInit(): void {
  }

}



