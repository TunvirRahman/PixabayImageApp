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
});
