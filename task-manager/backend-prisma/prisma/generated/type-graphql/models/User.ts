import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

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
  email!: string;
  name : string;
  password?: string;
  password_digest?: string;
  last_sign_in_at : Date;
  created_at : Date;
  update_at : Date ;
}
