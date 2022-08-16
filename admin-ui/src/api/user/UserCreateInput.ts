import { MenuCreateNestedManyWithoutUsersInput } from "./MenuCreateNestedManyWithoutUsersInput";
import { TableCreateNestedManyWithoutUsersInput } from "./TableCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  menus?: MenuCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  tables?: TableCreateNestedManyWithoutUsersInput;
  username: string;
};
