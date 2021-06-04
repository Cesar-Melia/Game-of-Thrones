import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/Services/characters.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {

  character: any;

  constructor( private characterService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nameCharacter = params.get('nameCharacter');
      console.log('id --> ', nameCharacter);

      this.characterService.getCharacter(nameCharacter).subscribe(character => {
        console.log('paco --> ', character);
        this.character = character;
      });
    });
  }
}
