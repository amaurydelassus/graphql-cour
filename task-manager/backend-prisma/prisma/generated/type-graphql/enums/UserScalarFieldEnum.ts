import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  password = "password",
  password_digest = "password_digest",
  last_sign_in_at = "last_sign_in_at",
  created_at = "created_at",
  update_at = "update_at"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
