import axios from 'axios';
import { Review } from '../types';

export const getCalculatorInfo = async (): Promise<Review> => {
    const review: Review = await (await axios.get(`${process.env.baseUrl}/page1.json`)).data
    return review;
}