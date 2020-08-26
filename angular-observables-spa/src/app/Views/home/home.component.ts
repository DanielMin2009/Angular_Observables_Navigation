import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _dataService: DataService ) { }

  ngOnInit(): void {
  }

  changeName() {
    this._dataService.observableMessage$.emit('Emitted Message from Observable')
  }

}
