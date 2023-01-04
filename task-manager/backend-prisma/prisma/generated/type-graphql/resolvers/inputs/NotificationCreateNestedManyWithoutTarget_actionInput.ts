import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTarget_actionInputEnvelope } from "../inputs/NotificationCreateManyTarget_actionInputEnvelope";
import { NotificationCreateOrConnectWithoutTarget_actionInput } from "../inputs/NotificationCreateOrConnectWithoutTarget_actionInput";
import { NotificationCreateWithoutTarget_actionInput } from "../inputs/NotificationCreateWithoutTarget_actionInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutTarget_actionInput", {
  isAbstract: true
})
export class NotificationCreateNestedManyWithoutTarget_actionInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutTarget_actionInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutTarget_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutTarget_actionInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutTarget_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyTarget_actionInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyTarget_actionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
