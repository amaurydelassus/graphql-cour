import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Task } from "../models/Task";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Assignee", {
  isAbstract: true,
  simpleResolvers: true
})
export class Assignee {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  target_user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  target_task?: Task;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;
}
