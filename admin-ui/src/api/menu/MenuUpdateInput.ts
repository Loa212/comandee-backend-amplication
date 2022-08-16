import { ProductUpdateManyWithoutMenusInput } from "./ProductUpdateManyWithoutMenusInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenuUpdateInput = {
  name?: string;
  products?: ProductUpdateManyWithoutMenusInput;
  user?: UserWhereUniqueInput | null;
};
