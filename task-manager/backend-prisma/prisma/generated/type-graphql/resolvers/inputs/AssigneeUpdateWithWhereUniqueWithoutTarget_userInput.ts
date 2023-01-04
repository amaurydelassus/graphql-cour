import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeUpdateWithoutTarget_userInput } from "../inputs/AssigneeUpdateWithoutTarget_userInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateWithWhereUniqueWithoutTarget_userInput", {
  isAbstract: true
})
export class AssigneeUpdateWithWhereUniqueWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateWithoutTarget_userInput, {
    nullable: false
  })
  data!: AssigneeUpdateWithoutTarget_userInput;
}
