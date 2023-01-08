import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { signInInput } from "resolvers/input/signInInput";


@TypeGraphQL.ArgsType()
export class SignInArgs {
    @TypeGraphQL.Field(_type => signInInput, {
        nullable: false
    })
    where!: signInInput;
}
