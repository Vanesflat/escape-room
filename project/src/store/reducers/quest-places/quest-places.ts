import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { QuestPlace } from '../../../types/quest';
import { fetchQuestPlacesAction } from './api-actions';

export type QuestBookingInfoSlice = {
  questPlaces: QuestPlace[];
  status: Status;
};

const initialState: QuestBookingInfoSlice = {
  questPlaces: [],
  status: Status.Idle
};

export const questPlacesSlice = createSlice({
  name: NameSpace.QuestPlaces,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestPlacesAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchQuestPlacesAction.fulfilled, (state, action) => {
        state.questPlaces = action.payload;
        state.status = Status.Success;
      })
      .addCase(fetchQuestPlacesAction.rejected, (state) => {
        state.status = Status.Error;
      });
  }
});
