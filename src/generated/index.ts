import { gql } from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateAnswer = {
  __typename?: 'AggregateAnswer';
  _avg?: Maybe<AnswerAvgAggregateOutputType>;
  _count?: Maybe<AnswerCountAggregateOutputType>;
  _max?: Maybe<AnswerMaxAggregateOutputType>;
  _min?: Maybe<AnswerMinAggregateOutputType>;
  _sum?: Maybe<AnswerSumAggregateOutputType>;
};

export type AggregateQuestion = {
  __typename?: 'AggregateQuestion';
  _avg?: Maybe<QuestionAvgAggregateOutputType>;
  _count?: Maybe<QuestionCountAggregateOutputType>;
  _max?: Maybe<QuestionMaxAggregateOutputType>;
  _min?: Maybe<QuestionMinAggregateOutputType>;
  _sum?: Maybe<QuestionSumAggregateOutputType>;
};

export type AggregateTest = {
  __typename?: 'AggregateTest';
  _avg?: Maybe<TestAvgAggregateOutputType>;
  _count?: Maybe<TestCountAggregateOutputType>;
  _max?: Maybe<TestMaxAggregateOutputType>;
  _min?: Maybe<TestMinAggregateOutputType>;
  _sum?: Maybe<TestSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['Int'];
  isRigth: Scalars['Boolean'];
  user: User;
  userId: Scalars['Int'];
};

export type AnswerAvgAggregateOutputType = {
  __typename?: 'AnswerAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type AnswerAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AnswerCountAggregateOutputType = {
  __typename?: 'AnswerCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  isRigth: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AnswerCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  isRigth?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AnswerCreateInput = {
  isRigth: Scalars['Boolean'];
  user: UserCreateNestedOneWithoutAnswersInput;
};

export type AnswerCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  isRigth: Scalars['Boolean'];
  userId: Scalars['Int'];
};

export type AnswerCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  isRigth: Scalars['Boolean'];
};

export type AnswerCreateManyUserInputEnvelope = {
  data: AnswerCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AnswerCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutUserInput>>>;
  createMany?: Maybe<AnswerCreateManyUserInputEnvelope>;
};

export type AnswerCreateOrConnectWithoutUserInput = {
  create: AnswerUncheckedCreateWithoutUserInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateWithoutUserInput = {
  isRigth: Scalars['Boolean'];
};

export type AnswerListRelationFilter = {
  every?: Maybe<AnswerWhereInput>;
  none?: Maybe<AnswerWhereInput>;
  some?: Maybe<AnswerWhereInput>;
};

export type AnswerMaxAggregateOutputType = {
  __typename?: 'AnswerMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  isRigth?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AnswerMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  isRigth?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AnswerMinAggregateOutputType = {
  __typename?: 'AnswerMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  isRigth?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AnswerMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  isRigth?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AnswerOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type AnswerOrderByWithAggregationInput = {
  _avg?: Maybe<AnswerAvgOrderByAggregateInput>;
  _count?: Maybe<AnswerCountOrderByAggregateInput>;
  _max?: Maybe<AnswerMaxOrderByAggregateInput>;
  _min?: Maybe<AnswerMinOrderByAggregateInput>;
  _sum?: Maybe<AnswerSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  isRigth?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AnswerOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  isRigth?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  userId?: Maybe<SortOrder>;
};

export enum AnswerScalarFieldEnum {
  Id = 'id',
  IsRigth = 'isRigth',
  UserId = 'userId'
}

export type AnswerScalarWhereInput = {
  AND?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  id?: Maybe<IntFilter>;
  isRigth?: Maybe<BoolFilter>;
  userId?: Maybe<IntFilter>;
};

export type AnswerScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<AnswerScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<AnswerScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<AnswerScalarWhereWithAggregatesInput>>>;
  id?: Maybe<IntWithAggregatesFilter>;
  isRigth?: Maybe<BoolWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type AnswerSumAggregateOutputType = {
  __typename?: 'AnswerSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AnswerSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AnswerUncheckedCreateInput = {
  id?: Maybe<Scalars['Int']>;
  isRigth: Scalars['Boolean'];
  userId: Scalars['Int'];
};

export type AnswerUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutUserInput>>>;
  createMany?: Maybe<AnswerCreateManyUserInputEnvelope>;
};

export type AnswerUncheckedCreateWithoutUserInput = {
  id?: Maybe<Scalars['Int']>;
  isRigth: Scalars['Boolean'];
};

export type AnswerUncheckedUpdateInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isRigth?: Maybe<BoolFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isRigth?: Maybe<BoolFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutAnswersInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isRigth?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutUserInput>>>;
  createMany?: Maybe<AnswerCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AnswerUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<AnswerUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<AnswerUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type AnswerUncheckedUpdateWithoutUserInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isRigth?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUpdateInput = {
  isRigth?: Maybe<BoolFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAnswersInput>;
};

export type AnswerUpdateManyMutationInput = {
  isRigth?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUpdateManyWithWhereWithoutUserInput = {
  data: AnswerUncheckedUpdateManyWithoutAnswersInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutUserInput>>>;
  createMany?: Maybe<AnswerCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AnswerUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<AnswerUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<AnswerUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type AnswerUpdateWithWhereUniqueWithoutUserInput = {
  data: AnswerUncheckedUpdateWithoutUserInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithoutUserInput = {
  isRigth?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUpsertWithWhereUniqueWithoutUserInput = {
  create: AnswerUncheckedCreateWithoutUserInput;
  update: AnswerUncheckedUpdateWithoutUserInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerWhereInput = {
  AND?: Maybe<Array<Maybe<AnswerWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AnswerWhereInput>>>;
  OR?: Maybe<Array<Maybe<AnswerWhereInput>>>;
  id?: Maybe<IntFilter>;
  isRigth?: Maybe<BoolFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type AnswerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type EnumQuestionTypeFieldUpdateOperationsInput = {
  set?: Maybe<QuestionType>;
};

export type EnumQuestionTypeFilter = {
  equals?: Maybe<QuestionType>;
  in?: Maybe<Array<Maybe<QuestionType>>>;
  not?: Maybe<NestedEnumQuestionTypeFilter>;
  notIn?: Maybe<Array<Maybe<QuestionType>>>;
};

export type EnumQuestionTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumQuestionTypeFilter>;
  _min?: Maybe<NestedEnumQuestionTypeFilter>;
  equals?: Maybe<QuestionType>;
  in?: Maybe<Array<Maybe<QuestionType>>>;
  not?: Maybe<NestedEnumQuestionTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<QuestionType>>>;
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneAnswer: Answer;
  createOneQuestion: Question;
  createOneTest: Test;
  createOneUser: User;
  deleteManyAnswer: BatchPayload;
  deleteManyQuestion: BatchPayload;
  deleteManyTest: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneAnswer?: Maybe<Answer>;
  deleteOneQuestion?: Maybe<Question>;
  deleteOneTest?: Maybe<Test>;
  deleteOneUser?: Maybe<User>;
  updateField: Field;
  updateManyAnswer: BatchPayload;
  updateManyQuestion: BatchPayload;
  updateManyTest: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneAnswer: Answer;
  updateOneQuestion: Question;
  updateOneTest: Test;
  updateOneUser: User;
  upsertOneAnswer: Answer;
  upsertOneQuestion: Question;
  upsertOneTest: Test;
  upsertOneUser: User;
};


export type MutationCreateOneAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationCreateOneQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateOneTestArgs = {
  data: TestCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyAnswerArgs = {
  where?: Maybe<AnswerWhereInput>;
};


export type MutationDeleteManyQuestionArgs = {
  where?: Maybe<QuestionWhereInput>;
};


export type MutationDeleteManyTestArgs = {
  where?: Maybe<TestWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type MutationDeleteOneQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationDeleteOneTestArgs = {
  where: TestWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyAnswerArgs = {
  data: AnswerUpdateManyMutationInput;
  where?: Maybe<AnswerWhereInput>;
};


export type MutationUpdateManyQuestionArgs = {
  data: QuestionUpdateManyMutationInput;
  where?: Maybe<QuestionWhereInput>;
};


export type MutationUpdateManyTestArgs = {
  data: TestUpdateManyMutationInput;
  where?: Maybe<TestWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneAnswerArgs = {
  data: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpdateOneQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateOneTestArgs = {
  data: TestUpdateInput;
  where: TestWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneAnswerArgs = {
  create: AnswerCreateInput;
  update: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpsertOneQuestionArgs = {
  create: QuestionCreateInput;
  update: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpsertOneTestArgs = {
  create: TestCreateInput;
  update: TestUpdateInput;
  where: TestWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedEnumQuestionTypeFilter = {
  equals?: Maybe<QuestionType>;
  in?: Maybe<Array<Maybe<QuestionType>>>;
  not?: Maybe<NestedEnumQuestionTypeFilter>;
  notIn?: Maybe<Array<Maybe<QuestionType>>>;
};

export type NestedEnumQuestionTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumQuestionTypeFilter>;
  _min?: Maybe<NestedEnumQuestionTypeFilter>;
  equals?: Maybe<QuestionType>;
  in?: Maybe<Array<Maybe<QuestionType>>>;
  not?: Maybe<NestedEnumQuestionTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<QuestionType>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAnswer?: Maybe<AggregateAnswer>;
  aggregateQuestion?: Maybe<AggregateQuestion>;
  aggregateTest?: Maybe<AggregateTest>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstAnswer?: Maybe<Answer>;
  findFirstQuestion?: Maybe<Question>;
  findFirstTest?: Maybe<Test>;
  findFirstUser?: Maybe<User>;
  findManyAnswer: Array<Answer>;
  findManyAnswerCount: Scalars['Int'];
  findManyQuestion: Array<Question>;
  findManyQuestionCount: Scalars['Int'];
  findManyTest: Array<Test>;
  findManyTestCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueAnswer?: Maybe<Answer>;
  findUniqueQuestion?: Maybe<Question>;
  findUniqueTest?: Maybe<Test>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
};


export type QueryAggregateAnswerArgs = {
  cursor?: Maybe<AnswerWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<AnswerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AnswerWhereInput>;
};


export type QueryAggregateQuestionArgs = {
  cursor?: Maybe<QuestionWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<QuestionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};


export type QueryAggregateTestArgs = {
  cursor?: Maybe<TestWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<TestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TestWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstAnswerArgs = {
  cursor?: Maybe<AnswerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<AnswerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<AnswerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AnswerWhereInput>;
};


export type QueryFindFirstQuestionArgs = {
  cursor?: Maybe<QuestionWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<QuestionScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<QuestionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};


export type QueryFindFirstTestArgs = {
  cursor?: Maybe<TestWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TestScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TestWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyAnswerArgs = {
  cursor?: Maybe<AnswerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<AnswerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<AnswerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AnswerWhereInput>;
};


export type QueryFindManyAnswerCountArgs = {
  cursor?: Maybe<AnswerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<AnswerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<AnswerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AnswerWhereInput>;
};


export type QueryFindManyQuestionArgs = {
  cursor?: Maybe<QuestionWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<QuestionScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<QuestionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};


export type QueryFindManyQuestionCountArgs = {
  cursor?: Maybe<QuestionWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<QuestionScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<QuestionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};


export type QueryFindManyTestArgs = {
  cursor?: Maybe<TestWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TestScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TestWhereInput>;
};


export type QueryFindManyTestCountArgs = {
  cursor?: Maybe<TestWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TestScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TestWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type QueryFindUniqueQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryFindUniqueTestArgs = {
  where: TestWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  codeArgs: Array<Scalars['String']>;
  expectedResult?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  options: Array<Scalars['String']>;
  parrentTest: Test;
  parrentTestId: Scalars['Int'];
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionAvgAggregateOutputType = {
  __typename?: 'QuestionAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  parrentTestId?: Maybe<Scalars['Float']>;
};

export type QuestionAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
};

export type QuestionCountAggregateOutputType = {
  __typename?: 'QuestionCountAggregateOutputType';
  _all: Scalars['Int'];
  answer: Scalars['Int'];
  code: Scalars['Int'];
  codeArgs: Scalars['Int'];
  expectedResult: Scalars['Int'];
  id: Scalars['Int'];
  options: Scalars['Int'];
  parrentTestId: Scalars['Int'];
  text: Scalars['Int'];
  type: Scalars['Int'];
};

export type QuestionCountOrderByAggregateInput = {
  answer?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  codeArgs?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  options?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionCreateInput = {
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTest: TestCreateNestedOneWithoutQuestionsInput;
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionCreateManyInput = {
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId: Scalars['Int'];
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionCreateManyParrentTestInput = {
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionCreateManyParrentTestInputEnvelope = {
  data: QuestionCreateManyParrentTestInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type QuestionCreateManycodeArgsInput = {
  set: Scalars['String'];
};

export type QuestionCreateManyoptionsInput = {
  set: Scalars['String'];
};

export type QuestionCreateNestedManyWithoutParrentTestInput = {
  connect?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<QuestionCreateOrConnectWithoutParrentTestInput>>>;
  create?: Maybe<Array<Maybe<QuestionCreateWithoutParrentTestInput>>>;
  createMany?: Maybe<QuestionCreateManyParrentTestInputEnvelope>;
};

export type QuestionCreateOrConnectWithoutParrentTestInput = {
  create: QuestionUncheckedCreateWithoutParrentTestInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutParrentTestInput = {
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionCreatecodeArgsInput = {
  set: Scalars['String'];
};

export type QuestionCreateoptionsInput = {
  set: Scalars['String'];
};

export type QuestionListRelationFilter = {
  every?: Maybe<QuestionWhereInput>;
  none?: Maybe<QuestionWhereInput>;
  some?: Maybe<QuestionWhereInput>;
};

export type QuestionMaxAggregateOutputType = {
  __typename?: 'QuestionMaxAggregateOutputType';
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  parrentTestId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionType>;
};

export type QuestionMaxOrderByAggregateInput = {
  answer?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionMinAggregateOutputType = {
  __typename?: 'QuestionMinAggregateOutputType';
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  parrentTestId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionType>;
};

export type QuestionMinOrderByAggregateInput = {
  answer?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type QuestionOrderByWithAggregationInput = {
  _avg?: Maybe<QuestionAvgOrderByAggregateInput>;
  _count?: Maybe<QuestionCountOrderByAggregateInput>;
  _max?: Maybe<QuestionMaxOrderByAggregateInput>;
  _min?: Maybe<QuestionMinOrderByAggregateInput>;
  _sum?: Maybe<QuestionSumOrderByAggregateInput>;
  answer?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  codeArgs?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  options?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  answer?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  codeArgs?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  options?: Maybe<SortOrder>;
  parrentTest?: Maybe<TestOrderByWithRelationInput>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export enum QuestionScalarFieldEnum {
  Answer = 'answer',
  Code = 'code',
  CodeArgs = 'codeArgs',
  ExpectedResult = 'expectedResult',
  Id = 'id',
  Options = 'options',
  ParrentTestId = 'parrentTestId',
  Text = 'text',
  Type = 'type'
}

export type QuestionScalarWhereInput = {
  AND?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  answer?: Maybe<StringNullableFilter>;
  code?: Maybe<StringNullableFilter>;
  codeArgs?: Maybe<StringNullableListFilter>;
  expectedResult?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  options?: Maybe<StringNullableListFilter>;
  parrentTestId?: Maybe<IntFilter>;
  text?: Maybe<StringFilter>;
  type?: Maybe<EnumQuestionTypeFilter>;
};

export type QuestionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<QuestionScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<QuestionScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<QuestionScalarWhereWithAggregatesInput>>>;
  answer?: Maybe<StringNullableWithAggregatesFilter>;
  code?: Maybe<StringNullableWithAggregatesFilter>;
  codeArgs?: Maybe<StringNullableListFilter>;
  expectedResult?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  options?: Maybe<StringNullableListFilter>;
  parrentTestId?: Maybe<IntWithAggregatesFilter>;
  text?: Maybe<StringWithAggregatesFilter>;
  type?: Maybe<EnumQuestionTypeWithAggregatesFilter>;
};

export type QuestionSumAggregateOutputType = {
  __typename?: 'QuestionSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  parrentTestId?: Maybe<Scalars['Int']>;
};

export type QuestionSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
};

export enum QuestionType {
  CodeQuestion = 'codeQuestion',
  TextQuestion = 'textQuestion'
}

export type QuestionUncheckedCreateInput = {
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId: Scalars['Int'];
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionUncheckedCreateNestedManyWithoutParrentTestInput = {
  connect?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<QuestionCreateOrConnectWithoutParrentTestInput>>>;
  create?: Maybe<Array<Maybe<QuestionCreateWithoutParrentTestInput>>>;
  createMany?: Maybe<QuestionCreateManyParrentTestInputEnvelope>;
};

export type QuestionUncheckedCreateWithoutParrentTestInput = {
  answer?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionUncheckedUpdateInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId?: Maybe<IntFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUncheckedUpdateManyInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId?: Maybe<IntFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUncheckedUpdateManyWithoutParrentTestInput = {
  connect?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<QuestionCreateOrConnectWithoutParrentTestInput>>>;
  create?: Maybe<Array<Maybe<QuestionCreateWithoutParrentTestInput>>>;
  createMany?: Maybe<QuestionCreateManyParrentTestInputEnvelope>;
  delete?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<QuestionUpdateWithWhereUniqueWithoutParrentTestInput>>>;
  updateMany?: Maybe<Array<Maybe<QuestionUpdateManyWithWhereWithoutParrentTestInput>>>;
  upsert?: Maybe<Array<Maybe<QuestionUpsertWithWhereUniqueWithoutParrentTestInput>>>;
};

export type QuestionUncheckedUpdateManyWithoutQuestionsInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUncheckedUpdateWithoutParrentTestInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTest?: Maybe<TestUpdateOneRequiredWithoutQuestionsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutParrentTestInput = {
  data: QuestionUncheckedUpdateManyWithoutQuestionsInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutParrentTestInput = {
  connect?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<QuestionCreateOrConnectWithoutParrentTestInput>>>;
  create?: Maybe<Array<Maybe<QuestionCreateWithoutParrentTestInput>>>;
  createMany?: Maybe<QuestionCreateManyParrentTestInputEnvelope>;
  delete?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<QuestionUpdateWithWhereUniqueWithoutParrentTestInput>>>;
  updateMany?: Maybe<Array<Maybe<QuestionUpdateManyWithWhereWithoutParrentTestInput>>>;
  upsert?: Maybe<Array<Maybe<QuestionUpsertWithWhereUniqueWithoutParrentTestInput>>>;
};

export type QuestionUpdateWithWhereUniqueWithoutParrentTestInput = {
  data: QuestionUncheckedUpdateWithoutParrentTestInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutParrentTestInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdatecodeArgsInput = {
  push?: Maybe<Array<Maybe<Scalars['String']>>>;
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuestionUpdateoptionsInput = {
  push?: Maybe<Array<Maybe<Scalars['String']>>>;
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuestionUpsertWithWhereUniqueWithoutParrentTestInput = {
  create: QuestionUncheckedCreateWithoutParrentTestInput;
  update: QuestionUncheckedUpdateWithoutParrentTestInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionWhereInput = {
  AND?: Maybe<Array<Maybe<QuestionWhereInput>>>;
  NOT?: Maybe<Array<Maybe<QuestionWhereInput>>>;
  OR?: Maybe<Array<Maybe<QuestionWhereInput>>>;
  answer?: Maybe<StringNullableFilter>;
  code?: Maybe<StringNullableFilter>;
  codeArgs?: Maybe<StringNullableListFilter>;
  expectedResult?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  options?: Maybe<StringNullableListFilter>;
  parrentTest?: Maybe<TestWhereInput>;
  parrentTestId?: Maybe<IntFilter>;
  text?: Maybe<StringFilter>;
  type?: Maybe<EnumQuestionTypeFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Maybe<Scalars['String']>>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasSome?: Maybe<Array<Maybe<Scalars['String']>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Test = {
  __typename?: 'Test';
  _count?: Maybe<TestCountOutputType>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questions: Array<Question>;
};


export type TestQuestionsArgs = {
  cursor?: Maybe<QuestionWhereUniqueInput>;
  distinct?: Maybe<QuestionScalarFieldEnum>;
  orderBy?: Maybe<QuestionOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};

export type TestAvgAggregateOutputType = {
  __typename?: 'TestAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type TestAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type TestCountAggregateOutputType = {
  __typename?: 'TestCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type TestCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TestCountOutputType = {
  __typename?: 'TestCountOutputType';
  questions: Scalars['Int'];
};

export type TestCreateInput = {
  name: Scalars['String'];
  questions?: Maybe<QuestionCreateNestedManyWithoutParrentTestInput>;
};

export type TestCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type TestCreateNestedOneWithoutQuestionsInput = {
  connect?: Maybe<TestWhereUniqueInput>;
  connectOrCreate?: Maybe<TestCreateOrConnectWithoutQuestionsInput>;
  create?: Maybe<TestUncheckedCreateWithoutQuestionsInput>;
};

export type TestCreateOrConnectWithoutQuestionsInput = {
  create: TestUncheckedCreateWithoutQuestionsInput;
  where: TestWhereUniqueInput;
};

export type TestCreateWithoutQuestionsInput = {
  name: Scalars['String'];
};

export type TestMaxAggregateOutputType = {
  __typename?: 'TestMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TestMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TestMinAggregateOutputType = {
  __typename?: 'TestMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TestMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TestOrderByWithAggregationInput = {
  _avg?: Maybe<TestAvgOrderByAggregateInput>;
  _count?: Maybe<TestCountOrderByAggregateInput>;
  _max?: Maybe<TestMaxOrderByAggregateInput>;
  _min?: Maybe<TestMinOrderByAggregateInput>;
  _sum?: Maybe<TestSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TestOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  questions?: Maybe<QuestionOrderByRelationAggregateInput>;
};

export type TestRelationFilter = {
  is?: Maybe<TestWhereInput>;
  isNot?: Maybe<TestWhereInput>;
};

export enum TestScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type TestScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TestScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TestScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TestScalarWhereWithAggregatesInput>>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type TestSumAggregateOutputType = {
  __typename?: 'TestSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type TestSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type TestUncheckedCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  questions?: Maybe<QuestionUncheckedCreateNestedManyWithoutParrentTestInput>;
};

export type TestUncheckedCreateWithoutQuestionsInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type TestUncheckedUpdateInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  questions?: Maybe<QuestionUncheckedUpdateManyWithoutParrentTestInput>;
};

export type TestUncheckedUpdateManyInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TestUncheckedUpdateWithoutQuestionsInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutParrentTestInput>;
};

export type TestUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateOneRequiredWithoutQuestionsInput = {
  connect?: Maybe<TestWhereUniqueInput>;
  connectOrCreate?: Maybe<TestCreateOrConnectWithoutQuestionsInput>;
  create?: Maybe<TestUncheckedCreateWithoutQuestionsInput>;
  update?: Maybe<TestUncheckedUpdateWithoutQuestionsInput>;
  upsert?: Maybe<TestUpsertWithoutQuestionsInput>;
};

export type TestUpdateWithoutQuestionsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TestUpsertWithoutQuestionsInput = {
  create: TestUncheckedCreateWithoutQuestionsInput;
  update: TestUncheckedUpdateWithoutQuestionsInput;
};

export type TestWhereInput = {
  AND?: Maybe<Array<Maybe<TestWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TestWhereInput>>>;
  OR?: Maybe<Array<Maybe<TestWhereInput>>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  questions?: Maybe<QuestionListRelationFilter>;
};

export type TestWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCountOutputType>;
  answers: Array<Answer>;
  id: Scalars['Int'];
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type UserAnswersArgs = {
  cursor?: Maybe<AnswerWhereUniqueInput>;
  distinct?: Maybe<AnswerScalarFieldEnum>;
  orderBy?: Maybe<AnswerOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AnswerWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  nickname: Scalars['Int'];
  phoneNumber: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  nickname?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  answers: Scalars['Int'];
};

export type UserCreateInput = {
  answers?: Maybe<AnswerCreateNestedManyWithoutUserInput>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserCreateNestedOneWithoutAnswersInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAnswersInput>;
  create?: Maybe<UserUncheckedCreateWithoutAnswersInput>;
};

export type UserCreateOrConnectWithoutAnswersInput = {
  create: UserUncheckedCreateWithoutAnswersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAnswersInput = {
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  nickname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  nickname?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  nickname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  nickname?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  nickname?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  answers?: Maybe<AnswerOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  nickname?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Nickname = 'nickname',
  PhoneNumber = 'phoneNumber'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  id?: Maybe<IntWithAggregatesFilter>;
  nickname?: Maybe<StringWithAggregatesFilter>;
  phoneNumber?: Maybe<StringWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  answers?: Maybe<AnswerUncheckedCreateNestedManyWithoutUserInput>;
  id?: Maybe<Scalars['Int']>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserUncheckedCreateWithoutAnswersInput = {
  id?: Maybe<Scalars['Int']>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  answers?: Maybe<AnswerUncheckedUpdateManyWithoutUserInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutAnswersInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  answers?: Maybe<AnswerUpdateManyWithoutUserInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAnswersInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAnswersInput>;
  create?: Maybe<UserUncheckedCreateWithoutAnswersInput>;
  update?: Maybe<UserUncheckedUpdateWithoutAnswersInput>;
  upsert?: Maybe<UserUpsertWithoutAnswersInput>;
};

export type UserUpdateWithoutAnswersInput = {
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAnswersInput = {
  create: UserUncheckedCreateWithoutAnswersInput;
  update: UserUncheckedUpdateWithoutAnswersInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  answers?: Maybe<AnswerListRelationFilter>;
  id?: Maybe<IntFilter>;
  nickname?: Maybe<StringFilter>;
  phoneNumber?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  nickname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};
