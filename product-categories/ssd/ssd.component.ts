import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-ssd',
  templateUrl: './ssd.component.html',
  styleUrls: ['./ssd.component.css']
})
export class SsdComponent {

  constructor(private productService : ProductService){}

  products : Product []


  ngOnInit(): void {
      let category = "ssd";
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
