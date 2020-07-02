import React from 'react';
import { PropTypes, DefaultProps } from './testimonial.prop-types';
import { TestimonialTitle, Container, ReviewContent, ReviewerSection, ReviewText, ReviewerName, ReviewerPosition, Pager, PagerIndex, PagerButton } from './testimonial.styled';
import { Review } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

interface ReviewsPageProps {
    reviews: Array<Review>,
    testimonialTitle: string,
    selectedReviewIndex: number,
    onReviewChanged: (index: number) => void
};


const TestimonialComponent = (props: ReviewsPageProps) => {
    const selectedReview: Review = props.reviews[props.selectedReviewIndex];
    return (
        <Container>
            <TestimonialTitle>{props.testimonialTitle}</TestimonialTitle>
            <ReviewContent>
                <ReviewerSection>
                    <ReviewerName>{selectedReview.name}</ReviewerName>
                    <ReviewerPosition>{selectedReview.position}</ReviewerPosition>
                </ReviewerSection>
                <ReviewText>
                    "{selectedReview.comment}"
                </ReviewText>
                <Pager>
                    <PagerIndex>
                        {props.selectedReviewIndex + 1 } / {props.reviews.length}
                    </PagerIndex>
                    <PagerButton onClick={() => props.onReviewChanged(props.selectedReviewIndex - 1)} disabled={props.selectedReviewIndex === 0}>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                    </PagerButton>
                    <PagerButton onClick={() => props.onReviewChanged(props.selectedReviewIndex + 1)} disabled={props.selectedReviewIndex === props.reviews.length -1 }>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </PagerButton>
                </Pager>
            </ReviewContent>
        </Container>
    );
}

TestimonialComponent.propTypes = PropTypes;
TestimonialComponent.defaultProps = DefaultProps;


export default TestimonialComponent;