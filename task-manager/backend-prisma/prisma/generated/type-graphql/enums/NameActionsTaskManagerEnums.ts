import * as TypeGraphQL from "type-graphql";

export enum NameActionsTaskManagerEnums {
  assigTask = "assigTask",
  commentInAssingTask = "commentInAssingTask",
  replayToTask = "replayToTask",
  taskEnd = "taskEnd",
  deadlineNearing = "deadlineNearing"
}
TypeGraphQL.registerEnumType(NameActionsTaskManagerEnums, {
  name: "NameActionsTaskManagerEnums",
  description: undefined,
});
