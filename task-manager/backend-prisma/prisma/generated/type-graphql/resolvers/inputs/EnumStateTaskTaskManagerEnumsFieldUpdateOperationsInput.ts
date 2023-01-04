import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateTaskTaskManagerEnums } from "../../enums/StateTaskTaskManagerEnums";

@TypeGraphQL.InputType("EnumStateTaskTaskManagerEnumsFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumStateTaskTaskManagerEnumsFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => StateTaskTaskManagerEnums, {
    nullable: true
  })
  set?: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing" | undefined;
}
