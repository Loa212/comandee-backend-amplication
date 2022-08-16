import { Discount } from "../discount/Discount";
import { Product } from "../product/Product";
import { Table } from "../table/Table";

export type Order = {
  approved: boolean | null;
  createdAt: Date;
  discounts?: Array<Discount>;
  id: string;
  payed: boolean | null;
  products?: Array<Product>;
  table?: Table | null;
  updatedAt: Date;
};
