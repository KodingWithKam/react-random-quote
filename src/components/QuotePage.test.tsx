import {render, screen, waitFor} from "@testing-library/react";
import QuotePage from "./QuotePage";
import axios from "axios";
import {act} from "react-dom/test-utils";

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Quote Component', function () {
    test('Fetches quote and updates copy', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: {
                "q": "The friend is the man who knows all about you, and still likes you.",
                "a": "Elbert Hubbard",
                "i": "https://zenquotes.io/img/elbert-hubbard.jpg",
                "c": "67",
                "h": "<blockquote>&ldquo;The friend is the man who knows all about you, and still likes you.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
            }
        });

        act(() => {
            render(<QuotePage />);
        });
        // Initial State
        expect(screen.getByText('Daily Quote')).toBeInTheDocument()
        expect(screen.queryByText(/The friend is the man who knows all about you/i)).not.toBeInTheDocument()
        // final state
        await waitFor(() => {
            expect(screen.queryByText(/The friend is the man who knows all about you/i)).toBeInTheDocument()
        })
    })
});