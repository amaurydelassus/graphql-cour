import * as TypeGraphQL from "type-graphql";

export enum GroupActionsTaskManagerEnums {
  noUp = "noUp",
  up = "up",
  admin = "admin"
}
TypeGraphQL.registerEnumType(GroupActionsTaskManagerEnums, {
  name: "GroupActionsTaskManagerEnums",
  description: undefined,
});
