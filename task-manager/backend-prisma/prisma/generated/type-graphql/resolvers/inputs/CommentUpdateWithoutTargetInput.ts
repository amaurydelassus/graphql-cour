import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput } from "../inputs/EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCommentsNestedInput } from "../inputs/UserUpdateOneWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentUpdateWithoutTargetInput", {
  isAbstract: true
})
export class CommentUpdateWithoutTargetInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCommentsNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput, {
    nullable: true
  })
  target_type?: EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  parent_id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
