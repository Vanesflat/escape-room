import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_LEVEL, DEFAULT_TYPE, Level, NameSpace, Type } from '../../../const';

export type AppSlice = {
  type: Type;
  level: Level;
}

const initialState: AppSlice = {
  type: DEFAULT_TYPE,
  level: DEFAULT_LEVEL
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeType: (state, action: PayloadAction<Type>) => {
      state.type = action.payload;
    },

    changeLevel: (state, action: PayloadAction<Level>) => {
      state.level = action.payload;
    }
  }
});

export const {
  changeType,
  changeLevel
} = appSlice.actions;
