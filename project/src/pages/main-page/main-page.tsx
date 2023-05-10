import { useEffect } from 'react';
import FilterForm from '../../components/filter-form/filter-form';
import Layout from '../../components/layout/layout';
import QuestsList from '../../components/quests-list/quests-list';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { fetchQuestsAction } from '../../store/reducers/quests/api-actions';
import { getRenderedQuests } from '../../store/reducers/quests/selectors';

function MainPage(): JSX.Element {
  const renderedQuests = useAppSelector(getRenderedQuests);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

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
          <QuestsList quests={renderedQuests} />
        </div>
      </main>
    </Layout>
  );
}

export default MainPage;
