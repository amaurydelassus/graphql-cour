import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeUpdateManyWithoutTarget_userNestedInput } from "../inputs/AssigneeUpdateManyWithoutTarget_userNestedInput";
import { CommentUpdateManyWithoutOwnerNestedInput } from "../inputs/CommentUpdateManyWithoutOwnerNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutOwnerNestedInput } from "../inputs/TaskUpdateManyWithoutOwnerNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutNotificationsInput", {
  isAbstract: true
})
export class UserUpdateWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_sign_in_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  update_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutOwnerNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutOwnerNestedInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeUpdateManyWithoutTarget_userNestedInput, {
    nullable: true
  })
  assignees?: AssigneeUpdateManyWithoutTarget_userNestedInput | undefined;
}
