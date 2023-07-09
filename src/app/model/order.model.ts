import { Product } from "./product.model"
import { User } from "./user.model"

export class Order {

    id:number
    name: string
    address:string
    status:string
    total:number
    dateOrder:string
    product:Product
    user:User
    
}
