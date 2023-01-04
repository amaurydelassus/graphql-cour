import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTarget_actionInput } from "../inputs/NotificationCreateManyTarget_actionInput";

@TypeGraphQL.InputType("NotificationCreateManyTarget_actionInputEnvelope", {
  isAbstract: true
})
export class NotificationCreateManyTarget_actionInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyTarget_actionInput], {
    nullable: false
  })
  data!: NotificationCreateManyTarget_actionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
