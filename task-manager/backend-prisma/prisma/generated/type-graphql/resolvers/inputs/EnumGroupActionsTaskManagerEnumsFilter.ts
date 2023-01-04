import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGroupActionsTaskManagerEnumsFilter } from "../inputs/NestedEnumGroupActionsTaskManagerEnumsFilter";
import { GroupActionsTaskManagerEnums } from "../../enums/GroupActionsTaskManagerEnums";

@TypeGraphQL.InputType("EnumGroupActionsTaskManagerEnumsFilter", {
  isAbstract: true
})
export class EnumGroupActionsTaskManagerEnumsFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumGroupActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  not?: NestedEnumGroupActionsTaskManagerEnumsFilter | undefined;
}
