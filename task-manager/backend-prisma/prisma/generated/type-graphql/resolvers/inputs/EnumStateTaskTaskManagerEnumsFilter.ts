import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStateTaskTaskManagerEnumsFilter } from "../inputs/NestedEnumStateTaskTaskManagerEnumsFilter";
import { StateTaskTaskManagerEnums } from "../../enums/StateTaskTaskManagerEnums";

@TypeGraphQL.InputType("EnumStateTaskTaskManagerEnumsFilter", {
  isAbstract: true
})
export class EnumStateTaskTaskManagerEnumsFilter {
  @TypeGraphQL.Field(_type => StateTaskTaskManagerEnums, {
    nullable: true
  })
  equals?: "assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing" | undefined;

  @TypeGraphQL.Field(_type => [StateTaskTaskManagerEnums], {
    nullable: true
  })
  in?: Array<"assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing"> | undefined;

  @TypeGraphQL.Field(_type => [StateTaskTaskManagerEnums], {
    nullable: true
  })
  notIn?: Array<"assigTask" | "commentInAssingTask" | "replayToTask" | "taskEnd" | "deadlineNearing"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStateTaskTaskManagerEnumsFilter, {
    nullable: true
  })
  not?: NestedEnumStateTaskTaskManagerEnumsFilter | undefined;
}
