import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionUpdateOneRequiredWithoutNotificationsNestedInput } from "../inputs/ActionUpdateOneRequiredWithoutNotificationsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("NotificationUpdateWithoutTarget_userInput", {
  isAbstract: true
})
export class NotificationUpdateWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpdateOneRequiredWithoutNotificationsNestedInput, {
    nullable: true
  })
  target_action?: ActionUpdateOneRequiredWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  readed_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
