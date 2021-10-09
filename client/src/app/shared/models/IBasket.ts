import { v4 as uuidv4 } from 'uuid';

export interface IBasket {
    id: string
    items: IBasketItem[]
  }
  
  export interface IBasketItem {
    id: number
    productName: string
    price: number
    brand: string
    type: string
    quantity: number
    pictureUrl: string
  }
  
  export class Basket implements IBasket{
      id= uuidv4();
      items: IBasketItem[] = [];

  }
  export interface ITotalBasket{
    shipping: number,
    subTotal: number,
    total: number
  }