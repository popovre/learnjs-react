import { useState } from 'react';
import Button from '../button/component';
import UpdateReviewFormContainer from '../update-review-form/container';

const Review = ({ review, user }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div>
      {isEditMode ? (
        <UpdateReviewFormContainer
          review={review}
          user={user}
          onUpdateFinished={() => {
            setIsEditMode(false);
          }}
        />
      ) : (
        <>
          <div>Review: {review?.text}</div>
          <div>From: {user?.name}</div>
          <div>Rating: {review?.rating} </div>
        </>
      )}
      <Button onClick={() => setIsEditMode(!isEditMode)}>
        Режим редактирования
      </Button>
    </div>
  );
};

export default Review;
