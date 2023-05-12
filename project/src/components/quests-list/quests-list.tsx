import { Quest } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';
import QuestsEmpty from '../quests-empty/quests-empty';

type QuestsListProps = {
  quests: Quest[];
}

function QuestsList({ quests }: QuestsListProps): JSX.Element {
  if (!quests.length) {
    return <QuestsEmpty />;
  }

  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
        />
      ))}
    </div>
  );
}

export default QuestsList;
