import Review from './component';
import { useGetUsersQuery } from '../../redux/services/api';

const ReviewContainer = ({ review }) => {
  const { data: user, isLoading } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find((user) => user.id === review?.userId),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!review && !user) {
    return null;
  }

  return <Review user={user} review={review} />;
};

export default ReviewContainer;
