import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.InputType("EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TargetTypeActionTaskManagerEnums, {
    nullable: true
  })
  set?: "user" | "admin" | undefined;
}
