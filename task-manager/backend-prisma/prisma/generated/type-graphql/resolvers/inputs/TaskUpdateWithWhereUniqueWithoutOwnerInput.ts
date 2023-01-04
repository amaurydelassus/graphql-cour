import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutOwnerInput } from "../inputs/TaskUpdateWithoutOwnerInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutOwnerInput;
}
