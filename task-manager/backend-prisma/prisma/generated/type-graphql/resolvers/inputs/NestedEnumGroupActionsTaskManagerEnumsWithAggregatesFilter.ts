import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGroupActionsTaskManagerEnumsFilter } from "../inputs/NestedEnumGroupActionsTaskManagerEnumsFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { GroupActionsTaskManagerEnums } from "../../enums/GroupActionsTaskManagerEnums";

@TypeGraphQL.InputType("NestedEnumGroupActionsTaskManagerEnumsWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumGroupActionsTaskManagerEnumsWithAggregatesFilter {
  @TypeGraphQL.Field(_type => GroupActionsTaskManagerEnums, {
    nullable: true
  })
  equals?: "noUp" | "up" | "admin" | undefined;

  @TypeGraphQL.Field(_type => [GroupActionsTaskManagerEnums], {
    nullable: true
  })
  in?: Array<"noUp" | "up" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => [GroupActionsTaskManagerEnums], {
    nullable: true
  })
  notIn?: Array<"noUp" | "up" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGroupActionsTaskManagerEnumsWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumGroupActionsTaskManagerEnumsWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGroupActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  _min?: NestedEnumGroupActionsTaskManagerEnumsFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGroupActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  _max?: NestedEnumGroupActionsTaskManagerEnumsFilter | undefined;
}
