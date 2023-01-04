import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumNameActionsTaskManagerEnumsFilter } from "../inputs/NestedEnumNameActionsTaskManagerEnumsFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NameActionsTaskManagerEnums } from "../../enums/NameActionsTaskManagerEnums";

@TypeGraphQL.InputType("NestedEnumNameActionsTaskManagerEnumsWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumNameActionsTaskManagerEnumsWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumNameActionsTaskManagerEnumsWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumNameActionsTaskManagerEnumsWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNameActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  _min?: NestedEnumNameActionsTaskManagerEnumsFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNameActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  _max?: NestedEnumNameActionsTaskManagerEnumsFilter | undefined;
}
