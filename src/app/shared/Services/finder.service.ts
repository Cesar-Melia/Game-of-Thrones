import { Injectable } from '@angular/core';
import { CharactersService } from './characters.service';
import { HousesService } from './houses.service';

@Injectable({
  providedIn: 'root',
})
export class FinderService {
  items: any;
  selectedItems: any[] = [];

  constructor(
    private charactersService: CharactersService,
    private housesService: HousesService
  ) {}

  setItems(originalItems: any): void {
    this.items = originalItems;
    console.log('Ha entrado en setItems: ', this.items);
  }

  filterItems(inputText: string): any {
    this.selectedItems = this.items.filter((item: any) =>
      item.name.includes(inputText)
    );

    console.log('Esta es la seleccion : ', this.selectedItems);
  }

  returnSelectedItems(): any {
    return this.selectedItems;
  }
}
