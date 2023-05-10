import { Level, Type } from '../const';
import { Quest } from '../types/quest';

export const filterByType = (type: Type, quests: Quest[]): Quest[] =>
  type === Type.All ? quests : quests.filter((quest) => quest.type === type);
export const filterByLevel = (level: Level, quests: Quest[]): Quest[] =>
  level === Level.Any ? quests : quests.filter((quest) => quest.level === level);
