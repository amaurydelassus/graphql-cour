import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateWithoutTarget_userInput } from "../inputs/NotificationUpdateWithoutTarget_userInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutTarget_userInput", {
  isAbstract: true
})
export class NotificationUpdateWithWhereUniqueWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutTarget_userInput, {
    nullable: false
  })
  data!: NotificationUpdateWithoutTarget_userInput;
}
