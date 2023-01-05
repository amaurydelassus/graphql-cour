import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateNestedManyWithoutTarget_userInput } from "../inputs/AssigneeCreateNestedManyWithoutTarget_userInput";
import { CommentCreateNestedManyWithoutOwnerInput } from "../inputs/CommentCreateNestedManyWithoutOwnerInput";
import { NotificationCreateNestedManyWithoutTarget_userInput } from "../inputs/NotificationCreateNestedManyWithoutTarget_userInput";

@TypeGraphQL.InputType("UserCreateWithoutTasksInput", {
  isAbstract: true
})
export class UserCreateWithoutTasksInput {
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
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password_digest!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_sign_in_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  update_at!: Date;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateNestedManyWithoutTarget_userInput, {
    nullable: true
  })
  assignees?: AssigneeCreateNestedManyWithoutTarget_userInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutTarget_userInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutTarget_userInput | undefined;
}
