import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/Services/characters.service';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss'],
})
export class ChronologyPageComponent implements OnInit {
  characters: any;
  charactersFiltered: any;
  age: number = 0;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      this.characters = charactersData.filter((character: any) => {
        return character.age && character.age.age;
      });

      this.characters = this.characters.sort((a: any, b: any) => {
        if (a.age.age > b.age.age) {
          return 1;
        }
        if (a.age.age < b.age.age) {
          return -1;
        }
        return 0;
      });

      this.charactersFiltered = [...this.characters];
    });
  }

  ageFilter() {
    this.charactersFiltered = [...this.characters];
    if (this.age) {
      this.charactersFiltered = this.characters.filter(
        (character: any) => character.age.age == this.age
      );
    }
  }
}
