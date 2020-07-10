import axios from 'axios';
import API from '../../contants/appConstants';

export default class HTTPService {
    constructor() {
        this.baseURL = API.BASE_URL;
    }

    get(endpoint, config) {
        const url = this.baseURL + endpoint;
        return axios.get(url, config);
    }
}
