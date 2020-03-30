import { Order, OrderCodeEnum } from './app.model';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  orderList: Order[];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.orderList = this.appService.getOrderList();
  }

  getProccessingData(): Order[] {
    return this.orderList.filter(order => order.status.code === OrderCodeEnum.Processing || order.status.code === OrderCodeEnum.Success)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getFinishedData(): Order[] {
    return this.orderList.filter(order => order.status.code === OrderCodeEnum.Cancelled || order.status.code === OrderCodeEnum.Sent)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
