import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTarget_userInputEnvelope } from "../inputs/AssigneeCreateManyTarget_userInputEnvelope";
import { AssigneeCreateOrConnectWithoutTarget_userInput } from "../inputs/AssigneeCreateOrConnectWithoutTarget_userInput";
import { AssigneeCreateWithoutTarget_userInput } from "../inputs/AssigneeCreateWithoutTarget_userInput";
import { AssigneeScalarWhereInput } from "../inputs/AssigneeScalarWhereInput";
import { AssigneeUpdateManyWithWhereWithoutTarget_userInput } from "../inputs/AssigneeUpdateManyWithWhereWithoutTarget_userInput";
import { AssigneeUpdateWithWhereUniqueWithoutTarget_userInput } from "../inputs/AssigneeUpdateWithWhereUniqueWithoutTarget_userInput";
import { AssigneeUpsertWithWhereUniqueWithoutTarget_userInput } from "../inputs/AssigneeUpsertWithWhereUniqueWithoutTarget_userInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateManyWithoutTarget_userNestedInput", {
  isAbstract: true
})
export class AssigneeUpdateManyWithoutTarget_userNestedInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutTarget_userInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutTarget_userInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpsertWithWhereUniqueWithoutTarget_userInput], {
    nullable: true
  })
  upsert?: AssigneeUpsertWithWhereUniqueWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyTarget_userInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyTarget_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  set?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  delete?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpdateWithWhereUniqueWithoutTarget_userInput], {
    nullable: true
  })
  update?: AssigneeUpdateWithWhereUniqueWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpdateManyWithWhereWithoutTarget_userInput], {
    nullable: true
  })
  updateMany?: AssigneeUpdateManyWithWhereWithoutTarget_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssigneeScalarWhereInput[] | undefined;
}
