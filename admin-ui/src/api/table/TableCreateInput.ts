import { OrderCreateNestedManyWithoutTablesInput } from "./OrderCreateNestedManyWithoutTablesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TableCreateInput = {
  orders?: OrderCreateNestedManyWithoutTablesInput;
  user?: UserWhereUniqueInput | null;
};
