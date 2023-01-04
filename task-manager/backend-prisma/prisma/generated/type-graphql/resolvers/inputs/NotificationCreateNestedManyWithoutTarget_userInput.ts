import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTarget_userInputEnvelope } from "../inputs/NotificationCreateManyTarget_userInputEnvelope";
import { NotificationCreateOrConnectWithoutTarget_userInput } from "../inputs/NotificationCreateOrConnectWithoutTarget_userInput";
import { NotificationCreateWithoutTarget_userInput } from "../inputs/NotificationCreateWithoutTarget_userInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutTarget_userInput", {
  isAbstract: true
})
export class NotificationCreateNestedManyWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutTarget_userInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutTarget_userInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyTarget_userInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyTarget_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
