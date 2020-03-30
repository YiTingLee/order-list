import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'order-list';

  constructor(private appService: AppService) {}

  ngOnInit() {
    console.dir(this.appService.getOrderList());
  }
}
