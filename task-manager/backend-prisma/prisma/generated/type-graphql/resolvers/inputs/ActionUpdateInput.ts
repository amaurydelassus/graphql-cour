import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumGroupActionsTaskManagerEnumsFieldUpdateOperationsInput } from "../inputs/EnumGroupActionsTaskManagerEnumsFieldUpdateOperationsInput";
import { EnumNameActionsTaskManagerEnumsFieldUpdateOperationsInput } from "../inputs/EnumNameActionsTaskManagerEnumsFieldUpdateOperationsInput";
import { EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput } from "../inputs/EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput";
import { NotificationUpdateManyWithoutTarget_actionNestedInput } from "../inputs/NotificationUpdateManyWithoutTarget_actionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionUpdateInput", {
  isAbstract: true
})
export class ActionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumGroupActionsTaskManagerEnumsFieldUpdateOperationsInput, {
    nullable: true
  })
  group?: EnumGroupActionsTaskManagerEnumsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumNameActionsTaskManagerEnumsFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumNameActionsTaskManagerEnumsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  target_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput, {
    nullable: true
  })
  target_type?: EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutTarget_actionNestedInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutTarget_actionNestedInput | undefined;
}
