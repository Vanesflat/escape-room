import { Date } from '../const';
import { Quest } from './quest';

export type Location = {
  address: string;
  coords: [number, number];
};

export type BookingQuest = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
}
