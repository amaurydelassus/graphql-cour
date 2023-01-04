import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.InputType("NestedEnumTargetTypeActionTaskManagerEnumsFilter", {
  isAbstract: true
})
export class NestedEnumTargetTypeActionTaskManagerEnumsFilter {
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
