import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupActionsTaskManagerEnums } from "../../enums/GroupActionsTaskManagerEnums";

@TypeGraphQL.InputType("EnumGroupActionsTaskManagerEnumsFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumGroupActionsTaskManagerEnumsFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => GroupActionsTaskManagerEnums, {
    nullable: true
  })
  set?: "noUp" | "up" | "admin" | undefined;
}
