import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionOrderByWithRelationInput } from "../../../inputs/ActionOrderByWithRelationInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";
import { ActionScalarFieldEnum } from "../../../../enums/ActionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstActionOrThrowArgs {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  where?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ActionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: true
  })
  cursor?: ActionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "group" | "name" | "created_at" | "target_id" | "target_type"> | undefined;
}
