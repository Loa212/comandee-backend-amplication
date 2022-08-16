/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateDiscountArgs } from "./CreateDiscountArgs";
import { UpdateDiscountArgs } from "./UpdateDiscountArgs";
import { DeleteDiscountArgs } from "./DeleteDiscountArgs";
import { DiscountFindManyArgs } from "./DiscountFindManyArgs";
import { DiscountFindUniqueArgs } from "./DiscountFindUniqueArgs";
import { Discount } from "./Discount";
import { Order } from "../../order/base/Order";
import { DiscountService } from "../discount.service";

@graphql.Resolver(() => Discount)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DiscountResolverBase {
  constructor(
    protected readonly service: DiscountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "any",
  })
  async _discountsMeta(
    @graphql.Args() args: DiscountFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Discount])
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "any",
  })
  async discounts(
    @graphql.Args() args: DiscountFindManyArgs
  ): Promise<Discount[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Discount, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "own",
  })
  async discount(
    @graphql.Args() args: DiscountFindUniqueArgs
  ): Promise<Discount | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Discount)
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "create",
    possession: "any",
  })
  async createDiscount(
    @graphql.Args() args: CreateDiscountArgs
  ): Promise<Discount> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Discount)
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async updateDiscount(
    @graphql.Args() args: UpdateDiscountArgs
  ): Promise<Discount | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Discount)
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "delete",
    possession: "any",
  })
  async deleteDiscount(
    @graphql.Args() args: DeleteDiscountArgs
  ): Promise<Discount | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async order(@graphql.Parent() parent: Discount): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
