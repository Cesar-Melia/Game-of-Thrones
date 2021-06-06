import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinderService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    console.log('Service : ', message);
    this.messageSource.next(message);
  }
}
