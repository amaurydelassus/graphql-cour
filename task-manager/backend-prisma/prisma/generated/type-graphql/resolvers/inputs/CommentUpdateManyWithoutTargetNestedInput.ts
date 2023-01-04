import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyTargetInputEnvelope } from "../inputs/CommentCreateManyTargetInputEnvelope";
import { CommentCreateOrConnectWithoutTargetInput } from "../inputs/CommentCreateOrConnectWithoutTargetInput";
import { CommentCreateWithoutTargetInput } from "../inputs/CommentCreateWithoutTargetInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutTargetInput } from "../inputs/CommentUpdateManyWithWhereWithoutTargetInput";
import { CommentUpdateWithWhereUniqueWithoutTargetInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutTargetInput";
import { CommentUpsertWithWhereUniqueWithoutTargetInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutTargetInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutTargetNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutTargetNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutTargetInput], {
    nullable: true
  })
  create?: CommentCreateWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutTargetInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutTargetInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyTargetInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyTargetInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutTargetInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutTargetInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
