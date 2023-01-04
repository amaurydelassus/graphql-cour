import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyOwnerInputEnvelope } from "../inputs/TaskCreateManyOwnerInputEnvelope";
import { TaskCreateOrConnectWithoutOwnerInput } from "../inputs/TaskCreateOrConnectWithoutOwnerInput";
import { TaskCreateWithoutOwnerInput } from "../inputs/TaskCreateWithoutOwnerInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: TaskCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
