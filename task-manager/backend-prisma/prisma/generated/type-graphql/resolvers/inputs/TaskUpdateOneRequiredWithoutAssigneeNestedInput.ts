import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutAssigneeInput } from "../inputs/TaskCreateOrConnectWithoutAssigneeInput";
import { TaskCreateWithoutAssigneeInput } from "../inputs/TaskCreateWithoutAssigneeInput";
import { TaskUpdateWithoutAssigneeInput } from "../inputs/TaskUpdateWithoutAssigneeInput";
import { TaskUpsertWithoutAssigneeInput } from "../inputs/TaskUpsertWithoutAssigneeInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutAssigneeNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneRequiredWithoutAssigneeNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutAssigneeInput, {
    nullable: true
  })
  create?: TaskCreateWithoutAssigneeInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutAssigneeInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutAssigneeInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutAssigneeInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutAssigneeInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutAssigneeInput | undefined;
}
