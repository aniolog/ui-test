import axios from 'axios';
import { Calculator } from '../types';

export const getCalculatorInfo = async (): Promise<Calculator> => {
    const calculator: Calculator = await (await axios.get(`${process.env.baseUrl}/page2.json`)).data
    return calculator;
}