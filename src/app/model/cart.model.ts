import { Product } from "./product.model"
import { User } from './user.model';

export class Cart {

    id: number
    quantity : number
    total : number
    user: User
    product: Product

}
