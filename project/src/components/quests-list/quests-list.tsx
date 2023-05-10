import QuestCard from '../quest-card/quest-card';

function QuestsList(): JSX.Element {
  return (
    <div className="cards-grid">
      {Array.from({ length: 9 }, (_, i) => <QuestCard key={i} />)}
    </div>
  );
}

export default QuestsList;
