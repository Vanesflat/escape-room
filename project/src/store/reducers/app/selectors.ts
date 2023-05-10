import { Level, NameSpace, Type } from '../../../const';
import { State } from '../../../types/store';

export const getCurrentType = (state: State): Type => state[NameSpace.App].type;
export const getCurrentLevel = (state: State): Level => state[NameSpace.App].level;
