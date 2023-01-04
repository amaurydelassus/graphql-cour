import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupActionsTaskManagerEnums } from "../../enums/GroupActionsTaskManagerEnums";
import { NameActionsTaskManagerEnums } from "../../enums/NameActionsTaskManagerEnums";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.ObjectType("ActionMaxAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class ActionMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => GroupActionsTaskManagerEnums, {
    nullable: true
  })
  group!: "noUp" | "up" | "admin" | null;

  @TypeGraphQL.Field(_type => NameActionsTaskManagerEnums, {
    nullable: true
  })
  name!: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_id!: string | null;

  @TypeGraphQL.Field(_type => TargetTypeActionTaskManagerEnums, {
    nullable: true
  })
  target_type!: "user" | "admin" | null;
}
