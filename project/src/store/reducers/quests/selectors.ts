import { NameSpace } from '../../../const';
import { State } from '../../../types/store';

export const getQuests = (state: State) => state[NameSpace.Quests].quests;
