import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Action } from "../models/Action";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Notification", {
  isAbstract: true,
  simpleResolvers: true
})
export class Notification {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  target_user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  target_action?: Action;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  actionId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
