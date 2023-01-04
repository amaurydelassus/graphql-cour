import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutAssigneeInput } from "../inputs/TaskCreateNestedOneWithoutAssigneeInput";
import { UserCreateNestedOneWithoutAssigneesInput } from "../inputs/UserCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneeCreateInput", {
  isAbstract: true
})
export class AssigneeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  target_user!: UserCreateNestedOneWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutAssigneeInput, {
    nullable: false
  })
  target_task!: TaskCreateNestedOneWithoutAssigneeInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;
}
