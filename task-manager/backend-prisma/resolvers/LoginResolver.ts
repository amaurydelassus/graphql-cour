import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserOrThrowArgs, CreateOneUserArgs, User } from "@generated/index";
import {getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "@generated/helpers";
import { prisma } from "@prisma/client";
import { hash, compare } from 'bcrypt';
const bcrypt = require('bcrypt');
@TypeGraphQL.Resolver()
export class LoginResolver {
    @TypeGraphQL.Mutation(_returns => User, {
        nullable: false
    })
    async signIn(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Info() info: GraphQLResolveInfo,
        @TypeGraphQL.Args() args: CreateOneUserArgs
    ): Promise<User> {
        // Find the user with the provided email
        const { _count } = transformInfoIntoPrismaArgs(info);

        const user = await getPrismaFromContext(ctx).user.findUniqueOrThrow({
            "where": {
                "email": args.data.email
            }
        });

        console.log(user)

        // If no user was found, throw an error
        if (!user) {
            throw new Error('Invalid email')
        }

        // Compare the provided password with the hashed password stored in the database

        const passwordValid = await compare(args.data.password, user.password)

        // If the password is invalid, throw an error
        if (!passwordValid) {
            throw new Error('Invalid password')
        }

        return  user
    }


    @TypeGraphQL.Mutation(_returns => User, {
        nullable: false
    })
    async signUp(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Info() info: GraphQLResolveInfo,
        @TypeGraphQL.Args() args: CreateOneUserArgs
    ): Promise<User> {
        // Hash the user's password
        const password = await hash(args.data.password,10)
        args.data.password = password
        args.data.password_digest = password
        // Create the user with the hashed password
        const { _count } = transformInfoIntoPrismaArgs(info)
        return getPrismaFromContext(ctx).user.create({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        })
    }
}