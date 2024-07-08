/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Card as PrismaCard, Game as PrismaGame } from "@prisma/client";

export class CardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CardCountArgs, "select">): Promise<number> {
    return this.prisma.card.count(args);
  }

  async cards(args: Prisma.CardFindManyArgs): Promise<PrismaCard[]> {
    return this.prisma.card.findMany(args);
  }
  async card(args: Prisma.CardFindUniqueArgs): Promise<PrismaCard | null> {
    return this.prisma.card.findUnique(args);
  }
  async createCard(args: Prisma.CardCreateArgs): Promise<PrismaCard> {
    return this.prisma.card.create(args);
  }
  async updateCard(args: Prisma.CardUpdateArgs): Promise<PrismaCard> {
    return this.prisma.card.update(args);
  }
  async deleteCard(args: Prisma.CardDeleteArgs): Promise<PrismaCard> {
    return this.prisma.card.delete(args);
  }

  async getGame(parentId: string): Promise<PrismaGame | null> {
    return this.prisma.card
      .findUnique({
        where: { id: parentId },
      })
      .game();
  }
}