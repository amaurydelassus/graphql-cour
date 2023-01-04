import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutOwnerInput } from "../inputs/TaskCreateWithoutOwnerInput";
import { TaskUpdateWithoutOwnerInput } from "../inputs/TaskUpdateWithoutOwnerInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: TaskCreateWithoutOwnerInput;
}
