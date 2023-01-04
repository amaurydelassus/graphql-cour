import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAssigneesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAssigneesNestedInput";

@TypeGraphQL.InputType("AssigneeUpdateWithoutTarget_taskInput", {
  isAbstract: true
})
export class AssigneeUpdateWithoutTarget_taskInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAssigneesNestedInput, {
    nullable: true
  })
  target_user?: UserUpdateOneRequiredWithoutAssigneesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
