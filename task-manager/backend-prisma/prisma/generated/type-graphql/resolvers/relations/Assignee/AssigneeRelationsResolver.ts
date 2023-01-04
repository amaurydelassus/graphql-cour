import * as TypeGraphQL from "type-graphql";
import { Assignee } from "../../../models/Assignee";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignee)
export class AssigneeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async target_user(@TypeGraphQL.Root() assignee: Assignee, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).assignee.findUnique({
      where: {
        id: assignee.id,
      },
    }).target_user({});
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async target_task(@TypeGraphQL.Root() assignee: Assignee, @TypeGraphQL.Ctx() ctx: any): Promise<Task> {
    return getPrismaFromContext(ctx).assignee.findUnique({
      where: {
        id: assignee.id,
      },
    }).target_task({});
  }
}
