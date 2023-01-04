import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.ObjectType("CommentMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class CommentMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  owner_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_id!: string | null;

  @TypeGraphQL.Field(_type => TargetTypeActionTaskManagerEnums, {
    nullable: true
  })
  target_type!: "user" | "admin" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parent_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;
}
