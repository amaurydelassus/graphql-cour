import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GroupActionsTaskManagerEnums } from "../enums/GroupActionsTaskManagerEnums";
import { NameActionsTaskManagerEnums } from "../enums/NameActionsTaskManagerEnums";
import { TargetTypeActionTaskManagerEnums } from "../enums/TargetTypeActionTaskMAnagerEnums";

@TypeGraphQL.ObjectType("Tasks", {
    isAbstract: true,
    simpleResolvers: true
})
export class Tasks {
    @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
        nullable: false
    })
    id!: string;
    owner_id? : string;
    target_id : string;
    parent_id :string;
    content : string;
    created_at : Date;
    update_att : Date;
}
