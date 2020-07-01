import axios from 'axios';
import { Menu } from '../types/menu';


export const getGlobalInfo = async (): Promise<Menu> => {
    const menu: Menu = await (await axios.get(`${process.env.baseUrl}/app.json`)).data
    return menu;
}