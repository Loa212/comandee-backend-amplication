/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderUpdateManyWithoutTablesInput } from "./OrderUpdateManyWithoutTablesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class TableUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutTablesInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutTablesInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutTablesInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutTablesInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}
export { TableUpdateInput };
