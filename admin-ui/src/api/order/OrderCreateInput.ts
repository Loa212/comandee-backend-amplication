import { DiscountCreateNestedManyWithoutOrdersInput } from "./DiscountCreateNestedManyWithoutOrdersInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type OrderCreateInput = {
  approved?: boolean | null;
  discounts?: DiscountCreateNestedManyWithoutOrdersInput;
  payed?: boolean | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  table?: TableWhereUniqueInput | null;
};
