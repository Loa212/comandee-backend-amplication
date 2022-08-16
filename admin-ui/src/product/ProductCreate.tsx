import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MenuTitle } from "../menu/MenuTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ImageUrl" source="imageUrl" />
        <ReferenceInput source="menu.id" reference="Menu" label="Menu">
          <SelectInput optionText={MenuTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
