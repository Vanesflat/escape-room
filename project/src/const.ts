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
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export const levelDictionary = {
  [Level.Easy]: 'лёгкий',
  [Level.Medium]: 'средний',
  [Level.Hard]: 'сложный'
};

export enum Type {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export const typeDictionary = {
  [Type.Adventures]: 'приключения',
  [Type.Horror]: 'ужасы',
  [Type.Mystic]: 'мистика',
  [Type.Detective]: 'детектив',
  [Type.SciFi]: 'научная фантастика'
};

export enum NameSpace {
  Quests = 'QUESTS',
  Quest = 'QUEST'
}
