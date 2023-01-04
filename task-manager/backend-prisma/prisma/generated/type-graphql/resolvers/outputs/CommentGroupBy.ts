import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentAvgAggregate } from "../outputs/CommentAvgAggregate";
import { CommentCountAggregate } from "../outputs/CommentCountAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
import { CommentSumAggregate } from "../outputs/CommentSumAggregate";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.ObjectType("CommentGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class CommentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  owner_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => TargetTypeActionTaskManagerEnums, {
    nullable: false
  })
  target_type!: "user" | "admin";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  parent_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => CommentCountAggregate, {
    nullable: true
  })
  _count!: CommentCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentAvgAggregate, {
    nullable: true
  })
  _avg!: CommentAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentSumAggregate, {
    nullable: true
  })
  _sum!: CommentSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentMinAggregate, {
    nullable: true
  })
  _min!: CommentMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentMaxAggregate, {
    nullable: true
  })
  _max!: CommentMaxAggregate | null;
}
