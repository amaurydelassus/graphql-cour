import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutTargetNestedInput } from "../inputs/CommentUpdateManyWithoutTargetNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStateTaskTaskManagerEnumsFieldUpdateOperationsInput } from "../inputs/EnumStateTaskTaskManagerEnumsFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTasksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTasksNestedInput";

@TypeGraphQL.InputType("TaskUpdateWithoutAssigneeInput", {
  isAbstract: true
})
export class TaskUpdateWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTasksNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  due_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStateTaskTaskManagerEnumsFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: EnumStateTaskTaskManagerEnumsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutTargetNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutTargetNestedInput | undefined;
}
