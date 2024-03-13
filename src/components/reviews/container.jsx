import Reviews from './component';
import { useGetReviewsQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';
import CreateReviewFormContainer from '../create-review-form/container';

const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }

  return (
    <div>
      <Reviews reviews={reviews} />
      <CreateReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};

export default ReviewsContainer;
