import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DiscountListRelationFilter } from "../discount/DiscountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type OrderWhereInput = {
  approved?: BooleanNullableFilter;
  discounts?: DiscountListRelationFilter;
  id?: StringFilter;
  payed?: BooleanNullableFilter;
  products?: ProductListRelationFilter;
  table?: TableWhereUniqueInput;
};
