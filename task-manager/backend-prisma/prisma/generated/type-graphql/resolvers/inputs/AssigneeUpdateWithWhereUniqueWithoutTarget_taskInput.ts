import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeUpdateWithoutTarget_taskInput } from "../inputs/AssigneeUpdateWithoutTarget_taskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateWithWhereUniqueWithoutTarget_taskInput", {
  isAbstract: true
})
export class AssigneeUpdateWithWhereUniqueWithoutTarget_taskInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateWithoutTarget_taskInput, {
    nullable: false
  })
  data!: AssigneeUpdateWithoutTarget_taskInput;
}
