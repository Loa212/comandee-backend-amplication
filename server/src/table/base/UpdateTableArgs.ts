/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { TableWhereUniqueInput } from "./TableWhereUniqueInput";
import { TableUpdateInput } from "./TableUpdateInput";

@ArgsType()
class UpdateTableArgs {
  @Field(() => TableWhereUniqueInput, { nullable: false })
  where!: TableWhereUniqueInput;
  @Field(() => TableUpdateInput, { nullable: false })
  data!: TableUpdateInput;
}

export { UpdateTableArgs };