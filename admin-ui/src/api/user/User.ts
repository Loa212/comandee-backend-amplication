import { Menu } from "../menu/Menu";
import { Table } from "../table/Table";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  menus?: Array<Menu>;
  roles: Array<string>;
  tables?: Array<Table>;
  updatedAt: Date;
  username: string;
};
