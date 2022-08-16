import { Order } from "../order/Order";

export type Discount = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  updatedAt: Date;
};
