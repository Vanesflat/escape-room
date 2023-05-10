import FilterForm from '../../components/filter-form/filter-form';
import Layout from '../../components/layout/layout';
import QuestsList from '../../components/quests-list/quests-list';

function MainPage(): JSX.Element {
  return (
    <Layout>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <FilterForm />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestsList />
        </div>
      </main>
    </Layout>
  );
}

export default MainPage;
