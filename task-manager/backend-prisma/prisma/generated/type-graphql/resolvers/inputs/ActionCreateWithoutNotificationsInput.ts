import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupActionsTaskManagerEnums } from "../../enums/GroupActionsTaskManagerEnums";
import { NameActionsTaskManagerEnums } from "../../enums/NameActionsTaskManagerEnums";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.InputType("ActionCreateWithoutNotificationsInput", {
  isAbstract: true
})
export class ActionCreateWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => GroupActionsTaskManagerEnums, {
    nullable: false
  })
  group!: "noUp" | "up" | "admin";

  @TypeGraphQL.Field(_type => NameActionsTaskManagerEnums, {
    nullable: false
  })
  name!: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => TargetTypeActionTaskManagerEnums, {
    nullable: false
  })
  target_type!: "user" | "admin";
}
