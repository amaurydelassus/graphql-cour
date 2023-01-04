import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateWithoutTarget_taskInput } from "../inputs/AssigneeCreateWithoutTarget_taskInput";
import { AssigneeUpdateWithoutTarget_taskInput } from "../inputs/AssigneeUpdateWithoutTarget_taskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpsertWithWhereUniqueWithoutTarget_taskInput", {
  isAbstract: true
})
export class AssigneeUpsertWithWhereUniqueWithoutTarget_taskInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateWithoutTarget_taskInput, {
    nullable: false
  })
  update!: AssigneeUpdateWithoutTarget_taskInput;

  @TypeGraphQL.Field(_type => AssigneeCreateWithoutTarget_taskInput, {
    nullable: false
  })
  create!: AssigneeCreateWithoutTarget_taskInput;
}
