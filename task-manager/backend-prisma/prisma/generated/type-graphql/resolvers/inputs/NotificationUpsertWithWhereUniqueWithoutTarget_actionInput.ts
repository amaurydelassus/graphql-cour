import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutTarget_actionInput } from "../inputs/NotificationCreateWithoutTarget_actionInput";
import { NotificationUpdateWithoutTarget_actionInput } from "../inputs/NotificationUpdateWithoutTarget_actionInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutTarget_actionInput", {
  isAbstract: true
})
export class NotificationUpsertWithWhereUniqueWithoutTarget_actionInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutTarget_actionInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutTarget_actionInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutTarget_actionInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutTarget_actionInput;
}
