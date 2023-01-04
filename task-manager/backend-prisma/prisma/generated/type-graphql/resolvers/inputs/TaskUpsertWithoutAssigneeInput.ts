import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutAssigneeInput } from "../inputs/TaskCreateWithoutAssigneeInput";
import { TaskUpdateWithoutAssigneeInput } from "../inputs/TaskUpdateWithoutAssigneeInput";

@TypeGraphQL.InputType("TaskUpsertWithoutAssigneeInput", {
  isAbstract: true
})
export class TaskUpsertWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutAssigneeInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutAssigneeInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutAssigneeInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssigneeInput;
}
