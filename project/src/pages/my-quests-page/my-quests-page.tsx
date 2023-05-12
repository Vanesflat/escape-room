import { useEffect } from 'react';
import BookingList from '../../components/booking-list/booking-list';
import Layout from '../../components/layout/layout';
import Loader from '../../components/loader/loader';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { fetchBookingQuestsAction } from '../../store/reducers/booking-quests/api-actions';
import { getBookingQuests, getBookingQuestsStatus } from '../../store/reducers/booking-quests/selectors';

function MyQuestsPage(): JSX.Element {
  const bookingQuests = useAppSelector(getBookingQuests);
  const bookingQuestsStatus = useAppSelector(getBookingQuestsStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookingQuestsAction());
  }, [dispatch]);

  if (bookingQuestsStatus.isLoading) {
    return <Loader />;
  }

  return (
    <Layout pageTitle="Мои бронирования">
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <BookingList bookingQuests={bookingQuests} />
        </div>
      </main>
    </Layout>
  );
}

export default MyQuestsPage;
