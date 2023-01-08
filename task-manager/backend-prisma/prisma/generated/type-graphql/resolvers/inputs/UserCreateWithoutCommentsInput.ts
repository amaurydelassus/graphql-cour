import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateNestedManyWithoutTarget_userInput } from "../inputs/AssigneeCreateNestedManyWithoutTarget_userInput";
import { NotificationCreateNestedManyWithoutTarget_userInput } from "../inputs/NotificationCreateNestedManyWithoutTarget_userInput";
import { TaskCreateNestedManyWithoutOwnerInput } from "../inputs/TaskCreateNestedManyWithoutOwnerInput";

@TypeGraphQL.InputType("UserCreateWithoutCommentsInput", {
  isAbstract: true
})
export class UserCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password_digest?: string | undefined;

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

  @TypeGraphQL.Field(_type => AssigneeCreateNestedManyWithoutTarget_userInput, {
    nullable: true
  })
  assignees?: AssigneeCreateNestedManyWithoutTarget_userInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutTarget_userInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutTarget_userInput | undefined;
}
