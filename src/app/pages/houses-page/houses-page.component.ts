import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/shared/Services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {

  houses: any;

  constructor(private housesService: HousesService) { }

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((housesData: any) => {
      console.log(housesData);
      
      this.houses = housesData.filter((house: any)=> house.logoURL) 
      console.log(this.houses.id);
    })
  }

}
