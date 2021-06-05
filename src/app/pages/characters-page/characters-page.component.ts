import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/Services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  characters: any;
  titleClass: string = 'c-gallery__title--hide';

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      console.log(charactersData);
      this.characters = charactersData;
    });
  }
}
