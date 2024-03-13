import ReviewForm from '../review-form/component';
import { useUpdateReviewMutation } from '../../redux/services/api';
import { useEffect } from 'react';

const UpdateReviewFormContainer = ({ review, user, onUpdateFinished }) => {
  const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      onUpdateFinished();
    }
  }, [isSuccess, onUpdateFinished]);

  if (!user || !review) {
    return null;
  }

  if (isLoading) {
    return <div>Updating review...</div>;
  }

  const { id, text, rating } = review;
  return (
    <ReviewForm
      initialState={{ text, rating }}
      user={user}
      onSave={(updatedReview) =>
        updateReview({
          reviewId: id,
          review: { ...updatedReview, userId: user.id, id },
        })
      }
    />
  );
};

export default UpdateReviewFormContainer;
