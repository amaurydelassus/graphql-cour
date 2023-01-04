import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutAssigneeInput } from "../inputs/TaskCreateNestedOneWithoutAssigneeInput";

@TypeGraphQL.InputType("AssigneeCreateWithoutTarget_userInput", {
  isAbstract: true
})
export class AssigneeCreateWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutAssigneeInput, {
    nullable: false
  })
  target_task!: TaskCreateNestedOneWithoutAssigneeInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;
}
