import { User } from "@generated/models";
import { Arg, Mutation, Resolver } from "type-graphql";
import { LoginInput } from "./inputs/LoginInput";

const bcrypt = require('bcrypt');
@Resolver()
export class LoginResolver {
    // @Mutation(() => User, { nullable: true })
    // async login(@Arg("data") { email, password }: LoginInput): Promise<User | null> {
    //     return User
    // }
}