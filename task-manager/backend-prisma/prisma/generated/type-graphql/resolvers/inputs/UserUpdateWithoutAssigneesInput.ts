import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutOwnerNestedInput } from "../inputs/CommentUpdateManyWithoutOwnerNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotificationUpdateManyWithoutTarget_userNestedInput } from "../inputs/NotificationUpdateManyWithoutTarget_userNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutOwnerNestedInput } from "../inputs/TaskUpdateManyWithoutOwnerNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutAssigneesInput", {
  isAbstract: true
})
export class UserUpdateWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password_digest?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutTarget_userNestedInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutTarget_userNestedInput | undefined;
}
