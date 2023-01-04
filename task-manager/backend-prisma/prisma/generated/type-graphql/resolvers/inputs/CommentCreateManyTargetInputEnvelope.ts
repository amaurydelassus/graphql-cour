import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyTargetInput } from "../inputs/CommentCreateManyTargetInput";

@TypeGraphQL.InputType("CommentCreateManyTargetInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyTargetInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyTargetInput], {
    nullable: false
  })
  data!: CommentCreateManyTargetInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
