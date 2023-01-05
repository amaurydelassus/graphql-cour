import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateNestedManyWithoutTarget_userInput } from "../inputs/AssigneeCreateNestedManyWithoutTarget_userInput";
import { CommentCreateNestedManyWithoutOwnerInput } from "../inputs/CommentCreateNestedManyWithoutOwnerInput";
import { TaskCreateNestedManyWithoutOwnerInput } from "../inputs/TaskCreateNestedManyWithoutOwnerInput";

@TypeGraphQL.InputType("UserCreateWithoutNotificationsInput", {
  isAbstract: true
})
export class UserCreateWithoutNotificationsInput {
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

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateNestedManyWithoutTarget_userInput, {
    nullable: true
  })
  assignees?: AssigneeCreateNestedManyWithoutTarget_userInput | undefined;
}
