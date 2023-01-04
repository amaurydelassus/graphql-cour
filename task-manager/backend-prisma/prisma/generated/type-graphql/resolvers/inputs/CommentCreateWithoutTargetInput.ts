import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
import { TargetTypeActionTaskManagerEnums } from "../../enums/TargetTypeActionTaskManagerEnums";

@TypeGraphQL.InputType("CommentCreateWithoutTargetInput", {
  isAbstract: true
})
export class CommentCreateWithoutTargetInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  owner?: UserCreateNestedOneWithoutCommentsInput | undefined;

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
