import { OrderUpdateManyWithoutTablesInput } from "./OrderUpdateManyWithoutTablesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TableUpdateInput = {
  orders?: OrderUpdateManyWithoutTablesInput;
  user?: UserWhereUniqueInput | null;
};
