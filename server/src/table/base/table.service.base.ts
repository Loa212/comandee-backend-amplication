/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Table, Order, User } from "@prisma/client";

export class TableServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TableFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TableFindManyArgs>
  ): Promise<number> {
    return this.prisma.table.count(args);
  }

  async findMany<T extends Prisma.TableFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TableFindManyArgs>
  ): Promise<Table[]> {
    return this.prisma.table.findMany(args);
  }
  async findOne<T extends Prisma.TableFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TableFindUniqueArgs>
  ): Promise<Table | null> {
    return this.prisma.table.findUnique(args);
  }
  async create<T extends Prisma.TableCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TableCreateArgs>
  ): Promise<Table> {
    return this.prisma.table.create<T>(args);
  }
  async update<T extends Prisma.TableUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TableUpdateArgs>
  ): Promise<Table> {
    return this.prisma.table.update<T>(args);
  }
  async delete<T extends Prisma.TableDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TableDeleteArgs>
  ): Promise<Table> {
    return this.prisma.table.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.table
      .findUnique({
        where: { id: parentId },
      })
      .orders(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.table
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}