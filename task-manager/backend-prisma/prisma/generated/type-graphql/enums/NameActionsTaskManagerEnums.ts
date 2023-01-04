import * as TypeGraphQL from "type-graphql";

export enum NameActionsTaskManagerEnums {
    assigTask = "Tache assigné",
    commentInAssingTask = "Un commentaire a étécrée sur une des taches",
    replayToTask = "UN commentaire a reçu une réponse",
    taskEnd = "Une tache a était réalisé",
    deadlineNearing = "Une tache est presque fini"
}
TypeGraphQL.registerEnumType(NameActionsTaskManagerEnums, {
    name: "GroupTaskManagerEnums",
    description: undefined,
});
