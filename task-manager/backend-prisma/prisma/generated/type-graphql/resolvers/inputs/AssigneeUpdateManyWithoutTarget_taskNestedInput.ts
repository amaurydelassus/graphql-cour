import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTarget_taskInputEnvelope } from "../inputs/AssigneeCreateManyTarget_taskInputEnvelope";
import { AssigneeCreateOrConnectWithoutTarget_taskInput } from "../inputs/AssigneeCreateOrConnectWithoutTarget_taskInput";
import { AssigneeCreateWithoutTarget_taskInput } from "../inputs/AssigneeCreateWithoutTarget_taskInput";
import { AssigneeScalarWhereInput } from "../inputs/AssigneeScalarWhereInput";
import { AssigneeUpdateManyWithWhereWithoutTarget_taskInput } from "../inputs/AssigneeUpdateManyWithWhereWithoutTarget_taskInput";
import { AssigneeUpdateWithWhereUniqueWithoutTarget_taskInput } from "../inputs/AssigneeUpdateWithWhereUniqueWithoutTarget_taskInput";
import { AssigneeUpsertWithWhereUniqueWithoutTarget_taskInput } from "../inputs/AssigneeUpsertWithWhereUniqueWithoutTarget_taskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateManyWithoutTarget_taskNestedInput", {
  isAbstract: true
})
export class AssigneeUpdateManyWithoutTarget_taskNestedInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutTarget_taskInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutTarget_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutTarget_taskInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutTarget_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpsertWithWhereUniqueWithoutTarget_taskInput], {
    nullable: true
  })
  upsert?: AssigneeUpsertWithWhereUniqueWithoutTarget_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyTarget_taskInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyTarget_taskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  set?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  delete?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpdateWithWhereUniqueWithoutTarget_taskInput], {
    nullable: true
  })
  update?: AssigneeUpdateWithWhereUniqueWithoutTarget_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpdateManyWithWhereWithoutTarget_taskInput], {
    nullable: true
  })
  updateMany?: AssigneeUpdateManyWithWhereWithoutTarget_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssigneeScalarWhereInput[] | undefined;
}
