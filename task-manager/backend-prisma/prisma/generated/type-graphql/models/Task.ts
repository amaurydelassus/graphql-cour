import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Assignee } from "../models/Assignee";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { StateTaskTaskManagerEnums } from "../enums/StateTaskTaskManagerEnums";
import { TaskCount } from "../resolvers/outputs/TaskCount";

@TypeGraphQL.ObjectType("Task", {
  isAbstract: true,
  simpleResolvers: true
})
export class Task {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  owner?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owner_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  due_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => StateTaskTaskManagerEnums, {
    nullable: false
  })
  state!: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing";

  comments?: Comment[];

  assignee?: Assignee[];

  @TypeGraphQL.Field(_type => TaskCount, {
    nullable: true
  })
  _count?: TaskCount | null;
}
