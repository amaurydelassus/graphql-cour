import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateWithoutTarget_actionInput } from "../inputs/NotificationUpdateWithoutTarget_actionInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutTarget_actionInput", {
  isAbstract: true
})
export class NotificationUpdateWithWhereUniqueWithoutTarget_actionInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutTarget_actionInput, {
    nullable: false
  })
  data!: NotificationUpdateWithoutTarget_actionInput;
}
