import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTarget_userInput } from "../inputs/AssigneeCreateManyTarget_userInput";

@TypeGraphQL.InputType("AssigneeCreateManyTarget_userInputEnvelope", {
  isAbstract: true
})
export class AssigneeCreateManyTarget_userInputEnvelope {
  @TypeGraphQL.Field(_type => [AssigneeCreateManyTarget_userInput], {
    nullable: false
  })
  data!: AssigneeCreateManyTarget_userInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
