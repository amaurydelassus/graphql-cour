import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutTargetInput } from "../inputs/CommentUpdateWithoutTargetInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutTargetInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutTargetInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutTargetInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutTargetInput;
}
