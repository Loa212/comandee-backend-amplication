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
import { IsBoolean, IsOptional, ValidateNested } from "class-validator";
import { DiscountUpdateManyWithoutOrdersInput } from "./DiscountUpdateManyWithoutOrdersInput";
import { Type } from "class-transformer";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { TableWhereUniqueInput } from "../../table/base/TableWhereUniqueInput";
@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  approved?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => DiscountUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => DiscountUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => DiscountUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  discounts?: DiscountUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  payed?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => TableWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TableWhereUniqueInput)
  @IsOptional()
  @Field(() => TableWhereUniqueInput, {
    nullable: true,
  })
  table?: TableWhereUniqueInput | null;
}
export { OrderUpdateInput };
