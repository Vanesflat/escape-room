import { NameSpace } from '../../../const';
import { Quest } from '../../../types/quest';
import { State } from '../../../types/store';

export const getQuest = (state: State): Quest | null => state[NameSpace.Quest].quest;
