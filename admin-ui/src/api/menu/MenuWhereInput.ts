import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenuWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
  user?: UserWhereUniqueInput;
};
