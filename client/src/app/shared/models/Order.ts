import { IAddress } from "./account/Address";

export interface IOrderToCreate {
    deliveryMethodId: number
    shiptoAddress: IAddress
    basketId: string
  }

  export interface IOrder {
    id: number
    buyerEmail: string
    orderDate: string
    shipToAddress: IAddress
    orderItemDto: IOrderItem[]
    status: string
    deliveryMethod: string
    shippingPrice: number
    subTotal: number
    total: number
  }
  
  export interface IOrderItem {
    productId: number
    pictureUrl: string
    productName: string
    price: number
    quantity: number
  }
  