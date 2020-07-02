import propTypes from 'prop-types';
import { Review } from '../../types'

export const PropTypes = {
    selectedReviewIndex: propTypes.number,
    testimonialTitle: propTypes.string,
    reviews: propTypes.instanceOf(Array),
    onReviewChanged: propTypes.func
}

export const DefaultProps = {
    selectedReviewIndex: 0,
    testimonialTitle: '',
    reviews: [],
}