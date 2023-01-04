import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStateTaskTaskManagerEnumsFilter } from "../inputs/EnumStateTaskTaskManagerEnumsFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TaskScalarWhereInput", {
  isAbstract: true
})
export class TaskScalarWhereInput {
  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  AND?: TaskScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  OR?: TaskScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  NOT?: TaskScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  owner_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  due_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStateTaskTaskManagerEnumsFilter, {
    nullable: true
  })
  state?: EnumStateTaskTaskManagerEnumsFilter | undefined;
}
