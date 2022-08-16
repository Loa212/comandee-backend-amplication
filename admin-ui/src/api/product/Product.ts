import { Menu } from "../menu/Menu";
import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  menu?: Menu | null;
  name: string;
  order?: Order | null;
  price: number;
  updatedAt: Date;
};
