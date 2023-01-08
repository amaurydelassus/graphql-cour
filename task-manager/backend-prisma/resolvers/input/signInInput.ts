import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";

@TypeGraphQL.InputType("UserWhereUniqueInput", {
    isAbstract: true
})
export class signInInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    id?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    email?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    password?: string | undefined;
}