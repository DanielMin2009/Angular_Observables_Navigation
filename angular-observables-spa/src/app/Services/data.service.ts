import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  observableMessage$ = new EventEmitter<string>();

  constructor() { }

  

}
