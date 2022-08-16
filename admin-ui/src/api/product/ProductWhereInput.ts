import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  menu?: MenuWhereUniqueInput;
  name?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatFilter;
};
