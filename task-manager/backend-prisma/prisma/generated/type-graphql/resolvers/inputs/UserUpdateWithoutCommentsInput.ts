import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeUpdateManyWithoutTarget_userNestedInput } from "../inputs/AssigneeUpdateManyWithoutTarget_userNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotificationUpdateManyWithoutTarget_userNestedInput } from "../inputs/NotificationUpdateManyWithoutTarget_userNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutOwnerNestedInput } from "../inputs/TaskUpdateManyWithoutOwnerNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutCommentsInput", {
  isAbstract: true
})
export class UserUpdateWithoutCommentsInput {
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
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password_digest?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => AssigneeUpdateManyWithoutTarget_userNestedInput, {
    nullable: true
  })
  assignees?: AssigneeUpdateManyWithoutTarget_userNestedInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutTarget_userNestedInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutTarget_userNestedInput | undefined;
}
