import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DiscountCreateInput = {
  order?: OrderWhereUniqueInput | null;
};
