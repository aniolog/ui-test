import axios from 'axios';
import { Review, Testimonial } from '../types';

export const getTestimonialInfo = async (): Promise<Testimonial> => {
    const testimonial: Testimonial = await (await axios.get(`${process.env.baseUrl}/page1.json`)).data
    return testimonial;
}