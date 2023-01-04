import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GroupActionsTaskManagerEnums } from "../enums/GroupActionsTaskManagerEnums";
import { NameActionsTaskManagerEnums } from "../enums/NameActionsTaskManagerEnums";
import { TargetTypeActionTaskManagerEnums } from "../enums/TargetTypeActionTaskMAnagerEnums";

@TypeGraphQL.ObjectType("Assignees", {
    isAbstract: true,
    simpleResolvers: true,
})
export class User {
    @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
        nullable: false
    })
    id!: string;
    @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
        nullable: false
    })
    task_id!: string;
    @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
        nullable: false
    })
    user_id!: string;
    created_at : Date;


}


