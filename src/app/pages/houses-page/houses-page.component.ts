import { Component, OnInit } from '@angular/core';
import { FinderService } from 'src/app/shared/Services/finder.service';
import { HousesService } from 'src/app/shared/Services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss'],
})
export class HousesPageComponent implements OnInit {
  houses: any;
  message: any;

  constructor(
    private housesService: HousesService,
    private finderService: FinderService
  ) {}

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((housesData: any) => {
      this.houses = housesData.filter((house: any) => house.logoURL);

      this.finderService.currentMessage.subscribe((message) => {
        this.houses = housesData.filter((house: any) => house.logoURL);
        this.houses = this.houses.filter((house: any) =>
          house.name.toLowerCase().includes(message.toLowerCase())
        );
      });
    });
  }
}
