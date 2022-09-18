import React, { useState, useEffect } from "react";
import quoteService from "../utils/quoteService";

const QuotePage = () => {
    const [quote, setQuote] = useState< string | undefined >(undefined);
    useEffect(() => {
        quoteService.fetchQuote().then((res) => {
            setQuote(res?.contents?.quotes[0].quote)
        }).catch((e) => {
            console.log(e)
        })
    }, []);

    return (
        <div>
            <h1>Daily Quote</h1>
            {quote && <p>{quote}</p>}
        </div>
    )
}

export default QuotePage;