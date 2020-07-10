import PixabayService from './pixabayService';
import { API, API_KEYS } from '../../contants/appConstants';

const mockResponse = {
    total: 1286985,
    totalHits: 500,
    hits: [
        {
            id: 5383607,
            pageURL: 'https://pixabay.com/photos/warrior-frog-fantasy-mutant-5383607/',
            type: 'photo',
            tags: 'warrior, frog, fantasy',
            previewURL: 'https://cdn.pixabay.com/photo/2020/07/08/12/09/warrior-5383607_150.jpg',
            previewWidth: 112,
            previewHeight: 150,
            webformatURL: 'https://pixabay.com/get/53e3dd404c52ab14f1dc84609629307a1438dee7524c704c7c2b78d3954fcc51_640.jpg',
            webformatWidth: 480,
            webformatHeight: 640,
            largeImageURL: 'https://pixabay.com/get/53e3dd404c52ab14f6da8c7dda793679113ed9e551506c4870267fd7904fc751b1_1280.jpg',
            imageWidth: 2843,
            imageHeight: 3791,
            imageSize: 2139493,
            views: 3562,
            downloads: 3260,
            favorites: 29,
            likes: 45,
            comments: 23,
            user_id: 13452116,
            user: 'Syaibatulhamdi',
            userImageURL: 'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
        }, {
            id: 5369729,
            pageURL: 'https://pixabay.com/photos/rose-rose-bloom-blossom-bloom-5369729/',
            type: 'photo',
            tags: 'rose, rose bloom, blossom',
            previewURL: 'https://cdn.pixabay.com/photo/2020/07/04/14/20/rose-5369729_150.jpg',
            previewWidth: 150,
            previewHeight: 100,
            webformatURL: 'https://pixabay.com/get/53e3d34a4d50a514f1dc84609629307a1438dee7524c704c7c2b78d3954fcc51_640.jpg',
            webformatWidth: 640,
            webformatHeight: 427,
            largeImageURL: 'https://pixabay.com/get/53e3d34a4d50a514f6da8c7dda793679113ed9e551506c4870267fd7904fc751b1_1280.jpg',
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 2590444,
            views: 9428,
            downloads: 8733,
            favorites: 24,
            likes: 66,
            comments: 47,
            user_id: 1767157,
            user: 'Capri23auto',
            userImageURL: 'https://cdn.pixabay.com/user/2020/06/24/09-38-01-336_250x250.jpg',
        },
    ],
};

describe('PixabayService Test', () => {
    describe('PixabayService constructor Test', () => {
        let pixabayService;
        beforeAll(() => {
            pixabayService = new PixabayService();
        });
        it('pixabayService initiate HttpService', () => {
            expect(pixabayService.httpService).toBeDefined();
        });
    });
    describe('loadImages method Test', () => {
        let pixabayService;
        beforeAll(() => {
            pixabayService = new PixabayService();
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('loadImages method defined', () => {
            expect(pixabayService.loadImages).toBeDefined();
        });
        it('loadImages will call httpservice get with proper params', () => {
            jest.spyOn(pixabayService.httpService, 'get');
            pixabayService.loadImages();
            expect(pixabayService.httpService.get).toHaveBeenCalledWith(API.NONE, { params: { key: API_KEYS.PIXABAY_API_KEY } });
        });
        it('loadImages will call httpservice get with proper params', () => {
            jest.spyOn(pixabayService.httpService, 'get').mockResolvedValueOnce(mockResponse);
            expect.assertions(1);
            pixabayService.loadImages().then((response) => {
                expect(response).toEqual(mockResponse);
            });
        });
    });
});
