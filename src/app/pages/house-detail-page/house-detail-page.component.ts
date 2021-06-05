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
  
  constructor(private houseService: HousesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const houseName = params.get('houseName');
      console.log(houseName)    

    this.houseService.getHouse(this.house).subscribe(house => {
      this.house = house;
    });    
  });
}
}