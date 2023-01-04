import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Notification } from "../models/Notification";
import { GroupActionsTaskManagerEnums } from "../enums/GroupActionsTaskManagerEnums";
import { NameActionsTaskManagerEnums } from "../enums/NameActionsTaskManagerEnums";
import { TargetTypeActionTaskManagerEnums } from "../enums/TargetTypeActionTaskManagerEnums";
import { ActionCount } from "../resolvers/outputs/ActionCount";

@TypeGraphQL.ObjectType("Action", {
  isAbstract: true,
  simpleResolvers: true
})
export class Action {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

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

  notifications?: Notification[];

  @TypeGraphQL.Field(_type => ActionCount, {
    nullable: true
  })
  _count?: ActionCount | null;
}
