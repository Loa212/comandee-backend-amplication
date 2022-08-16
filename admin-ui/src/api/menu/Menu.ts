import { Product } from "../product/Product";
import { User } from "../user/User";

export type Menu = {
  createdAt: Date;
  id: string;
  name: string;
  products?: Array<Product>;
  updatedAt: Date;
  user?: User | null;
};
