import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTarget_taskInput } from "../inputs/AssigneeCreateManyTarget_taskInput";

@TypeGraphQL.InputType("AssigneeCreateManyTarget_taskInputEnvelope", {
  isAbstract: true
})
export class AssigneeCreateManyTarget_taskInputEnvelope {
  @TypeGraphQL.Field(_type => [AssigneeCreateManyTarget_taskInput], {
    nullable: false
  })
  data!: AssigneeCreateManyTarget_taskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
