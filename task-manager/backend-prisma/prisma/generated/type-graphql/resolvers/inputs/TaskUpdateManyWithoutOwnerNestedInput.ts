import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyOwnerInputEnvelope } from "../inputs/TaskCreateManyOwnerInputEnvelope";
import { TaskCreateOrConnectWithoutOwnerInput } from "../inputs/TaskCreateOrConnectWithoutOwnerInput";
import { TaskCreateWithoutOwnerInput } from "../inputs/TaskCreateWithoutOwnerInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutOwnerInput } from "../inputs/TaskUpdateManyWithWhereWithoutOwnerInput";
import { TaskUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutOwnerInput";
import { TaskUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutOwnerInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutOwnerNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutOwnerNestedInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: TaskCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
