import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { Quest } from '../../../types/quest';
import { fetchQuestsAction } from './api-actions';

export type QuestsSlice = {
  quests: Quest[];
  status: Status;
};

const initialState: QuestsSlice = {
  quests: [],
  status: Status.Idle
};

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.status = Status.Success;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.status = Status.Error;
      });
  }
});
