export interface Translation {
  [key: string]: {
    id: string;
    description: string;
    locale: string;
    name: string;
    orderMenuItem: string;
  };
}
