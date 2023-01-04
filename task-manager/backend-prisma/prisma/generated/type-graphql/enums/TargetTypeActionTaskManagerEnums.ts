import * as TypeGraphQL from "type-graphql";

export enum TargetTypeActionTaskManagerEnums {
  user = "user",
  admin = "admin"
}
TypeGraphQL.registerEnumType(TargetTypeActionTaskManagerEnums, {
  name: "TargetTypeActionTaskManagerEnums",
  description: undefined,
});
