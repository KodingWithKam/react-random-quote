import axios from 'axios';
import quoteService from "./quoteService";

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('quoteService', () => {
    test('fetchQuote', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: {
                "q": "The friend is the man who knows all about you, and still likes you.",
                "a": "Elbert Hubbard",
                "i": "https://zenquotes.io/img/elbert-hubbard.jpg",
                "c": "67",
                "h": "<blockquote>&ldquo;The friend is the man who knows all about you, and still likes you.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
            }
        });
        const quote = await quoteService.fetchQuote()
        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(quote).toEqual({
                "q": "The friend is the man who knows all about you, and still likes you.",
                "a": "Elbert Hubbard",
                "i": "https://zenquotes.io/img/elbert-hubbard.jpg",
                "c": "67",
                "h": "<blockquote>&ldquo;The friend is the man who knows all about you, and still likes you.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
        })
    })
});