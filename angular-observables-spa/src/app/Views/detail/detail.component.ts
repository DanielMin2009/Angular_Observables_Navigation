import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  message: string = 'Message!!';
  observableMessageSubscription: Subscription;

  constructor( public _dataService: DataService ) { }

  ngOnInit(): void {

    // this._dataService.observableMessage$.subscribe( text => {
    //     console.log('Child Component | Detail', text );
    //     this.message = text;
    // });

    // this._dataService.observableMessage$.emit('Child response II');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy Detail (child)');
    // this.observableMessageSubscription.unsubscribe();
  } 

}
