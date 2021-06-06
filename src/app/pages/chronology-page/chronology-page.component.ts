import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/Services/characters.service';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss'],
})
export class ChronologyPageComponent implements OnInit {
  charactersFiltered: any;

  charactersAge: any[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      this.charactersFiltered = charactersData.filter((character: any) => {
        return character.age && character.age.age;
      });

      this.charactersFiltered = this.charactersFiltered.sort(
        (a: any, b: any) => {
          if (a.age.age > b.age.age) {
            return 1;
          }
          if (a.age.age < b.age.age) {
            return -1;
          }
          return 0;
        }
      );

      console.log('paco -->', this.charactersFiltered);
    });
  }
}
