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

export type AggregateCompleteTest = {
  __typename?: 'AggregateCompleteTest';
  _avg?: Maybe<CompleteTestAvgAggregateOutputType>;
  _count?: Maybe<CompleteTestCountAggregateOutputType>;
  _max?: Maybe<CompleteTestMaxAggregateOutputType>;
  _min?: Maybe<CompleteTestMinAggregateOutputType>;
  _sum?: Maybe<CompleteTestSumAggregateOutputType>;
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
  inCompleteTest: CompleteTest;
  inCompleteTestId: Scalars['Int'];
  isRight: Scalars['Boolean'];
  question: Question;
  questionId: Scalars['Int'];
};

export type AnswerAvgAggregateOutputType = {
  __typename?: 'AnswerAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  inCompleteTestId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

export type AnswerAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  inCompleteTestId?: Maybe<SortOrder>;
  questionId?: Maybe<SortOrder>;
};

export type AnswerCountAggregateOutputType = {
  __typename?: 'AnswerCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  inCompleteTestId: Scalars['Int'];
  isRight: Scalars['Int'];
  questionId: Scalars['Int'];
};

export type AnswerCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  inCompleteTestId?: Maybe<SortOrder>;
  isRight?: Maybe<SortOrder>;
  questionId?: Maybe<SortOrder>;
};

export type AnswerCreateInput = {
  inCompleteTest: CompleteTestCreateNestedOneWithoutAnswersInput;
  isRight: Scalars['Boolean'];
  question: QuestionCreateNestedOneWithoutCompeteAnswersInput;
};

export type AnswerCreateManyInCompleteTestInput = {
  id?: Maybe<Scalars['Int']>;
  isRight: Scalars['Boolean'];
  questionId: Scalars['Int'];
};

export type AnswerCreateManyInCompleteTestInputEnvelope = {
  data: AnswerCreateManyInCompleteTestInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AnswerCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  inCompleteTestId: Scalars['Int'];
  isRight: Scalars['Boolean'];
  questionId: Scalars['Int'];
};

export type AnswerCreateManyQuestionInput = {
  id?: Maybe<Scalars['Int']>;
  inCompleteTestId: Scalars['Int'];
  isRight: Scalars['Boolean'];
};

export type AnswerCreateManyQuestionInputEnvelope = {
  data: AnswerCreateManyQuestionInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AnswerCreateNestedManyWithoutInCompleteTestInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutInCompleteTestInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutInCompleteTestInput>>>;
  createMany?: Maybe<AnswerCreateManyInCompleteTestInputEnvelope>;
};

export type AnswerCreateNestedManyWithoutQuestionInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutQuestionInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutQuestionInput>>>;
  createMany?: Maybe<AnswerCreateManyQuestionInputEnvelope>;
};

export type AnswerCreateOrConnectWithoutInCompleteTestInput = {
  create: AnswerUncheckedCreateWithoutInCompleteTestInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateOrConnectWithoutQuestionInput = {
  create: AnswerUncheckedCreateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateWithoutInCompleteTestInput = {
  isRight: Scalars['Boolean'];
  question: QuestionCreateNestedOneWithoutCompeteAnswersInput;
};

export type AnswerCreateWithoutQuestionInput = {
  inCompleteTest: CompleteTestCreateNestedOneWithoutAnswersInput;
  isRight: Scalars['Boolean'];
};

export type AnswerListRelationFilter = {
  every?: Maybe<AnswerWhereInput>;
  none?: Maybe<AnswerWhereInput>;
  some?: Maybe<AnswerWhereInput>;
};

export type AnswerMaxAggregateOutputType = {
  __typename?: 'AnswerMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  inCompleteTestId?: Maybe<Scalars['Int']>;
  isRight?: Maybe<Scalars['Boolean']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type AnswerMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  inCompleteTestId?: Maybe<SortOrder>;
  isRight?: Maybe<SortOrder>;
  questionId?: Maybe<SortOrder>;
};

export type AnswerMinAggregateOutputType = {
  __typename?: 'AnswerMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  inCompleteTestId?: Maybe<Scalars['Int']>;
  isRight?: Maybe<Scalars['Boolean']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type AnswerMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  inCompleteTestId?: Maybe<SortOrder>;
  isRight?: Maybe<SortOrder>;
  questionId?: Maybe<SortOrder>;
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
  inCompleteTestId?: Maybe<SortOrder>;
  isRight?: Maybe<SortOrder>;
  questionId?: Maybe<SortOrder>;
};

export type AnswerOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  inCompleteTest?: Maybe<CompleteTestOrderByWithRelationInput>;
  inCompleteTestId?: Maybe<SortOrder>;
  isRight?: Maybe<SortOrder>;
  question?: Maybe<QuestionOrderByWithRelationInput>;
  questionId?: Maybe<SortOrder>;
};

export enum AnswerScalarFieldEnum {
  Id = 'id',
  InCompleteTestId = 'inCompleteTestId',
  IsRight = 'isRight',
  QuestionId = 'questionId'
}

export type AnswerScalarWhereInput = {
  AND?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  id?: Maybe<IntFilter>;
  inCompleteTestId?: Maybe<IntFilter>;
  isRight?: Maybe<BoolFilter>;
  questionId?: Maybe<IntFilter>;
};

export type AnswerScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<AnswerScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<AnswerScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<AnswerScalarWhereWithAggregatesInput>>>;
  id?: Maybe<IntWithAggregatesFilter>;
  inCompleteTestId?: Maybe<IntWithAggregatesFilter>;
  isRight?: Maybe<BoolWithAggregatesFilter>;
  questionId?: Maybe<IntWithAggregatesFilter>;
};

export type AnswerSumAggregateOutputType = {
  __typename?: 'AnswerSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  inCompleteTestId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type AnswerSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  inCompleteTestId?: Maybe<SortOrder>;
  questionId?: Maybe<SortOrder>;
};

export type AnswerUncheckedCreateInput = {
  id?: Maybe<Scalars['Int']>;
  inCompleteTestId: Scalars['Int'];
  isRight: Scalars['Boolean'];
  questionId: Scalars['Int'];
};

export type AnswerUncheckedCreateNestedManyWithoutInCompleteTestInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutInCompleteTestInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutInCompleteTestInput>>>;
  createMany?: Maybe<AnswerCreateManyInCompleteTestInputEnvelope>;
};

export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutQuestionInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutQuestionInput>>>;
  createMany?: Maybe<AnswerCreateManyQuestionInputEnvelope>;
};

export type AnswerUncheckedCreateWithoutInCompleteTestInput = {
  id?: Maybe<Scalars['Int']>;
  isRight: Scalars['Boolean'];
  questionId: Scalars['Int'];
};

export type AnswerUncheckedCreateWithoutQuestionInput = {
  id?: Maybe<Scalars['Int']>;
  inCompleteTestId: Scalars['Int'];
  isRight: Scalars['Boolean'];
};

export type AnswerUncheckedUpdateInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  inCompleteTestId?: Maybe<IntFieldUpdateOperationsInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
  questionId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  inCompleteTestId?: Maybe<IntFieldUpdateOperationsInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
  questionId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutAnswersInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
  questionId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutCompeteAnswersInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  inCompleteTestId?: Maybe<IntFieldUpdateOperationsInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutInCompleteTestInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutInCompleteTestInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutInCompleteTestInput>>>;
  createMany?: Maybe<AnswerCreateManyInCompleteTestInputEnvelope>;
  delete?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AnswerUpdateWithWhereUniqueWithoutInCompleteTestInput>>>;
  updateMany?: Maybe<Array<Maybe<AnswerUpdateManyWithWhereWithoutInCompleteTestInput>>>;
  upsert?: Maybe<Array<Maybe<AnswerUpsertWithWhereUniqueWithoutInCompleteTestInput>>>;
};

export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutQuestionInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutQuestionInput>>>;
  createMany?: Maybe<AnswerCreateManyQuestionInputEnvelope>;
  delete?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AnswerUpdateWithWhereUniqueWithoutQuestionInput>>>;
  updateMany?: Maybe<Array<Maybe<AnswerUpdateManyWithWhereWithoutQuestionInput>>>;
  upsert?: Maybe<Array<Maybe<AnswerUpsertWithWhereUniqueWithoutQuestionInput>>>;
};

export type AnswerUncheckedUpdateWithoutInCompleteTestInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
  questionId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateWithoutQuestionInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  inCompleteTestId?: Maybe<IntFieldUpdateOperationsInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUpdateInput = {
  inCompleteTest?: Maybe<CompleteTestUpdateOneRequiredWithoutAnswersInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
  question?: Maybe<QuestionUpdateOneRequiredWithoutCompeteAnswersInput>;
};

export type AnswerUpdateManyMutationInput = {
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUpdateManyWithWhereWithoutInCompleteTestInput = {
  data: AnswerUncheckedUpdateManyWithoutAnswersInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
  data: AnswerUncheckedUpdateManyWithoutCompeteAnswersInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithoutInCompleteTestInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutInCompleteTestInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutInCompleteTestInput>>>;
  createMany?: Maybe<AnswerCreateManyInCompleteTestInputEnvelope>;
  delete?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AnswerUpdateWithWhereUniqueWithoutInCompleteTestInput>>>;
  updateMany?: Maybe<Array<Maybe<AnswerUpdateManyWithWhereWithoutInCompleteTestInput>>>;
  upsert?: Maybe<Array<Maybe<AnswerUpsertWithWhereUniqueWithoutInCompleteTestInput>>>;
};

export type AnswerUpdateManyWithoutQuestionInput = {
  connect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AnswerCreateOrConnectWithoutQuestionInput>>>;
  create?: Maybe<Array<Maybe<AnswerCreateWithoutQuestionInput>>>;
  createMany?: Maybe<AnswerCreateManyQuestionInputEnvelope>;
  delete?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AnswerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AnswerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AnswerUpdateWithWhereUniqueWithoutQuestionInput>>>;
  updateMany?: Maybe<Array<Maybe<AnswerUpdateManyWithWhereWithoutQuestionInput>>>;
  upsert?: Maybe<Array<Maybe<AnswerUpsertWithWhereUniqueWithoutQuestionInput>>>;
};

export type AnswerUpdateWithWhereUniqueWithoutInCompleteTestInput = {
  data: AnswerUncheckedUpdateWithoutInCompleteTestInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
  data: AnswerUncheckedUpdateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithoutInCompleteTestInput = {
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
  question?: Maybe<QuestionUpdateOneRequiredWithoutCompeteAnswersInput>;
};

export type AnswerUpdateWithoutQuestionInput = {
  inCompleteTest?: Maybe<CompleteTestUpdateOneRequiredWithoutAnswersInput>;
  isRight?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type AnswerUpsertWithWhereUniqueWithoutInCompleteTestInput = {
  create: AnswerUncheckedCreateWithoutInCompleteTestInput;
  update: AnswerUncheckedUpdateWithoutInCompleteTestInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
  create: AnswerUncheckedCreateWithoutQuestionInput;
  update: AnswerUncheckedUpdateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerWhereInput = {
  AND?: Maybe<Array<Maybe<AnswerWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AnswerWhereInput>>>;
  OR?: Maybe<Array<Maybe<AnswerWhereInput>>>;
  id?: Maybe<IntFilter>;
  inCompleteTest?: Maybe<CompleteTestWhereInput>;
  inCompleteTestId?: Maybe<IntFilter>;
  isRight?: Maybe<BoolFilter>;
  question?: Maybe<QuestionWhereInput>;
  questionId?: Maybe<IntFilter>;
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

export type CompleteTest = {
  __typename?: 'CompleteTest';
  _count?: Maybe<CompleteTestCountOutputType>;
  answers: Array<Answer>;
  id: Scalars['Int'];
  rightAnswers: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};


export type CompleteTestAnswersArgs = {
  cursor?: Maybe<AnswerWhereUniqueInput>;
  distinct?: Maybe<AnswerScalarFieldEnum>;
  orderBy?: Maybe<AnswerOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AnswerWhereInput>;
};

export type CompleteTestAvgAggregateOutputType = {
  __typename?: 'CompleteTestAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  rightAnswers?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type CompleteTestAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  rightAnswers?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CompleteTestCountAggregateOutputType = {
  __typename?: 'CompleteTestCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  rightAnswers: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CompleteTestCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  rightAnswers?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CompleteTestCountOutputType = {
  __typename?: 'CompleteTestCountOutputType';
  answers: Scalars['Int'];
};

export type CompleteTestCreateInput = {
  answers?: Maybe<AnswerCreateNestedManyWithoutInCompleteTestInput>;
  rightAnswers: Scalars['Int'];
  user: UserCreateNestedOneWithoutCompletedTestsInput;
};

export type CompleteTestCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  rightAnswers: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CompleteTestCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  rightAnswers: Scalars['Int'];
};

export type CompleteTestCreateManyUserInputEnvelope = {
  data: CompleteTestCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompleteTestCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CompleteTestCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CompleteTestCreateWithoutUserInput>>>;
  createMany?: Maybe<CompleteTestCreateManyUserInputEnvelope>;
};

export type CompleteTestCreateNestedOneWithoutAnswersInput = {
  connect?: Maybe<CompleteTestWhereUniqueInput>;
  connectOrCreate?: Maybe<CompleteTestCreateOrConnectWithoutAnswersInput>;
  create?: Maybe<CompleteTestUncheckedCreateWithoutAnswersInput>;
};

export type CompleteTestCreateOrConnectWithoutAnswersInput = {
  create: CompleteTestUncheckedCreateWithoutAnswersInput;
  where: CompleteTestWhereUniqueInput;
};

export type CompleteTestCreateOrConnectWithoutUserInput = {
  create: CompleteTestUncheckedCreateWithoutUserInput;
  where: CompleteTestWhereUniqueInput;
};

export type CompleteTestCreateWithoutAnswersInput = {
  rightAnswers: Scalars['Int'];
  user: UserCreateNestedOneWithoutCompletedTestsInput;
};

export type CompleteTestCreateWithoutUserInput = {
  answers?: Maybe<AnswerCreateNestedManyWithoutInCompleteTestInput>;
  rightAnswers: Scalars['Int'];
};

export type CompleteTestListRelationFilter = {
  every?: Maybe<CompleteTestWhereInput>;
  none?: Maybe<CompleteTestWhereInput>;
  some?: Maybe<CompleteTestWhereInput>;
};

export type CompleteTestMaxAggregateOutputType = {
  __typename?: 'CompleteTestMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  rightAnswers?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CompleteTestMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  rightAnswers?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CompleteTestMinAggregateOutputType = {
  __typename?: 'CompleteTestMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  rightAnswers?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CompleteTestMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  rightAnswers?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CompleteTestOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type CompleteTestOrderByWithAggregationInput = {
  _avg?: Maybe<CompleteTestAvgOrderByAggregateInput>;
  _count?: Maybe<CompleteTestCountOrderByAggregateInput>;
  _max?: Maybe<CompleteTestMaxOrderByAggregateInput>;
  _min?: Maybe<CompleteTestMinOrderByAggregateInput>;
  _sum?: Maybe<CompleteTestSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  rightAnswers?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CompleteTestOrderByWithRelationInput = {
  answers?: Maybe<AnswerOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  rightAnswers?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  userId?: Maybe<SortOrder>;
};

export type CompleteTestRelationFilter = {
  is?: Maybe<CompleteTestWhereInput>;
  isNot?: Maybe<CompleteTestWhereInput>;
};

export enum CompleteTestScalarFieldEnum {
  Id = 'id',
  RightAnswers = 'rightAnswers',
  UserId = 'userId'
}

export type CompleteTestScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CompleteTestScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CompleteTestScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CompleteTestScalarWhereInput>>>;
  id?: Maybe<IntFilter>;
  rightAnswers?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
};

export type CompleteTestScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CompleteTestScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CompleteTestScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CompleteTestScalarWhereWithAggregatesInput>>>;
  id?: Maybe<IntWithAggregatesFilter>;
  rightAnswers?: Maybe<IntWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type CompleteTestSumAggregateOutputType = {
  __typename?: 'CompleteTestSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  rightAnswers?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CompleteTestSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  rightAnswers?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CompleteTestUncheckedCreateInput = {
  answers?: Maybe<AnswerUncheckedCreateNestedManyWithoutInCompleteTestInput>;
  id?: Maybe<Scalars['Int']>;
  rightAnswers: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CompleteTestUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CompleteTestCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CompleteTestCreateWithoutUserInput>>>;
  createMany?: Maybe<CompleteTestCreateManyUserInputEnvelope>;
};

export type CompleteTestUncheckedCreateWithoutAnswersInput = {
  id?: Maybe<Scalars['Int']>;
  rightAnswers: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CompleteTestUncheckedCreateWithoutUserInput = {
  answers?: Maybe<AnswerUncheckedCreateNestedManyWithoutInCompleteTestInput>;
  id?: Maybe<Scalars['Int']>;
  rightAnswers: Scalars['Int'];
};

export type CompleteTestUncheckedUpdateInput = {
  answers?: Maybe<AnswerUncheckedUpdateManyWithoutInCompleteTestInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CompleteTestUncheckedUpdateManyInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CompleteTestUncheckedUpdateManyWithoutCompletedTestsInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CompleteTestUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CompleteTestCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CompleteTestCreateWithoutUserInput>>>;
  createMany?: Maybe<CompleteTestCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CompleteTestScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CompleteTestUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<CompleteTestUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<CompleteTestUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type CompleteTestUncheckedUpdateWithoutAnswersInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CompleteTestUncheckedUpdateWithoutUserInput = {
  answers?: Maybe<AnswerUncheckedUpdateManyWithoutInCompleteTestInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CompleteTestUpdateInput = {
  answers?: Maybe<AnswerUpdateManyWithoutInCompleteTestInput>;
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCompletedTestsInput>;
};

export type CompleteTestUpdateManyMutationInput = {
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CompleteTestUpdateManyWithWhereWithoutUserInput = {
  data: CompleteTestUncheckedUpdateManyWithoutCompletedTestsInput;
  where: CompleteTestScalarWhereInput;
};

export type CompleteTestUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CompleteTestCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CompleteTestCreateWithoutUserInput>>>;
  createMany?: Maybe<CompleteTestCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CompleteTestScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CompleteTestWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CompleteTestUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<CompleteTestUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<CompleteTestUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type CompleteTestUpdateOneRequiredWithoutAnswersInput = {
  connect?: Maybe<CompleteTestWhereUniqueInput>;
  connectOrCreate?: Maybe<CompleteTestCreateOrConnectWithoutAnswersInput>;
  create?: Maybe<CompleteTestUncheckedCreateWithoutAnswersInput>;
  update?: Maybe<CompleteTestUncheckedUpdateWithoutAnswersInput>;
  upsert?: Maybe<CompleteTestUpsertWithoutAnswersInput>;
};

export type CompleteTestUpdateWithWhereUniqueWithoutUserInput = {
  data: CompleteTestUncheckedUpdateWithoutUserInput;
  where: CompleteTestWhereUniqueInput;
};

export type CompleteTestUpdateWithoutAnswersInput = {
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCompletedTestsInput>;
};

export type CompleteTestUpdateWithoutUserInput = {
  answers?: Maybe<AnswerUpdateManyWithoutInCompleteTestInput>;
  rightAnswers?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CompleteTestUpsertWithWhereUniqueWithoutUserInput = {
  create: CompleteTestUncheckedCreateWithoutUserInput;
  update: CompleteTestUncheckedUpdateWithoutUserInput;
  where: CompleteTestWhereUniqueInput;
};

export type CompleteTestUpsertWithoutAnswersInput = {
  create: CompleteTestUncheckedCreateWithoutAnswersInput;
  update: CompleteTestUncheckedUpdateWithoutAnswersInput;
};

export type CompleteTestWhereInput = {
  AND?: Maybe<Array<Maybe<CompleteTestWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CompleteTestWhereInput>>>;
  OR?: Maybe<Array<Maybe<CompleteTestWhereInput>>>;
  answers?: Maybe<AnswerListRelationFilter>;
  id?: Maybe<IntFilter>;
  rightAnswers?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type CompleteTestWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
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
  createOneCompleteTest: CompleteTest;
  createOneQuestion: Question;
  createOneTest: Test;
  createOneUser: User;
  deleteManyAnswer: BatchPayload;
  deleteManyCompleteTest: BatchPayload;
  deleteManyQuestion: BatchPayload;
  deleteManyTest: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneAnswer?: Maybe<Answer>;
  deleteOneCompleteTest?: Maybe<CompleteTest>;
  deleteOneQuestion?: Maybe<Question>;
  deleteOneTest?: Maybe<Test>;
  deleteOneUser?: Maybe<User>;
  updateField: Field;
  updateManyAnswer: BatchPayload;
  updateManyCompleteTest: BatchPayload;
  updateManyQuestion: BatchPayload;
  updateManyTest: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneAnswer: Answer;
  updateOneCompleteTest: CompleteTest;
  updateOneQuestion: Question;
  updateOneTest: Test;
  updateOneUser: User;
  upsertOneAnswer: Answer;
  upsertOneCompleteTest: CompleteTest;
  upsertOneQuestion: Question;
  upsertOneTest: Test;
  upsertOneUser: User;
};


export type MutationCreateOneAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationCreateOneCompleteTestArgs = {
  data: CompleteTestCreateInput;
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


export type MutationDeleteManyCompleteTestArgs = {
  where?: Maybe<CompleteTestWhereInput>;
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


export type MutationDeleteOneCompleteTestArgs = {
  where: CompleteTestWhereUniqueInput;
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


export type MutationUpdateManyCompleteTestArgs = {
  data: CompleteTestUpdateManyMutationInput;
  where?: Maybe<CompleteTestWhereInput>;
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


export type MutationUpdateOneCompleteTestArgs = {
  data: CompleteTestUpdateInput;
  where: CompleteTestWhereUniqueInput;
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


export type MutationUpsertOneCompleteTestArgs = {
  create: CompleteTestCreateInput;
  update: CompleteTestUpdateInput;
  where: CompleteTestWhereUniqueInput;
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

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
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

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
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

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAnswer?: Maybe<AggregateAnswer>;
  aggregateCompleteTest?: Maybe<AggregateCompleteTest>;
  aggregateQuestion?: Maybe<AggregateQuestion>;
  aggregateTest?: Maybe<AggregateTest>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstAnswer?: Maybe<Answer>;
  findFirstCompleteTest?: Maybe<CompleteTest>;
  findFirstQuestion?: Maybe<Question>;
  findFirstTest?: Maybe<Test>;
  findFirstUser?: Maybe<User>;
  findManyAnswer: Array<Answer>;
  findManyAnswerCount: Scalars['Int'];
  findManyCompleteTest: Array<CompleteTest>;
  findManyCompleteTestCount: Scalars['Int'];
  findManyQuestion: Array<Question>;
  findManyQuestionCount: Scalars['Int'];
  findManyTest: Array<Test>;
  findManyTestCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueAnswer?: Maybe<Answer>;
  findUniqueCompleteTest?: Maybe<CompleteTest>;
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


export type QueryAggregateCompleteTestArgs = {
  cursor?: Maybe<CompleteTestWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<CompleteTestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompleteTestWhereInput>;
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


export type QueryFindFirstCompleteTestArgs = {
  cursor?: Maybe<CompleteTestWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CompleteTestScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CompleteTestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompleteTestWhereInput>;
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


export type QueryFindManyCompleteTestArgs = {
  cursor?: Maybe<CompleteTestWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CompleteTestScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CompleteTestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompleteTestWhereInput>;
};


export type QueryFindManyCompleteTestCountArgs = {
  cursor?: Maybe<CompleteTestWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CompleteTestScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CompleteTestOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompleteTestWhereInput>;
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


export type QueryFindUniqueCompleteTestArgs = {
  where: CompleteTestWhereUniqueInput;
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
  _count?: Maybe<QuestionCountOutputType>;
  answer?: Maybe<Scalars['String']>;
  codeArgs: Array<Scalars['String']>;
  competeAnswers: Array<Answer>;
  expectedResult?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  options: Array<Scalars['String']>;
  parrentTest: Test;
  parrentTestId: Scalars['Int'];
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  type: QuestionType;
};


export type QuestionCompeteAnswersArgs = {
  cursor?: Maybe<AnswerWhereUniqueInput>;
  distinct?: Maybe<AnswerScalarFieldEnum>;
  orderBy?: Maybe<AnswerOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AnswerWhereInput>;
};

export type QuestionAvgAggregateOutputType = {
  __typename?: 'QuestionAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  parrentTestId?: Maybe<Scalars['Float']>;
  timeToComplete?: Maybe<Scalars['Float']>;
};

export type QuestionAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  timeToComplete?: Maybe<SortOrder>;
};

export type QuestionCountAggregateOutputType = {
  __typename?: 'QuestionCountAggregateOutputType';
  _all: Scalars['Int'];
  answer: Scalars['Int'];
  codeArgs: Scalars['Int'];
  expectedResult: Scalars['Int'];
  id: Scalars['Int'];
  options: Scalars['Int'];
  parrentTestId: Scalars['Int'];
  text: Scalars['Int'];
  timeToComplete: Scalars['Int'];
  type: Scalars['Int'];
};

export type QuestionCountOrderByAggregateInput = {
  answer?: Maybe<SortOrder>;
  codeArgs?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  options?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  timeToComplete?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionCountOutputType = {
  __typename?: 'QuestionCountOutputType';
  competeAnswers: Scalars['Int'];
};

export type QuestionCreateInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerCreateNestedManyWithoutQuestionInput>;
  expectedResult?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTest: TestCreateNestedOneWithoutQuestionsInput;
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  type: QuestionType;
};

export type QuestionCreateManyInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId: Scalars['Int'];
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  type: QuestionType;
};

export type QuestionCreateManyParrentTestInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
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

export type QuestionCreateNestedOneWithoutCompeteAnswersInput = {
  connect?: Maybe<QuestionWhereUniqueInput>;
  connectOrCreate?: Maybe<QuestionCreateOrConnectWithoutCompeteAnswersInput>;
  create?: Maybe<QuestionUncheckedCreateWithoutCompeteAnswersInput>;
};

export type QuestionCreateOrConnectWithoutCompeteAnswersInput = {
  create: QuestionUncheckedCreateWithoutCompeteAnswersInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutParrentTestInput = {
  create: QuestionUncheckedCreateWithoutParrentTestInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutCompeteAnswersInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTest: TestCreateNestedOneWithoutQuestionsInput;
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  type: QuestionType;
};

export type QuestionCreateWithoutParrentTestInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerCreateNestedManyWithoutQuestionInput>;
  expectedResult?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
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
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  parrentTestId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timeToComplete?: Maybe<Scalars['Int']>;
  type?: Maybe<QuestionType>;
};

export type QuestionMaxOrderByAggregateInput = {
  answer?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  timeToComplete?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionMinAggregateOutputType = {
  __typename?: 'QuestionMinAggregateOutputType';
  answer?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  parrentTestId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timeToComplete?: Maybe<Scalars['Int']>;
  type?: Maybe<QuestionType>;
};

export type QuestionMinOrderByAggregateInput = {
  answer?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  timeToComplete?: Maybe<SortOrder>;
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
  codeArgs?: Maybe<SortOrder>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  options?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  timeToComplete?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  answer?: Maybe<SortOrder>;
  codeArgs?: Maybe<SortOrder>;
  competeAnswers?: Maybe<AnswerOrderByRelationAggregateInput>;
  expectedResult?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  options?: Maybe<SortOrder>;
  parrentTest?: Maybe<TestOrderByWithRelationInput>;
  parrentTestId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  timeToComplete?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type QuestionRelationFilter = {
  is?: Maybe<QuestionWhereInput>;
  isNot?: Maybe<QuestionWhereInput>;
};

export enum QuestionScalarFieldEnum {
  Answer = 'answer',
  CodeArgs = 'codeArgs',
  ExpectedResult = 'expectedResult',
  Id = 'id',
  Options = 'options',
  ParrentTestId = 'parrentTestId',
  Text = 'text',
  TimeToComplete = 'timeToComplete',
  Type = 'type'
}

export type QuestionScalarWhereInput = {
  AND?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<QuestionScalarWhereInput>>>;
  answer?: Maybe<StringNullableFilter>;
  codeArgs?: Maybe<StringNullableListFilter>;
  expectedResult?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  options?: Maybe<StringNullableListFilter>;
  parrentTestId?: Maybe<IntFilter>;
  text?: Maybe<StringFilter>;
  timeToComplete?: Maybe<IntNullableFilter>;
  type?: Maybe<EnumQuestionTypeFilter>;
};

export type QuestionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<QuestionScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<QuestionScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<QuestionScalarWhereWithAggregatesInput>>>;
  answer?: Maybe<StringNullableWithAggregatesFilter>;
  codeArgs?: Maybe<StringNullableListFilter>;
  expectedResult?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  options?: Maybe<StringNullableListFilter>;
  parrentTestId?: Maybe<IntWithAggregatesFilter>;
  text?: Maybe<StringWithAggregatesFilter>;
  timeToComplete?: Maybe<IntNullableWithAggregatesFilter>;
  type?: Maybe<EnumQuestionTypeWithAggregatesFilter>;
};

export type QuestionSumAggregateOutputType = {
  __typename?: 'QuestionSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  parrentTestId?: Maybe<Scalars['Int']>;
  timeToComplete?: Maybe<Scalars['Int']>;
};

export type QuestionSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  parrentTestId?: Maybe<SortOrder>;
  timeToComplete?: Maybe<SortOrder>;
};

export enum QuestionType {
  CodeQuestion = 'codeQuestion',
  TextQuestion = 'textQuestion'
}

export type QuestionUncheckedCreateInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerUncheckedCreateNestedManyWithoutQuestionInput>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId: Scalars['Int'];
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  type: QuestionType;
};

export type QuestionUncheckedCreateNestedManyWithoutParrentTestInput = {
  connect?: Maybe<Array<Maybe<QuestionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<QuestionCreateOrConnectWithoutParrentTestInput>>>;
  create?: Maybe<Array<Maybe<QuestionCreateWithoutParrentTestInput>>>;
  createMany?: Maybe<QuestionCreateManyParrentTestInputEnvelope>;
};

export type QuestionUncheckedCreateWithoutCompeteAnswersInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId: Scalars['Int'];
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  type: QuestionType;
};

export type QuestionUncheckedCreateWithoutParrentTestInput = {
  answer?: Maybe<Scalars['String']>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerUncheckedCreateNestedManyWithoutQuestionInput>;
  expectedResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  type: QuestionType;
};

export type QuestionUncheckedUpdateInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerUncheckedUpdateManyWithoutQuestionInput>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId?: Maybe<IntFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUncheckedUpdateManyInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId?: Maybe<IntFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
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
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUncheckedUpdateWithoutCompeteAnswersInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTestId?: Maybe<IntFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUncheckedUpdateWithoutParrentTestInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerUncheckedUpdateManyWithoutQuestionInput>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerUpdateManyWithoutQuestionInput>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTest?: Maybe<TestUpdateOneRequiredWithoutQuestionsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
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

export type QuestionUpdateOneRequiredWithoutCompeteAnswersInput = {
  connect?: Maybe<QuestionWhereUniqueInput>;
  connectOrCreate?: Maybe<QuestionCreateOrConnectWithoutCompeteAnswersInput>;
  create?: Maybe<QuestionUncheckedCreateWithoutCompeteAnswersInput>;
  update?: Maybe<QuestionUncheckedUpdateWithoutCompeteAnswersInput>;
  upsert?: Maybe<QuestionUpsertWithoutCompeteAnswersInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutParrentTestInput = {
  data: QuestionUncheckedUpdateWithoutParrentTestInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutCompeteAnswersInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  parrentTest?: Maybe<TestUpdateOneRequiredWithoutQuestionsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutParrentTestInput = {
  answer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  codeArgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  competeAnswers?: Maybe<AnswerUpdateManyWithoutQuestionInput>;
  expectedResult?: Maybe<NullableStringFieldUpdateOperationsInput>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  timeToComplete?: Maybe<NullableIntFieldUpdateOperationsInput>;
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

export type QuestionUpsertWithoutCompeteAnswersInput = {
  create: QuestionUncheckedCreateWithoutCompeteAnswersInput;
  update: QuestionUncheckedUpdateWithoutCompeteAnswersInput;
};

export type QuestionWhereInput = {
  AND?: Maybe<Array<Maybe<QuestionWhereInput>>>;
  NOT?: Maybe<Array<Maybe<QuestionWhereInput>>>;
  OR?: Maybe<Array<Maybe<QuestionWhereInput>>>;
  answer?: Maybe<StringNullableFilter>;
  codeArgs?: Maybe<StringNullableListFilter>;
  competeAnswers?: Maybe<AnswerListRelationFilter>;
  expectedResult?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  options?: Maybe<StringNullableListFilter>;
  parrentTest?: Maybe<TestWhereInput>;
  parrentTestId?: Maybe<IntFilter>;
  text?: Maybe<StringFilter>;
  timeToComplete?: Maybe<IntNullableFilter>;
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
  completedTests: Array<CompleteTest>;
  id: Scalars['Int'];
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type UserCompletedTestsArgs = {
  cursor?: Maybe<CompleteTestWhereUniqueInput>;
  distinct?: Maybe<CompleteTestScalarFieldEnum>;
  orderBy?: Maybe<CompleteTestOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompleteTestWhereInput>;
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
  completedTests: Scalars['Int'];
};

export type UserCreateInput = {
  completedTests?: Maybe<CompleteTestCreateNestedManyWithoutUserInput>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserCreateNestedOneWithoutCompletedTestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCompletedTestsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCompletedTestsInput>;
};

export type UserCreateOrConnectWithoutCompletedTestsInput = {
  create: UserUncheckedCreateWithoutCompletedTestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCompletedTestsInput = {
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
  completedTests?: Maybe<CompleteTestOrderByRelationAggregateInput>;
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
  completedTests?: Maybe<CompleteTestUncheckedCreateNestedManyWithoutUserInput>;
  id?: Maybe<Scalars['Int']>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserUncheckedCreateWithoutCompletedTestsInput = {
  id?: Maybe<Scalars['Int']>;
  nickname: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  completedTests?: Maybe<CompleteTestUncheckedUpdateManyWithoutUserInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutCompletedTestsInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  completedTests?: Maybe<CompleteTestUpdateManyWithoutUserInput>;
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCompletedTestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCompletedTestsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCompletedTestsInput>;
  update?: Maybe<UserUncheckedUpdateWithoutCompletedTestsInput>;
  upsert?: Maybe<UserUpsertWithoutCompletedTestsInput>;
};

export type UserUpdateWithoutCompletedTestsInput = {
  nickname?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCompletedTestsInput = {
  create: UserUncheckedCreateWithoutCompletedTestsInput;
  update: UserUncheckedUpdateWithoutCompletedTestsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  completedTests?: Maybe<CompleteTestListRelationFilter>;
  id?: Maybe<IntFilter>;
  nickname?: Maybe<StringFilter>;
  phoneNumber?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  nickname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};
