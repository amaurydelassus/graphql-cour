import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyTargetInputEnvelope } from "../inputs/CommentCreateManyTargetInputEnvelope";
import { CommentCreateOrConnectWithoutTargetInput } from "../inputs/CommentCreateOrConnectWithoutTargetInput";
import { CommentCreateWithoutTargetInput } from "../inputs/CommentCreateWithoutTargetInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutTargetInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutTargetInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutTargetInput], {
    nullable: true
  })
  create?: CommentCreateWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutTargetInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyTargetInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyTargetInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
