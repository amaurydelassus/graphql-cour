import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  userId = "userId",
  actionId = "actionId",
  readed_at = "readed_at"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
