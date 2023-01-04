import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutAssigneeNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutAssigneeNestedInput";

@TypeGraphQL.InputType("AssigneeUpdateWithoutTarget_userInput", {
  isAbstract: true
})
export class AssigneeUpdateWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutAssigneeNestedInput, {
    nullable: true
  })
  target_task?: TaskUpdateOneRequiredWithoutAssigneeNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
