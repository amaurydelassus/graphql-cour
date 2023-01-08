import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Notification: crudResolvers.NotificationCrudResolver,
  Assignee: crudResolvers.AssigneeCrudResolver,
  Action: crudResolvers.ActionCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  Task: crudResolvers.TaskCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Notification: {
    aggregateNotification: actionResolvers.AggregateNotificationResolver,
    createManyNotification: actionResolvers.CreateManyNotificationResolver,
    createOneNotification: actionResolvers.CreateOneNotificationResolver,
    deleteManyNotification: actionResolvers.DeleteManyNotificationResolver,
    deleteOneNotification: actionResolvers.DeleteOneNotificationResolver,
    findFirstNotification: actionResolvers.FindFirstNotificationResolver,
    findFirstNotificationOrThrow: actionResolvers.FindFirstNotificationOrThrowResolver,
    notifications: actionResolvers.FindManyNotificationResolver,
    notification: actionResolvers.FindUniqueNotificationResolver,
    getNotification: actionResolvers.FindUniqueNotificationOrThrowResolver,
    groupByNotification: actionResolvers.GroupByNotificationResolver,
    updateManyNotification: actionResolvers.UpdateManyNotificationResolver,
    updateOneNotification: actionResolvers.UpdateOneNotificationResolver,
    upsertOneNotification: actionResolvers.UpsertOneNotificationResolver
  },
  Assignee: {
    aggregateAssignee: actionResolvers.AggregateAssigneeResolver,
    createManyAssignee: actionResolvers.CreateManyAssigneeResolver,
    createOneAssignee: actionResolvers.CreateOneAssigneeResolver,
    deleteManyAssignee: actionResolvers.DeleteManyAssigneeResolver,
    deleteOneAssignee: actionResolvers.DeleteOneAssigneeResolver,
    findFirstAssignee: actionResolvers.FindFirstAssigneeResolver,
    findFirstAssigneeOrThrow: actionResolvers.FindFirstAssigneeOrThrowResolver,
    assignees: actionResolvers.FindManyAssigneeResolver,
    assignee: actionResolvers.FindUniqueAssigneeResolver,
    getAssignee: actionResolvers.FindUniqueAssigneeOrThrowResolver,
    groupByAssignee: actionResolvers.GroupByAssigneeResolver,
    updateManyAssignee: actionResolvers.UpdateManyAssigneeResolver,
    updateOneAssignee: actionResolvers.UpdateOneAssigneeResolver,
    upsertOneAssignee: actionResolvers.UpsertOneAssigneeResolver
  },
  Action: {
    aggregateAction: actionResolvers.AggregateActionResolver,
    createManyAction: actionResolvers.CreateManyActionResolver,
    createOneAction: actionResolvers.CreateOneActionResolver,
    deleteManyAction: actionResolvers.DeleteManyActionResolver,
    deleteOneAction: actionResolvers.DeleteOneActionResolver,
    findFirstAction: actionResolvers.FindFirstActionResolver,
    findFirstActionOrThrow: actionResolvers.FindFirstActionOrThrowResolver,
    actions: actionResolvers.FindManyActionResolver,
    action: actionResolvers.FindUniqueActionResolver,
    getAction: actionResolvers.FindUniqueActionOrThrowResolver,
    groupByAction: actionResolvers.GroupByActionResolver,
    updateManyAction: actionResolvers.UpdateManyActionResolver,
    updateOneAction: actionResolvers.UpdateOneActionResolver,
    upsertOneAction: actionResolvers.UpsertOneActionResolver
  },
  Comment: {
    aggregateComment: actionResolvers.AggregateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    createOneComment: actionResolvers.CreateOneCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    deleteOneComment: actionResolvers.DeleteOneCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
    comments: actionResolvers.FindManyCommentResolver,
    comment: actionResolvers.FindUniqueCommentResolver,
    getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
    groupByComment: actionResolvers.GroupByCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    updateOneComment: actionResolvers.UpdateOneCommentResolver,
    upsertOneComment: actionResolvers.UpsertOneCommentResolver
  },
  Task: {
    aggregateTask: actionResolvers.AggregateTaskResolver,
    createManyTask: actionResolvers.CreateManyTaskResolver,
    createOneTask: actionResolvers.CreateOneTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    deleteOneTask: actionResolvers.DeleteOneTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    findFirstTaskOrThrow: actionResolvers.FindFirstTaskOrThrowResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    task: actionResolvers.FindUniqueTaskResolver,
    getTask: actionResolvers.FindUniqueTaskOrThrowResolver,
    groupByTask: actionResolvers.GroupByTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    updateOneTask: actionResolvers.UpdateOneTaskResolver,
    upsertOneTask: actionResolvers.UpsertOneTaskResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Notification: ["aggregateNotification", "createManyNotification", "createOneNotification", "deleteManyNotification", "deleteOneNotification", "findFirstNotification", "findFirstNotificationOrThrow", "notifications", "notification", "getNotification", "groupByNotification", "updateManyNotification", "updateOneNotification", "upsertOneNotification"],
  Assignee: ["aggregateAssignee", "createManyAssignee", "createOneAssignee", "deleteManyAssignee", "deleteOneAssignee", "findFirstAssignee", "findFirstAssigneeOrThrow", "assignees", "assignee", "getAssignee", "groupByAssignee", "updateManyAssignee", "updateOneAssignee", "upsertOneAssignee"],
  Action: ["aggregateAction", "createManyAction", "createOneAction", "deleteManyAction", "deleteOneAction", "findFirstAction", "findFirstActionOrThrow", "actions", "action", "getAction", "groupByAction", "updateManyAction", "updateOneAction", "upsertOneAction"],
  Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
  Task: ["aggregateTask", "createManyTask", "createOneTask", "deleteManyTask", "deleteOneTask", "findFirstTask", "findFirstTaskOrThrow", "tasks", "task", "getTask", "groupByTask", "updateManyTask", "updateOneTask", "upsertOneTask"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyNotificationArgs: ["data", "skipDuplicates"],
  CreateOneNotificationArgs: ["data"],
  DeleteManyNotificationArgs: ["where"],
  DeleteOneNotificationArgs: ["where"],
  FindFirstNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstNotificationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueNotificationArgs: ["where"],
  FindUniqueNotificationOrThrowArgs: ["where"],
  GroupByNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyNotificationArgs: ["data", "where"],
  UpdateOneNotificationArgs: ["data", "where"],
  UpsertOneNotificationArgs: ["where", "create", "update"],
  AggregateAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAssigneeArgs: ["data", "skipDuplicates"],
  CreateOneAssigneeArgs: ["data"],
  DeleteManyAssigneeArgs: ["where"],
  DeleteOneAssigneeArgs: ["where"],
  FindFirstAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAssigneeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAssigneeArgs: ["where"],
  FindUniqueAssigneeOrThrowArgs: ["where"],
  GroupByAssigneeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAssigneeArgs: ["data", "where"],
  UpdateOneAssigneeArgs: ["data", "where"],
  UpsertOneAssigneeArgs: ["where", "create", "update"],
  AggregateActionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyActionArgs: ["data", "skipDuplicates"],
  CreateOneActionArgs: ["data"],
  DeleteManyActionArgs: ["where"],
  DeleteOneActionArgs: ["where"],
  FindFirstActionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstActionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueActionArgs: ["where"],
  FindUniqueActionOrThrowArgs: ["where"],
  GroupByActionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyActionArgs: ["data", "where"],
  UpdateOneActionArgs: ["data", "where"],
  UpsertOneActionArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  CreateOneCommentArgs: ["data"],
  DeleteManyCommentArgs: ["where"],
  DeleteOneCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentArgs: ["where"],
  FindUniqueCommentOrThrowArgs: ["where"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentArgs: ["data", "where"],
  UpdateOneCommentArgs: ["data", "where"],
  UpsertOneCommentArgs: ["where", "create", "update"],
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTaskArgs: ["data", "skipDuplicates"],
  CreateOneTaskArgs: ["data"],
  DeleteManyTaskArgs: ["where"],
  DeleteOneTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTaskOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTaskArgs: ["where"],
  FindUniqueTaskOrThrowArgs: ["where"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTaskArgs: ["data", "where"],
  UpdateOneTaskArgs: ["data", "where"],
  UpsertOneTaskArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Notification: relationResolvers.NotificationRelationsResolver,
  Assignee: relationResolvers.AssigneeRelationsResolver,
  Action: relationResolvers.ActionRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  Task: relationResolvers.TaskRelationsResolver
};
const relationResolversInfo = {
  User: ["tasks", "comments", "assignees", "notifications"],
  Notification: ["target_user", "target_action"],
  Assignee: ["target_user", "target_task"],
  Action: ["notifications"],
  Comment: ["owner", "target"],
  Task: ["owner", "comments", "assignee"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "name", "email", "last_sign_in_at", "created_at", "update_at"],
  Notification: ["id", "userId", "actionId", "readed_at"],
  Assignee: ["id", "userId", "taskId", "created_at"],
  Action: ["id", "group", "name", "created_at", "target_id", "target_type"],
  Comment: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  Task: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "_count", "_min", "_max"],
  AggregateNotification: ["_count", "_min", "_max"],
  NotificationGroupBy: ["id", "userId", "actionId", "readed_at", "_count", "_min", "_max"],
  AggregateAssignee: ["_count", "_min", "_max"],
  AssigneeGroupBy: ["id", "userId", "taskId", "created_at", "_count", "_min", "_max"],
  AggregateAction: ["_count", "_min", "_max"],
  ActionGroupBy: ["id", "group", "name", "created_at", "target_id", "target_type", "_count", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTask: ["_count", "_min", "_max"],
  TaskGroupBy: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["tasks", "comments", "assignees", "notifications"],
  UserCountAggregate: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "_all"],
  UserMinAggregate: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  UserMaxAggregate: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  NotificationCountAggregate: ["id", "userId", "actionId", "readed_at", "_all"],
  NotificationMinAggregate: ["id", "userId", "actionId", "readed_at"],
  NotificationMaxAggregate: ["id", "userId", "actionId", "readed_at"],
  AssigneeCountAggregate: ["id", "userId", "taskId", "created_at", "_all"],
  AssigneeMinAggregate: ["id", "userId", "taskId", "created_at"],
  AssigneeMaxAggregate: ["id", "userId", "taskId", "created_at"],
  ActionCount: ["notifications"],
  ActionCountAggregate: ["id", "group", "name", "created_at", "target_id", "target_type", "_all"],
  ActionMinAggregate: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionMaxAggregate: ["id", "group", "name", "created_at", "target_id", "target_type"],
  CommentCountAggregate: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_all"],
  CommentAvgAggregate: ["parent_id"],
  CommentSumAggregate: ["parent_id"],
  CommentMinAggregate: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentMaxAggregate: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  TaskCount: ["comments", "assignee"],
  TaskCountAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_all"],
  TaskMinAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskMaxAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "assignees", "notifications"],
  UserOrderByWithRelationInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "assignees", "notifications"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "target_user", "userId", "target_action", "actionId", "readed_at"],
  NotificationOrderByWithRelationInput: ["id", "target_user", "userId", "target_action", "actionId", "readed_at"],
  NotificationWhereUniqueInput: ["id"],
  NotificationOrderByWithAggregationInput: ["id", "userId", "actionId", "readed_at", "_count", "_max", "_min"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "actionId", "readed_at"],
  AssigneeWhereInput: ["AND", "OR", "NOT", "id", "target_user", "userId", "target_task", "taskId", "created_at"],
  AssigneeOrderByWithRelationInput: ["id", "target_user", "userId", "target_task", "taskId", "created_at"],
  AssigneeWhereUniqueInput: ["id"],
  AssigneeOrderByWithAggregationInput: ["id", "userId", "taskId", "created_at", "_count", "_max", "_min"],
  AssigneeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "taskId", "created_at"],
  ActionWhereInput: ["AND", "OR", "NOT", "id", "group", "name", "created_at", "target_id", "target_type", "notifications"],
  ActionOrderByWithRelationInput: ["id", "group", "name", "created_at", "target_id", "target_type", "notifications"],
  ActionWhereUniqueInput: ["id"],
  ActionOrderByWithAggregationInput: ["id", "group", "name", "created_at", "target_id", "target_type", "_count", "_max", "_min"],
  ActionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "group", "name", "created_at", "target_id", "target_type"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "owner", "owner_id", "target", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentOrderByWithRelationInput: ["id", "owner", "owner_id", "target", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  TaskWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "owner", "owner_id", "due_at", "created_at", "updated_at", "state", "comments", "assignee"],
  TaskOrderByWithRelationInput: ["id", "title", "description", "owner", "owner_id", "due_at", "created_at", "updated_at", "state", "comments", "assignee"],
  TaskWhereUniqueInput: ["id"],
  TaskOrderByWithAggregationInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_count", "_max", "_min"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  UserCreateInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "assignees", "notifications"],
  UserUpdateInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "assignees", "notifications"],
  UserCreateManyInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  UserUpdateManyMutationInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  NotificationCreateInput: ["id", "target_user", "target_action", "readed_at"],
  NotificationUpdateInput: ["id", "target_user", "target_action", "readed_at"],
  NotificationCreateManyInput: ["id", "userId", "actionId", "readed_at"],
  NotificationUpdateManyMutationInput: ["id", "readed_at"],
  AssigneeCreateInput: ["id", "target_user", "target_task", "created_at"],
  AssigneeUpdateInput: ["id", "target_user", "target_task", "created_at"],
  AssigneeCreateManyInput: ["id", "userId", "taskId", "created_at"],
  AssigneeUpdateManyMutationInput: ["id", "created_at"],
  ActionCreateInput: ["id", "group", "name", "created_at", "target_id", "target_type", "notifications"],
  ActionUpdateInput: ["id", "group", "name", "created_at", "target_id", "target_type", "notifications"],
  ActionCreateManyInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionUpdateManyMutationInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  CommentCreateInput: ["id", "owner", "target", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentUpdateInput: ["id", "owner", "target", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentCreateManyInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentUpdateManyMutationInput: ["id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  TaskCreateInput: ["id", "title", "description", "owner", "due_at", "created_at", "updated_at", "state", "comments", "assignee"],
  TaskUpdateInput: ["id", "title", "description", "owner", "due_at", "created_at", "updated_at", "state", "comments", "assignee"],
  TaskCreateManyInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskUpdateManyMutationInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TaskListRelationFilter: ["every", "some", "none"],
  CommentListRelationFilter: ["every", "some", "none"],
  AssigneeListRelationFilter: ["every", "some", "none"],
  NotificationListRelationFilter: ["every", "some", "none"],
  TaskOrderByRelationAggregateInput: ["_count"],
  CommentOrderByRelationAggregateInput: ["_count"],
  AssigneeOrderByRelationAggregateInput: ["_count"],
  NotificationOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  ActionRelationFilter: ["is", "isNot"],
  NotificationCountOrderByAggregateInput: ["id", "userId", "actionId", "readed_at"],
  NotificationMaxOrderByAggregateInput: ["id", "userId", "actionId", "readed_at"],
  NotificationMinOrderByAggregateInput: ["id", "userId", "actionId", "readed_at"],
  TaskRelationFilter: ["is", "isNot"],
  AssigneeCountOrderByAggregateInput: ["id", "userId", "taskId", "created_at"],
  AssigneeMaxOrderByAggregateInput: ["id", "userId", "taskId", "created_at"],
  AssigneeMinOrderByAggregateInput: ["id", "userId", "taskId", "created_at"],
  EnumGroupActionsTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  EnumNameActionsTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  EnumTargetTypeActionTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  ActionCountOrderByAggregateInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionMaxOrderByAggregateInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionMinOrderByAggregateInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  EnumGroupActionsTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumNameActionsTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumTargetTypeActionTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CommentCountOrderByAggregateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentAvgOrderByAggregateInput: ["parent_id"],
  CommentMaxOrderByAggregateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentMinOrderByAggregateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentSumOrderByAggregateInput: ["parent_id"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumStateTaskTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  TaskCountOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskMaxOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskMinOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  EnumStateTaskTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  TaskCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssigneeCreateNestedManyWithoutTarget_userInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutTarget_userInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  TaskUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssigneeUpdateManyWithoutTarget_userNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutTarget_userNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  ActionCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActionUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutAssigneesInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutAssigneeInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutAssigneesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TaskUpdateOneRequiredWithoutAssigneeNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NotificationCreateNestedManyWithoutTarget_actionInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumGroupActionsTaskManagerEnumsFieldUpdateOperationsInput: ["set"],
  EnumNameActionsTaskManagerEnumsFieldUpdateOperationsInput: ["set"],
  EnumTargetTypeActionTaskManagerEnumsFieldUpdateOperationsInput: ["set"],
  NotificationUpdateManyWithoutTarget_actionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutTargetInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssigneeCreateNestedManyWithoutTarget_taskInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumStateTaskTaskManagerEnumsFieldUpdateOperationsInput: ["set"],
  CommentUpdateManyWithoutTargetNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssigneeUpdateManyWithoutTarget_taskNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumGroupActionsTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  NestedEnumNameActionsTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTargetTypeActionTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  NestedEnumGroupActionsTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumNameActionsTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTargetTypeActionTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumStateTaskTaskManagerEnumsFilter: ["equals", "in", "notIn", "not"],
  NestedEnumStateTaskTaskManagerEnumsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  TaskCreateWithoutOwnerInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state", "comments", "assignee"],
  TaskCreateOrConnectWithoutOwnerInput: ["where", "create"],
  TaskCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutOwnerInput: ["id", "target", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentCreateOrConnectWithoutOwnerInput: ["where", "create"],
  CommentCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  AssigneeCreateWithoutTarget_userInput: ["id", "target_task", "created_at"],
  AssigneeCreateOrConnectWithoutTarget_userInput: ["where", "create"],
  AssigneeCreateManyTarget_userInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutTarget_userInput: ["id", "target_action", "readed_at"],
  NotificationCreateOrConnectWithoutTarget_userInput: ["where", "create"],
  NotificationCreateManyTarget_userInputEnvelope: ["data", "skipDuplicates"],
  TaskUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  CommentUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneeUpsertWithWhereUniqueWithoutTarget_userInput: ["where", "update", "create"],
  AssigneeUpdateWithWhereUniqueWithoutTarget_userInput: ["where", "data"],
  AssigneeUpdateManyWithWhereWithoutTarget_userInput: ["where", "data"],
  AssigneeScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "taskId", "created_at"],
  NotificationUpsertWithWhereUniqueWithoutTarget_userInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutTarget_userInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutTarget_userInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "actionId", "readed_at"],
  UserCreateWithoutNotificationsInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "assignees"],
  UserCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  ActionCreateWithoutNotificationsInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UserUpsertWithoutNotificationsInput: ["update", "create"],
  UserUpdateWithoutNotificationsInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "assignees"],
  ActionUpsertWithoutNotificationsInput: ["update", "create"],
  ActionUpdateWithoutNotificationsInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  UserCreateWithoutAssigneesInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "notifications"],
  UserCreateOrConnectWithoutAssigneesInput: ["where", "create"],
  TaskCreateWithoutAssigneeInput: ["id", "title", "description", "owner", "due_at", "created_at", "updated_at", "state", "comments"],
  TaskCreateOrConnectWithoutAssigneeInput: ["where", "create"],
  UserUpsertWithoutAssigneesInput: ["update", "create"],
  UserUpdateWithoutAssigneesInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "comments", "notifications"],
  TaskUpsertWithoutAssigneeInput: ["update", "create"],
  TaskUpdateWithoutAssigneeInput: ["id", "title", "description", "owner", "due_at", "created_at", "updated_at", "state", "comments"],
  NotificationCreateWithoutTarget_actionInput: ["id", "target_user", "readed_at"],
  NotificationCreateOrConnectWithoutTarget_actionInput: ["where", "create"],
  NotificationCreateManyTarget_actionInputEnvelope: ["data", "skipDuplicates"],
  NotificationUpsertWithWhereUniqueWithoutTarget_actionInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutTarget_actionInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutTarget_actionInput: ["where", "data"],
  UserCreateWithoutCommentsInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "assignees", "notifications"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  TaskCreateWithoutCommentsInput: ["id", "title", "description", "owner", "due_at", "created_at", "updated_at", "state", "assignee"],
  TaskCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create"],
  UserUpdateWithoutCommentsInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "tasks", "assignees", "notifications"],
  TaskUpsertWithoutCommentsInput: ["update", "create"],
  TaskUpdateWithoutCommentsInput: ["id", "title", "description", "owner", "due_at", "created_at", "updated_at", "state", "assignee"],
  UserCreateWithoutTasksInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "comments", "assignees", "notifications"],
  UserCreateOrConnectWithoutTasksInput: ["where", "create"],
  CommentCreateWithoutTargetInput: ["id", "owner", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentCreateOrConnectWithoutTargetInput: ["where", "create"],
  CommentCreateManyTargetInputEnvelope: ["data", "skipDuplicates"],
  AssigneeCreateWithoutTarget_taskInput: ["id", "target_user", "created_at"],
  AssigneeCreateOrConnectWithoutTarget_taskInput: ["where", "create"],
  AssigneeCreateManyTarget_taskInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutTasksInput: ["update", "create"],
  UserUpdateWithoutTasksInput: ["id", "name", "email", "password", "password_digest", "last_sign_in_at", "created_at", "update_at", "comments", "assignees", "notifications"],
  CommentUpsertWithWhereUniqueWithoutTargetInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutTargetInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutTargetInput: ["where", "data"],
  AssigneeUpsertWithWhereUniqueWithoutTarget_taskInput: ["where", "update", "create"],
  AssigneeUpdateWithWhereUniqueWithoutTarget_taskInput: ["where", "data"],
  AssigneeUpdateManyWithWhereWithoutTarget_taskInput: ["where", "data"],
  TaskCreateManyOwnerInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state"],
  CommentCreateManyOwnerInput: ["id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneeCreateManyTarget_userInput: ["id", "taskId", "created_at"],
  NotificationCreateManyTarget_userInput: ["id", "actionId", "readed_at"],
  TaskUpdateWithoutOwnerInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state", "comments", "assignee"],
  CommentUpdateWithoutOwnerInput: ["id", "target", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneeUpdateWithoutTarget_userInput: ["id", "target_task", "created_at"],
  NotificationUpdateWithoutTarget_userInput: ["id", "target_action", "readed_at"],
  NotificationCreateManyTarget_actionInput: ["id", "userId", "readed_at"],
  NotificationUpdateWithoutTarget_actionInput: ["id", "target_user", "readed_at"],
  CommentCreateManyTargetInput: ["id", "owner_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneeCreateManyTarget_taskInput: ["id", "userId", "created_at"],
  CommentUpdateWithoutTargetInput: ["id", "owner", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneeUpdateWithoutTarget_taskInput: ["id", "target_user", "created_at"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

