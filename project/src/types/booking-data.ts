import { Date } from '../const';

export type BookingData = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export type BookingPostData = {
  questId: string;
  bookingData: BookingData;
};
