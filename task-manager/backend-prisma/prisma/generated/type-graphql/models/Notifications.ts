import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Notification", {
    isAbstract: true,
    simpleResolvers: true
})
export class User {
    @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
        nullable: false
    })
    id!: string;
    user_id : string;
    action_id : string;
    readed_at : Date;
}
