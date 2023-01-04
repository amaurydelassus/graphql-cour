import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutAssigneesInput } from "../inputs/UserCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneeCreateWithoutTarget_taskInput", {
  isAbstract: true
})
export class AssigneeCreateWithoutTarget_taskInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  target_user!: UserCreateNestedOneWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;
}
