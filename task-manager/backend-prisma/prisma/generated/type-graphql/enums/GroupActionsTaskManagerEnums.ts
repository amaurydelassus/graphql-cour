import * as TypeGraphQL from "type-graphql";

export enum GroupActionsTaskManagerEnums {
    noUp = "no up",
    up = "up",
    admin = "admin",
}
TypeGraphQL.registerEnumType(GroupActionsTaskManagerEnums, {
    name: "GroupTaskManagerEnums",
    description: undefined,
});
