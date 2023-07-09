import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-power-supply',
  templateUrl: './power-supply.component.html',
  styleUrls: ['./power-supply.component.css']
})
export class PowerSupplyComponent {

  constructor(private productService : ProductService){}

  products : Product []


  ngOnInit(): void {
      let category = "powersupply";
      this.productService.getAllProductByCategory(category).subscribe(
        (response : any) => {
          this.products = response
          console.log(response);
        }, (error) => {
          console.log(error);
          
        }
      )
  }
}
