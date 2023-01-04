import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTargetTypeActionTaskManagerEnumsFilter } from "../inputs/NestedEnumTargetTypeActionTaskManagerEnumsFilter";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.InputType("EnumTargetTypeActionTaskManagerEnumsFilter", {
  isAbstract: true
})
export class EnumTargetTypeActionTaskManagerEnumsFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeActionTaskManagerEnumsFilter, {
    nullable: true
  })
  not?: NestedEnumTargetTypeActionTaskManagerEnumsFilter | undefined;
}
