import { Price } from "./price";

export interface Payment {
  id: string;
  amount: Price;
  createdAt: Date;
  updatedAt: Date;
  paymentMethod: string;
  state: string;
}
