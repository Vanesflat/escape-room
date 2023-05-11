import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { Quest } from '../../../types/quest';
import { State } from '../../../types/store';

export const getQuest = (state: State): Quest | null => state[NameSpace.Quest].quest;
export const getStatus = (state: State): Status => state[NameSpace.Quest].status;

export const getQuestStatus = createSelector([getStatus], (status) => ({
  isLoading: [Status.Idle, Status.Loading].includes(status),
  isSuccess: status === Status.Success,
  isError: status === Status.Error
}));
