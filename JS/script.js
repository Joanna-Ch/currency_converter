
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector (".js-amount");
let currencyElement= document.querySelector (".js-currencySelect");
let quoteElement = document.querySelector (".js-quote");
let currencyQuoteElement = document.querySelector(".js-currencyQuote");

formElement.addEventListener("submit",(event)=>{
event.preventDefault();

let amount = +amountElement.value;
let currency = currencyElement.value;
let quote = quoteElement.value;
let rate = +"4" ;

if (currency === "PLN") {
    quote = amount/rate;
    currencyQuoteElement.value = "USD";
    }
    else{
    quote = amount*rate;  
    currencyQuoteElement.value = "PLN";}

quoteElement.innerText = quote;
currencyQuoteElement.innerText =  currencyQuoteElement.value;

});

