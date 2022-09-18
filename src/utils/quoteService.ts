import {Quote} from "../interfaces/quote";
import axios from "axios";

const quoteService = {
    fetchQuote: async (): Promise<Quote> => {
        const res = await axios.get('https://quotes.rest/qod');
        return res.data;
    }
}

export default quoteService;