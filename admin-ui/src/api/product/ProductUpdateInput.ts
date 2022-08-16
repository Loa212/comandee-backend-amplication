import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductUpdateInput = {
  imageUrl?: string | null;
  menu?: MenuWhereUniqueInput | null;
  name?: string;
  order?: OrderWhereUniqueInput | null;
  price?: number;
};
