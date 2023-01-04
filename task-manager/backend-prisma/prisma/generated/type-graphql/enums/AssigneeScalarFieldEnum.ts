import * as TypeGraphQL from "type-graphql";

export enum AssigneeScalarFieldEnum {
  id = "id",
  userId = "userId",
  taskId = "taskId",
  created_at = "created_at"
}
TypeGraphQL.registerEnumType(AssigneeScalarFieldEnum, {
  name: "AssigneeScalarFieldEnum",
  description: undefined,
});
