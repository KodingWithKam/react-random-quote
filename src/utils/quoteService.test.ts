import axios from 'axios';
import quoteService from "./quoteService";

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('quoteService', () => {
    test('fetchQuote', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: {
                "success": {
                    "total": 1
                },
                "contents": {
                    "quotes": [
                        {
                            "quote": "Keep a positive mind. Remember, a failed attempt doesn't make you a failure-giving up does.",
                            "length": "98",
                            "author": "Lorii Myers",
                            "tags": [
                                "giving-up",
                                "inspire",
                                "positive-attitude",
                                "self-improvement"
                            ],
                            "category": "inspire",
                            "language": "en",
                            "date": "2022-09-18",
                            "permalink": "https://theysaidso.com/quote/lorii-myers-keep-a-positive-mind-remember-a-failed-attempt-doesnt-make-you-a-fai",
                            "id": "bUu2mjT_nWdPCQyDq7IsugeF",
                            "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                            "title": "Inspiring Quote of the day"
                        }
                    ]
                },
                "baseurl": "https://theysaidso.com",
                "copyright": {
                    "year": 2024,
                    "url": "https://theysaidso.com"
                }
            }
        });
        const quote = await quoteService.fetchQuote()
        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(quote).toEqual({
            "success": {
                "total": 1
            },
            "contents": {
                "quotes": [
                    {
                        "quote": "Keep a positive mind. Remember, a failed attempt doesn't make you a failure-giving up does.",
                        "length": "98",
                        "author": "Lorii Myers",
                        "tags": [
                            "giving-up",
                            "inspire",
                            "positive-attitude",
                            "self-improvement"
                        ],
                        "category": "inspire",
                        "language": "en",
                        "date": "2022-09-18",
                        "permalink": "https://theysaidso.com/quote/lorii-myers-keep-a-positive-mind-remember-a-failed-attempt-doesnt-make-you-a-fai",
                        "id": "bUu2mjT_nWdPCQyDq7IsugeF",
                        "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                        "title": "Inspiring Quote of the day"
                    }
                ]
            },
            "baseurl": "https://theysaidso.com",
            "copyright": {
                "year": 2024,
                "url": "https://theysaidso.com"
            }
        })
    })
});