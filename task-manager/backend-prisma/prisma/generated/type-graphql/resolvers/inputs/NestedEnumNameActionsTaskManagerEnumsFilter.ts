import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NameActionsTaskManagerEnums } from "../../enums/NameActionsTaskManagerEnums";

@TypeGraphQL.InputType("NestedEnumNameActionsTaskManagerEnumsFilter", {
  isAbstract: true
})
export class NestedEnumNameActionsTaskManagerEnumsFilter {
  @TypeGraphQL.Field(_type => NameActionsTaskManagerEnums, {
    nullable: true
  })
  equals?: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing" | undefined;

  @TypeGraphQL.Field(_type => [NameActionsTaskManagerEnums], {
    nullable: true
  })
  in?: Array<"assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing"> | undefined;

  @TypeGraphQL.Field(_type => [NameActionsTaskManagerEnums], {
    nullable: true
  })
  notIn?: Array<"assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNameActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  not?: NestedEnumNameActionsTaskManagerEnumsFilter | undefined;
}
