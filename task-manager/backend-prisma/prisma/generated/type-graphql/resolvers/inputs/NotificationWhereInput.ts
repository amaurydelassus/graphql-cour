import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionRelationFilter } from "../inputs/ActionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("NotificationWhereInput", {
  isAbstract: true
})
export class NotificationWhereInput {
  @TypeGraphQL.Field(_type => [NotificationWhereInput], {
    nullable: true
  })
  AND?: NotificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereInput], {
    nullable: true
  })
  OR?: NotificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereInput], {
    nullable: true
  })
  NOT?: NotificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  target_user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ActionRelationFilter, {
    nullable: true
  })
  target_action?: ActionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  readed_at?: DateTimeFilter | undefined;
}
