import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  detailPage: boolean = false;

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    // if (window.location.href.includes("characters/" || "houses/" )) {
    //   console.log("Estas en detalle")
    
    // }
  }
}
