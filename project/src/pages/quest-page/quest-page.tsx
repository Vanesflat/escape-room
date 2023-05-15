import { useEffect } from 'react';
import Layout from '../../components/layout/layout';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { fetchQuestAction } from '../../store/reducers/quest/api-actions';
import { getQuest, getQuestStatus } from '../../store/reducers/quest/selectors';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { AppRoute, levelDictionary, typeDictionary } from '../../const';
import Loader from '../../components/loader/loader';

function QuestPage(): JSX.Element {
  const quest = useAppSelector(getQuest);
  const questStatus = useAppSelector(getQuestStatus);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const questId = String(useParams().id);

  const handleClick = () => {
    navigate(generatePath(AppRoute.Booking, { id: questId }), { state: { redirect: true } });
  };

  useEffect(() => {
    dispatch(fetchQuestAction(questId));
  }, [dispatch, questId]);

  if (!quest || questStatus.isLoading) {
    return <Loader />;
  }

  return (
    <Layout pageTitle={quest.title}>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={quest.coverImgWebp} />
            <img src={quest.coverImg} srcSet={quest.coverImgWebp} width="1366" height="768" alt={quest.title} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{quest.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{typeDictionary[quest.type]}</p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{levelDictionary[quest.level]}
              </li>
            </ul>
            <p className="quest-page__description">{quest.description}</p>
            <button className="btn btn--accent btn--cta quest-page__btn" onClick={handleClick}>Забронировать</button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default QuestPage;
