import { Customer } from "./customer";
import { OrderItem } from "./order-item";
import { Payment } from "./payment";
import { Resort } from "./resort";

export interface OrdersResponse {
  id: string;
  createdAt: Date;
  customer: Customer;
  deliveryMethod: string;
  orderItems: OrderItem[];
  payment: Payment;
  resort: Resort;
  state: string;
}
