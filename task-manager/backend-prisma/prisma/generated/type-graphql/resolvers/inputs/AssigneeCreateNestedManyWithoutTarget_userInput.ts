import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTarget_userInputEnvelope } from "../inputs/AssigneeCreateManyTarget_userInputEnvelope";
import { AssigneeCreateOrConnectWithoutTarget_userInput } from "../inputs/AssigneeCreateOrConnectWithoutTarget_userInput";
import { AssigneeCreateWithoutTarget_userInput } from "../inputs/AssigneeCreateWithoutTarget_userInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeCreateNestedManyWithoutTarget_userInput", {
  isAbstract: true
})
export class AssigneeCreateNestedManyWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutTarget_userInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutTarget_userInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyTarget_userInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyTarget_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneeWhereUniqueInput[] | undefined;
}
