import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumNameActionsTaskManagerEnumsFilter } from "../inputs/NestedEnumNameActionsTaskManagerEnumsFilter";
import { NameActionsTaskManagerEnums } from "../../enums/NameActionsTaskManagerEnums";

@TypeGraphQL.InputType("EnumNameActionsTaskManagerEnumsFilter", {
  isAbstract: true
})
export class EnumNameActionsTaskManagerEnumsFilter {
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
