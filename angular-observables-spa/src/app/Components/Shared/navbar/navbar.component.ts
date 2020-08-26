import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  message: string = 'Navbar!!'; 

  constructor( private _dataService: DataService ) { }

  ngOnInit(): void {
    this._dataService.observableMessage$
    .subscribe( text => {
      this.message = text;
      console.log('navabar: ', text);
    });
  }

}
