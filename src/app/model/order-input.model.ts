import { OrderQuantity } from "./order-quantity.model"

export class OrderInput {

    name?: string 
    phone : string
    address : string
    city : string
    state : string
    postalCode : string
    cardNumber : string
    expiryDate : string
    cc : string
    orderProductQuantity : OrderQuantity[]
}
