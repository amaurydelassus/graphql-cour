import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateTaskTaskManagerEnums } from "../../enums/StateTaskTaskManagerEnums";

@TypeGraphQL.ObjectType("TaskMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class TaskMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  owner_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  due_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => StateTaskTaskManagerEnums, {
    nullable: true
  })
  state!: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing" | null;
}
