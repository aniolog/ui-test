import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { APP_ACTIONS } from '../store/actions';
import { getTestimonialInfo } from '../services';
import { Review } from '../types';
import TestimonialComponent from '../components/testimonial';

interface ReviewsPageProps {
  reviews: Array<Review>,
  testimonialTitle: string,
};

const ReviewsPage = (props: ReviewsPageProps) => {
  const reviewIndex = useSelector(state => state.app.selectedReviewIndex);
  const selectedReview = props.reviews[reviewIndex];
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher({ type: APP_ACTIONS.REVIEWS_LOADED, reviews: props.reviews, testimonialTitle: props.testimonialTitle });
  }, []);
  return (
    <>
      <TestimonialComponent 
        testimonialTitle={props.testimonialTitle}
        reviews={props.reviews}
        selectedReviewIndex={reviewIndex}
        onReviewChanged={(selectedReviewIndex) => dispatcher({ type: APP_ACTIONS.REVIEW_CHANGED, selectedReviewIndex })}
      />
    </>
  );
}

ReviewsPage.getInitialProps = async () => {
  const { slider: { reviews, title }} = await getTestimonialInfo();
  return { reviews, testimonialTitle: title };
};

export default ReviewsPage;