import { Icon } from 'leaflet';

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Quest = '/quest/:id',
  MyQuests = '/my-quests',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts'
}

export enum APIRoute {
  Quests = '/quest',
  MyQuests = '/reservation',
  Login = '/login',
  Logout = '/logout',
  Booking = '/booking'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}

export enum Level {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export const levelDictionary = {
  [Level.Any]: 'любой',
  [Level.Easy]: 'лёгкий',
  [Level.Medium]: 'средний',
  [Level.Hard]: 'сложный'
};

export enum Type {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export const typeDictionary = {
  [Type.All]: 'все квесты',
  [Type.Adventures]: 'приключения',
  [Type.Horror]: 'ужасы',
  [Type.Mystic]: 'мистика',
  [Type.Detective]: 'детектив',
  [Type.SciFi]: 'sci-fi'
};

export const DEFAULT_TYPE = Type.All;
export const DEFAULT_LEVEL = Level.Any;

export enum Date {
  Today = 'today',
  Tomorrow = 'tomorrow'
}

export const dateDictionary = {
  [Date.Today]: 'сегодня',
  [Date.Tomorrow]: 'завтра'
};

export enum NameSpace {
  App = 'APP',
  Quests = 'QUESTS',
  Quest = 'QUEST',
  QuestPlaces = 'QUEST-PLACES',
  BookingQuests = 'BOOKING-QUESTS',
  User = 'USER',
  Notification = 'NOTIFICATION'
}

export const DEFAULT_ZOOM = 10;

export const officeLocation = {
  latitude: 59.96832206412432,
  longitude: 30.31735949999995,
  zoom: 16,
};

export const defaultCustomIcon = new Icon({
  iconUrl: './img/svg/pin-default.svg',
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]
});

export const currentCustomIcon = new Icon({
  iconUrl: './img/svg/pin-active.svg',
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]
});

export const EMAIL_PATTERN = /^[_a-z0-9-+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
export const PASSWORD_PATTERN = /(?=.*[a-z])(?=.*[0-9])/g;
