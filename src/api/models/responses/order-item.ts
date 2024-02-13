import { Price } from "./price";
import { OrderMenuItem } from "./order-menu-item";

export interface OrderItem {
  id: string;
  createdAt: Date;
  finalPrice: Price;
  orderMenuItem: OrderMenuItem;
  quantity: number;
}
