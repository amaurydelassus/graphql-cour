import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Assignee } from "../models/Assignee";
import { Comment } from "../models/Comment";
import { Notification } from "../models/Notification";
import { Task } from "../models/Task";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true,
  simpleResolvers: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  password?: string;

  password_digest?: string;

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

  tasks?: Task[];

  comments?: Comment[];

  assignees?: Assignee[];

  notifications?: Notification[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
