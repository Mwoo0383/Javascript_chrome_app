const quotes = [
    {
        quote: "오늘은 월요일",
        author: "민우1",
    },
    {
        quote: "오늘은 화요일",
        author: "민우2",
    },
    {
        quote: "오늘은 수요일",
        author: "민우3",
    },
    {
        quote: "오늘은 목요일",
        author: "민우4",
    },
    {
        quote: "오늘은 금요일",
        author: "민우5",
    },
    {
        quote: "오늘은 토요일",
        author: "민우6",
    },
    {
        quote: "오늘은 일요일",
        author: "민우7",
    },
    {
        quote: "오늘은 맑음",
        author: "민우8",
    },
    {
        quote: "오늘은 비",
        author: "민우9",
    },
    {
        quote: "오늘은 눈",
        author: "민우10",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;