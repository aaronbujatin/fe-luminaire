import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cpu-cooling',
  templateUrl: './cpu-cooling.component.html',
  styleUrls: ['./cpu-cooling.component.css']
})
export class CpuCoolingComponent {


  constructor(private productService : ProductService){}

  products : Product []


  ngOnInit(): void {
      let category = "cpucooling";
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
