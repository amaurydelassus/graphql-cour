import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumGroupActionsTaskManagerEnumsFilter } from "../inputs/EnumGroupActionsTaskManagerEnumsFilter";
import { EnumNameActionsTaskManagerEnumsFilter } from "../inputs/EnumNameActionsTaskManagerEnumsFilter";
import { EnumTargetTypeActionTaskManagerEnumsFilter } from "../inputs/EnumTargetTypeActionTaskManagerEnumsFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionWhereInput", {
  isAbstract: true
})
export class ActionWhereInput {
  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  AND?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  OR?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  NOT?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGroupActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  group?: EnumGroupActionsTaskManagerEnumsFilter | undefined;

  @TypeGraphQL.Field(_type => EnumNameActionsTaskManagerEnumsFilter, {
    nullable: true
  })
  name?: EnumNameActionsTaskManagerEnumsFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  target_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeActionTaskManagerEnumsFilter, {
    nullable: true
  })
  target_type?: EnumTargetTypeActionTaskManagerEnumsFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;
}
