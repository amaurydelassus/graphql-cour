import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyMutationInput } from "../inputs/NotificationUpdateManyMutationInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithWhereWithoutTarget_userInput", {
  isAbstract: true
})
export class NotificationUpdateManyWithWhereWithoutTarget_userInput {
  @TypeGraphQL.Field(_type => NotificationScalarWhereInput, {
    nullable: false
  })
  where!: NotificationScalarWhereInput;

  @TypeGraphQL.Field(_type => NotificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: NotificationUpdateManyMutationInput;
}
