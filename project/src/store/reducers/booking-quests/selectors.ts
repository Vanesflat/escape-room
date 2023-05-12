import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { BookingQuest } from '../../../types/booking-quest';
import { State } from '../../../types/store';

export const getBookingQuests = (state: State): BookingQuest[] => state[NameSpace.BookingQuests].quests;
export const getStatus = (state: State): Status => state[NameSpace.BookingQuests].status;

export const getBookingQuestsStatus = createSelector([getStatus], (status) => ({
  isLoading: [Status.Idle, Status.Loading].includes(status),
  isSuccess: status === Status.Success,
  isError: status === Status.Error
}));
