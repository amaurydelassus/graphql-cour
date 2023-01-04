import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStateTaskTaskManagerEnumsFilter } from "../inputs/NestedEnumStateTaskTaskManagerEnumsFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { StateTaskTaskManagerEnums } from "../../enums/StateTaskTaskManagerEnums";

@TypeGraphQL.InputType("NestedEnumStateTaskTaskManagerEnumsWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumStateTaskTaskManagerEnumsWithAggregatesFilter {
  @TypeGraphQL.Field(_type => StateTaskTaskManagerEnums, {
    nullable: true
  })
  equals?: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing" | undefined;

  @TypeGraphQL.Field(_type => [StateTaskTaskManagerEnums], {
    nullable: true
  })
  in?: Array<"assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing"> | undefined;

  @TypeGraphQL.Field(_type => [StateTaskTaskManagerEnums], {
    nullable: true
  })
  notIn?: Array<"assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStateTaskTaskManagerEnumsWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumStateTaskTaskManagerEnumsWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStateTaskTaskManagerEnumsFilter, {
    nullable: true
  })
  _min?: NestedEnumStateTaskTaskManagerEnumsFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStateTaskTaskManagerEnumsFilter, {
    nullable: true
  })
  _max?: NestedEnumStateTaskTaskManagerEnumsFilter | undefined;
}
