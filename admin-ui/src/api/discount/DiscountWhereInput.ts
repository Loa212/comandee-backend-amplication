import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DiscountWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
