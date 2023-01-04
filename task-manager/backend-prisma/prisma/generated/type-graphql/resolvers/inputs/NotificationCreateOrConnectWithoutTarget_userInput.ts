import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutTarget_userInput } from "../inputs/NotificationCreateWithoutTarget_userInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateOrConnectWithoutTarget_userInput", {
  isAbstract: true
})
export class NotificationCreateOrConnectWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutTarget_userInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutTarget_userInput;
}
