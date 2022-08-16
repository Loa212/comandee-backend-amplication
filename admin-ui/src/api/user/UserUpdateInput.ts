import { MenuUpdateManyWithoutUsersInput } from "./MenuUpdateManyWithoutUsersInput";
import { TableUpdateManyWithoutUsersInput } from "./TableUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  menus?: MenuUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  tables?: TableUpdateManyWithoutUsersInput;
  username?: string;
};
