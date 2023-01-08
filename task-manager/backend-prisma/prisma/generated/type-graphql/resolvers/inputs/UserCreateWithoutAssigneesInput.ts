import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutOwnerInput } from "../inputs/CommentCreateNestedManyWithoutOwnerInput";
import { NotificationCreateNestedManyWithoutTarget_userInput } from "../inputs/NotificationCreateNestedManyWithoutTarget_userInput";
import { TaskCreateNestedManyWithoutOwnerInput } from "../inputs/TaskCreateNestedManyWithoutOwnerInput";

@TypeGraphQL.InputType("UserCreateWithoutAssigneesInput", {
  isAbstract: true
})
export class UserCreateWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password_digest!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_sign_in_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  update_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutTarget_userInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutTarget_userInput | undefined;
}
