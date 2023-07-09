import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderHistoryService } from 'src/app/service/order-history.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit{

  constructor(private orderHistory : OrderHistoryService){}

  orders:Order[]

  ngOnInit(): void {
    this.orderHistory.getOrderHistory().subscribe(
      (response : any) => {
        this.orders = response
        console.log(this.orders);
        
      } 
    )
  }

}
