export interface Quote {
    success: {
        total: number
    },
    contents: {
        quotes: QuoteData[]
    },
    baseurl: string,
    copyright: {
        year: number,
        url: string
    }
}

interface QuoteData {
    quote: string,
    length: number,
    author: string,
    tags: string[],
    category: string,
    language: string,
    date: string,
    permalink: string,
    id: string,
    background: string,
    title: string
}