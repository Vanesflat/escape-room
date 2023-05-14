import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../../const';
import { QuestPlace } from '../../../types/quest';
import { fetchQuestPlacesAction } from './api-actions';

export type QuestBookingInfoSlice = {
  questPlaces: QuestPlace[];
  currentPlace: QuestPlace | null;
  status: Status;
};

const initialState: QuestBookingInfoSlice = {
  questPlaces: [],
  currentPlace: null,
  status: Status.Idle
};

export const questPlacesSlice = createSlice({
  name: NameSpace.QuestPlaces,
  initialState,
  reducers: {
    changeCurrentPlace: (state, action: PayloadAction<QuestPlace>) => {
      state.currentPlace = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestPlacesAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchQuestPlacesAction.fulfilled, (state, action) => {
        state.questPlaces = action.payload;
        state.currentPlace = action.payload[0];
        state.status = Status.Success;
      })
      .addCase(fetchQuestPlacesAction.rejected, (state) => {
        state.status = Status.Error;
      });
  }
});

export const {
  changeCurrentPlace
} = questPlacesSlice.actions;
