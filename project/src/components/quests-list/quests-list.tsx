import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getRenderedQuests } from '../../store/reducers/quests/selectors';
import QuestCard from '../quest-card/quest-card';
import QuestsEmpty from '../quests-empty/quests-empty';

function QuestsList(): JSX.Element {
  const renderedQuests = useAppSelector(getRenderedQuests);

  if (!renderedQuests.length) {
    return <QuestsEmpty />;
  }

  return (
    <div className="cards-grid">
      {renderedQuests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
        />
      ))}
    </div>
  );
}

export default QuestsList;
