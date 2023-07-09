import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-hard-disk',
  templateUrl: './hard-disk.component.html',
  styleUrls: ['./hard-disk.component.css']
})
export class HardDiskComponent {

  constructor(private productService : ProductService){}

  products : Product []


  ngOnInit(): void {
      let category = "harddisk";
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
