import { PendingOrderState } from "../../enums/pending-order-state";
import { CompletedOrderState } from "../../enums/completed-order-state";
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
  state: PendingOrderState | CompletedOrderState;
}
