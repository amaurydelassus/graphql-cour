import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutOwnerInput } from "../inputs/TaskCreateWithoutOwnerInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: TaskCreateWithoutOwnerInput;
}
