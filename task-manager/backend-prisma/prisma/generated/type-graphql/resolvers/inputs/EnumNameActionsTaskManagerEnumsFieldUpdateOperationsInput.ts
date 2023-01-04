import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NameActionsTaskManagerEnums } from "../../enums/NameActionsTaskManagerEnums";

@TypeGraphQL.InputType("EnumNameActionsTaskManagerEnumsFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumNameActionsTaskManagerEnumsFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => NameActionsTaskManagerEnums, {
    nullable: true
  })
  set?: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing" | undefined;
}
