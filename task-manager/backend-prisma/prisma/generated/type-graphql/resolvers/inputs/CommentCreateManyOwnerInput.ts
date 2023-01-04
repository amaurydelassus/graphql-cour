import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.InputType("CommentCreateManyOwnerInput", {
  isAbstract: true
})
export class CommentCreateManyOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;
}
