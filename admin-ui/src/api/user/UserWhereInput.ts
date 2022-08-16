import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  menus?: MenuListRelationFilter;
  tables?: TableListRelationFilter;
  username?: StringFilter;
};
