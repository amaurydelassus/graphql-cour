import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTarget_userInput } from "../inputs/NotificationCreateManyTarget_userInput";

@TypeGraphQL.InputType("NotificationCreateManyTarget_userInputEnvelope", {
  isAbstract: true
})
export class NotificationCreateManyTarget_userInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyTarget_userInput], {
    nullable: false
  })
  data!: NotificationCreateManyTarget_userInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
