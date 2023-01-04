import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTarget_taskInputEnvelope } from "../inputs/AssigneeCreateManyTarget_taskInputEnvelope";
import { AssigneeCreateOrConnectWithoutTarget_taskInput } from "../inputs/AssigneeCreateOrConnectWithoutTarget_taskInput";
import { AssigneeCreateWithoutTarget_taskInput } from "../inputs/AssigneeCreateWithoutTarget_taskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeCreateNestedManyWithoutTarget_taskInput", {
  isAbstract: true
})
export class AssigneeCreateNestedManyWithoutTarget_taskInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutTarget_taskInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutTarget_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutTarget_taskInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutTarget_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyTarget_taskInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyTarget_taskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneeWhereUniqueInput[] | undefined;
}
