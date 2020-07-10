import { API, API_KEYS } from '../../contants/appConstants';
import HttpService from '../core/httpService';

export default class PixabayService {
    constructor() {
        this.httpService = new HttpService();
    }

    loadImages() {
        const config = {
            params: {
                key: API_KEYS.PIXABAY_API_KEY,
            },
        };
        return this.httpService.get(API.NONE, config);
    }
}
