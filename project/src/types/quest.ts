import { Level, Type } from '../const';
import { Location } from './booking-quest';

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Type;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type DateInfo = {
  time: string;
  isAvailable: boolean;
}

export type Slots = {
  today: DateInfo[];
  tommorrow: DateInfo[];
}

export type QuestPlace = {
  id: string;
  location: Location;
  slots: Slots;
}
