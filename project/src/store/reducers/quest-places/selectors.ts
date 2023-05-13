import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { QuestPlace } from '../../../types/quest';
import { State } from '../../../types/store';

export const getQuestPlaces = (state: State): QuestPlace[] => state[NameSpace.QuestPlaces].questPlaces;
export const getStatus = (state: State): Status => state[NameSpace.QuestPlaces].status;

export const getQuestPlacesStatus = createSelector([getStatus], (status) => ({
  isLoading: [Status.Idle, Status.Loading].includes(status),
  isSuccess: status === Status.Success,
  isError: status === Status.Error
}));
