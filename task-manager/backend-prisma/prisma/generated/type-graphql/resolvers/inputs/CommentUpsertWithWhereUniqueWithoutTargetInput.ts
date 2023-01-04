import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutTargetInput } from "../inputs/CommentCreateWithoutTargetInput";
import { CommentUpdateWithoutTargetInput } from "../inputs/CommentUpdateWithoutTargetInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutTargetInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutTargetInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutTargetInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutTargetInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutTargetInput, {
    nullable: false
  })
  create!: CommentCreateWithoutTargetInput;
}
