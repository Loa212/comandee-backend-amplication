import { DiscountUpdateManyWithoutOrdersInput } from "./DiscountUpdateManyWithoutOrdersInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type OrderUpdateInput = {
  approved?: boolean | null;
  discounts?: DiscountUpdateManyWithoutOrdersInput;
  payed?: boolean | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  table?: TableWhereUniqueInput | null;
};
