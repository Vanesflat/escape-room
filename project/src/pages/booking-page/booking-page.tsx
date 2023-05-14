import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import Loader from '../../components/loader/loader';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getQuest } from '../../store/reducers/quest/selectors';
import { getQuestStatus } from '../../store/reducers/quest/selectors';
import BookingForm from '../../components/booking-form/booking-form';
import { fetchQuestAction } from '../../store/reducers/quest/api-actions';
import BookingMap from '../../components/booking-map/booking-map';
import { getQuestPlacesStatus } from '../../store/reducers/quest-places/selectors';
import { fetchQuestPlacesAction } from '../../store/reducers/quest-places/api-actions';

function BookingPage(): JSX.Element {
  const questPlacesStatus = useAppSelector(getQuestPlacesStatus);
  const quest = useAppSelector(getQuest);
  const questStatus = useAppSelector(getQuestStatus);
  const questId = String(useParams().id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestAction(questId));
    dispatch(fetchQuestPlacesAction(questId));
  }, [dispatch, questId]);

  if (!quest || questStatus.isLoading || questPlacesStatus.isLoading) {
    return <Loader />;
  }

  return (
    <Layout pageTitle="Бронирование квеста">
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{quest.title}</p>
          </div>
          <div className="page-content__item">
            <BookingMap />
          </div>
          <BookingForm />
        </div>
      </main>
    </Layout>
  );
}

export default BookingPage;
