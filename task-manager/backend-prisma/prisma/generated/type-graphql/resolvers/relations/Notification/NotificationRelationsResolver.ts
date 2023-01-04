import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { Notification } from "../../../models/Notification";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notification)
export class NotificationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async target_user(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).notification.findUnique({
      where: {
        id: notification.id,
      },
    }).target_user({});
  }

  @TypeGraphQL.FieldResolver(_type => Action, {
    nullable: false
  })
  async target_action(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any): Promise<Action> {
    return getPrismaFromContext(ctx).notification.findUnique({
      where: {
        id: notification.id,
      },
    }).target_action({});
  }
}
