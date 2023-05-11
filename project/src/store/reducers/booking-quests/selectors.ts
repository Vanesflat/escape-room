import { NameSpace } from '../../../const';
import { State } from '../../../types/store';

export const getBookingQuests = (state: State) => state[NameSpace.BookingQuests].quests;
