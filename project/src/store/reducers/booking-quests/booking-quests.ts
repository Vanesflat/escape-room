import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { BookingQuest } from '../../../types/booking-quest';
import { deleteBookingQuestAction, fetchBookingQuestsAction } from './api-actions';

export type BookingQuestsSlice = {
  quests: BookingQuest[];
  status: Status;
};

const initialState: BookingQuestsSlice = {
  quests: [],
  status: Status.Idle
};

export const bookingQuestsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingQuestsAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchBookingQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.status = Status.Success;
      })
      .addCase(fetchBookingQuestsAction.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(deleteBookingQuestAction.fulfilled, (state, action) => {
        state.quests = state.quests.filter((quest) => quest.id !== action.payload);
      });
  }
});
