import * as TypeGraphQL from "type-graphql";
import { Assignee } from "../../../models/Assignee";
import { Comment } from "../../../models/Comment";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { TaskAssigneeArgs } from "./args/TaskAssigneeArgs";
import { TaskCommentsArgs } from "./args/TaskCommentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Assignee], {
    nullable: false
  })
  async assignee(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskAssigneeArgs): Promise<Assignee[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).assignee(args);
  }
}
