import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { Quest } from '../../../types/quest';
import { fetchQuestAction } from './api-actions';

export type QuestSlice = {
  quest: Quest | null;
  status: Status;
};

const initialState: QuestSlice = {
  quest: null,
  status: Status.Idle
};

export const questSlice = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.status = Status.Success;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.status = Status.Error;
      });
  }
});
