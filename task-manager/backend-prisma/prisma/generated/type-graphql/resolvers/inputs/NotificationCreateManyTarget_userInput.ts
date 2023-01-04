import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NotificationCreateManyTarget_userInput", {
  isAbstract: true
})
export class NotificationCreateManyTarget_userInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  actionId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
