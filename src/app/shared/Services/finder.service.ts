import { Injectable } from '@angular/core';
import { CharactersService } from './characters.service';
import { HousesService } from './houses.service';

@Injectable({
  providedIn: 'root',
})
export class FinderService {
  input: string = '';
  selectedItems: any[] = [];

  constructor(
    private charactersService: CharactersService,
    private housesService: HousesService
  ) {}
}
