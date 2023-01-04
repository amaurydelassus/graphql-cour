import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeScalarWhereInput } from "../inputs/AssigneeScalarWhereInput";
import { AssigneeUpdateManyMutationInput } from "../inputs/AssigneeUpdateManyMutationInput";

@TypeGraphQL.InputType("AssigneeUpdateManyWithWhereWithoutTarget_taskInput", {
  isAbstract: true
})
export class AssigneeUpdateManyWithWhereWithoutTarget_taskInput {
  @TypeGraphQL.Field(_type => AssigneeScalarWhereInput, {
    nullable: false
  })
  where!: AssigneeScalarWhereInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssigneeUpdateManyMutationInput;
}
