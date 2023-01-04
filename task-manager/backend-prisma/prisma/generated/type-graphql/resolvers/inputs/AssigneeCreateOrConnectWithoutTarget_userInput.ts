import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateWithoutTarget_userInput } from "../inputs/AssigneeCreateWithoutTarget_userInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeCreateOrConnectWithoutTarget_userInput", {
  isAbstract: true
})
export class AssigneeCreateOrConnectWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeCreateWithoutTarget_userInput, {
    nullable: false
  })
  create!: AssigneeCreateWithoutTarget_userInput;
}
