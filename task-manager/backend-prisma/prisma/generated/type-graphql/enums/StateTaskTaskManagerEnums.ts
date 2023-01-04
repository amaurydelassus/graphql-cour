import * as TypeGraphQL from "type-graphql";

export enum StateTaskTaskManagerEnums {
  assigTask = "assigTask",
  commentInAssingTask = "commentInAssingTask",
  replayToTask = "replayToTask",
  taskEnd = "taskEnd",
  deadlineNearing = "deadlineNearing"
}
TypeGraphQL.registerEnumType(StateTaskTaskManagerEnums, {
  name: "StateTaskTaskManagerEnums",
  description: undefined,
});
