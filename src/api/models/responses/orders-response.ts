import { PendingOrderState } from "../../enums/pending-order-state";
import { CompletedOrderState } from "../../enums/completed-order-state";
import { Customer } from "./customer";

export interface OrderItem {
  id: string;
  createdAt: Date;
  customer: Customer; // todo
  deliveryMethod: string;
  orderItems: any; //todo
  payment: any; //todo
  resort: any; // todo,
  state: PendingOrderState | CompletedOrderState;
}
