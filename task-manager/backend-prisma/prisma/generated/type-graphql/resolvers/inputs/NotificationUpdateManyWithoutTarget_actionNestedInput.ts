import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTarget_actionInputEnvelope } from "../inputs/NotificationCreateManyTarget_actionInputEnvelope";
import { NotificationCreateOrConnectWithoutTarget_actionInput } from "../inputs/NotificationCreateOrConnectWithoutTarget_actionInput";
import { NotificationCreateWithoutTarget_actionInput } from "../inputs/NotificationCreateWithoutTarget_actionInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutTarget_actionInput } from "../inputs/NotificationUpdateManyWithWhereWithoutTarget_actionInput";
import { NotificationUpdateWithWhereUniqueWithoutTarget_actionInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutTarget_actionInput";
import { NotificationUpsertWithWhereUniqueWithoutTarget_actionInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutTarget_actionInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutTarget_actionNestedInput", {
  isAbstract: true
})
export class NotificationUpdateManyWithoutTarget_actionNestedInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutTarget_actionInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutTarget_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutTarget_actionInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutTarget_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutTarget_actionInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutTarget_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyTarget_actionInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyTarget_actionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutTarget_actionInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutTarget_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutTarget_actionInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutTarget_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
