import { Price } from "./price";

export interface Resort {
  id: string;
  createdAt: Date;
  currency: string;
  languages: string[];
  sunbedVariants: Array<{
    id: string;
    createdAt: Date;
  }>;
  state: string;
  totalPrice: Price;
}
