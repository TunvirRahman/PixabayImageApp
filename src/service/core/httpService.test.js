import axios from 'axios';
import HttpService from './httpService';

describe('httpService test', () => {
    describe('Construction test', () => {
        let service;
        beforeAll(() => {
            service = new HttpService();
        });
        it('baseURl is set properly', () => {
            const expectedBaseURL = 'https://pixabay.com/api';
            expect(service.baseURL).toEqual(expectedBaseURL);
        });
    });
    describe('get method test', () => {
        let service;
        beforeAll(() => {
            service = new HttpService();
        });
        it('get defined', () => {
            expect(service.get).toBeDefined();
        });
        it('get toHaveBeenCalledWith mockEndpoint and config', () => {
            jest.spyOn(axios, 'get');
            const mockEndpoint = '/endpoint';
            service.get(mockEndpoint, {});
            expect(axios.get).toHaveBeenCalledWith(service.baseURL + mockEndpoint, {});
        });
        it('get ', () => {
            const mockResponse = {
                data: {
                    data: {
                        value: 'some mock response',
                    },
                },
            };
            jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse);
            expect.assertions(1);
            service.get('/mockEndpoint', {}).then((response) => {
                expect(response.data.data.value).toEqual('some mock response');
            });
        });
    });
});
