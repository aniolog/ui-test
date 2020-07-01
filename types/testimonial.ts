import { Review } from './review';

export interface Testimonial {
    slider: {
        title: string,
        reviews: Array<Review>;
    }
}