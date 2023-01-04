import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTargetTypeActionTaskManagerEnumsFilter } from "../inputs/NestedEnumTargetTypeActionTaskManagerEnumsFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.InputType("NestedEnumTargetTypeActionTaskManagerEnumsWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumTargetTypeActionTaskManagerEnumsWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TargetTypeActionTaskManagerEnums, {
    nullable: true
  })
  equals?: "user" | "admin" | undefined;

  @TypeGraphQL.Field(_type => [TargetTypeActionTaskManagerEnums], {
    nullable: true
  })
  in?: Array<"user" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => [TargetTypeActionTaskManagerEnums], {
    nullable: true
  })
  notIn?: Array<"user" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeActionTaskManagerEnumsWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTargetTypeActionTaskManagerEnumsWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeActionTaskManagerEnumsFilter, {
    nullable: true
  })
  _min?: NestedEnumTargetTypeActionTaskManagerEnumsFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeActionTaskManagerEnumsFilter, {
    nullable: true
  })
  _max?: NestedEnumTargetTypeActionTaskManagerEnumsFilter | undefined;
}
