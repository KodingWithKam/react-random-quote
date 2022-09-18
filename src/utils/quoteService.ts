import {Quote} from "../interfaces/quote";
import axios from "axios";

const quoteService = {
    fetchQuote: async (): Promise<Quote> => {
        const res = await axios.get('https://zenquotes.io/api/quotes/');
        return res.data;
    }
}

export default quoteService;