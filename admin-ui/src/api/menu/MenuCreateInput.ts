import { ProductCreateNestedManyWithoutMenusInput } from "./ProductCreateNestedManyWithoutMenusInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenuCreateInput = {
  name: string;
  products?: ProductCreateNestedManyWithoutMenusInput;
  user?: UserWhereUniqueInput | null;
};
