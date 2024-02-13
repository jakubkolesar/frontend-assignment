import { Price } from "./price";
import { Translation } from "./translation";

export interface OrderMenuItem {
  id: string;
  available: boolean;
  category: string;
  createdAt: Date;
  position: number;
  price: Price;
  translations: Translation;
}
