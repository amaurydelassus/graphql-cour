import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTarget_userInputEnvelope } from "../inputs/NotificationCreateManyTarget_userInputEnvelope";
import { NotificationCreateOrConnectWithoutTarget_userInput } from "../inputs/NotificationCreateOrConnectWithoutTarget_userInput";
import { NotificationCreateWithoutTarget_userInput } from "../inputs/NotificationCreateWithoutTarget_userInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutTarget_userInput } from "../inputs/NotificationUpdateManyWithWhereWithoutTarget_userInput";
import { NotificationUpdateWithWhereUniqueWithoutTarget_userInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutTarget_userInput";
import { NotificationUpsertWithWhereUniqueWithoutTarget_userInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutTarget_userInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutTarget_userNestedInput", {
  isAbstract: true
})
export class NotificationUpdateManyWithoutTarget_userNestedInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutTarget_userInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutTarget_userInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutTarget_userInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyTarget_userInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyTarget_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutTarget_userInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutTarget_userInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
