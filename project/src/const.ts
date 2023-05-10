export enum AppRoute {
  Login = '/login',
  Main = '/',
  Quest = '/quest/:id',
  MyQuests = '/my-quests',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
