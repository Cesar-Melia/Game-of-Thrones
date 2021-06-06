import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/Services/characters.service';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss'],
})
export class ChronologyPageComponent implements OnInit {
  characters: any;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      console.log(charactersData);

      this.characters = charactersData.sort((a: any, b: any) => {
        if (a.age[0] > b.age[0]) {
          return 1;
        }
        if (a.age[0] < b.age[0]) {
          return -1;
        }
        return 0;
      });

      console.log(this.characters);
    });
  }
}
