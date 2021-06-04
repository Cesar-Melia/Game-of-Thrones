import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/shared/Services/houses.service';

@Component({
  selector: 'app-house-detail-page',
  templateUrl: './house-detail-page.component.html',
  styleUrls: ['./house-detail-page.component.scss']
})
export class HouseDetailPageComponent implements OnInit {

  house: any;
  houseName: any

  constructor(private housesService: HousesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.houseName = params.get('houseName');
      console.log(this.houseName);
    })  

    this.housesService.getHouse(this.houseName).subscribe((houseData: any) => {
      
      this.house = houseData;
      console.log(houseData);
    })    
  }
}