import React, { useState, useEffect } from "react";
import quoteService from "../utils/quoteService";
import {Quote} from "../interfaces/quote";

const QuotePage = () => {
    const [quote, setQuote] = useState< Quote | undefined >(undefined);
    useEffect(() => {
        quoteService.fetchQuote().then((res) => {
            setQuote(res)
        }).catch((e) => {
            console.log(e)
        })
    }, []);

    return (
        <div>
            <h1>Daily Quote</h1>
            {quote && <p>{quote.q}</p>}
        </div>
    )
}

export default QuotePage;