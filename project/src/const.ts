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
  Logout = '/logout'
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

export enum NameSpace {
  App = 'APP',
  Quests = 'QUESTS',
  Quest = 'QUEST'
}
