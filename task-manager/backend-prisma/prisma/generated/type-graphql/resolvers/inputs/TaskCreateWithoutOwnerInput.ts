import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateNestedManyWithoutTarget_taskInput } from "../inputs/AssigneeCreateNestedManyWithoutTarget_taskInput";
import { CommentCreateNestedManyWithoutTargetInput } from "../inputs/CommentCreateNestedManyWithoutTargetInput";
import { StateTaskTaskManagerEnums } from "../../enums/StateTaskTaskManagerEnums";

@TypeGraphQL.InputType("TaskCreateWithoutOwnerInput", {
  isAbstract: true
})
export class TaskCreateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  due_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => StateTaskTaskManagerEnums, {
    nullable: false
  })
  state!: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing";

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutTargetInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutTargetInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateNestedManyWithoutTarget_taskInput, {
    nullable: true
  })
  assignee?: AssigneeCreateNestedManyWithoutTarget_taskInput | undefined;
}
