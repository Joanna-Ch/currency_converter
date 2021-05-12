{

    const welcome = () => {
        console.log("Cześć!");
    };

    const calkulateQuote = (amount, currency) => {
        const rate = +"4";

        switch (currency) {
            case "PLN":
                currencyResult = "USD";
                return amount / rate;

            case "USD":
                currencyResult = "PLN";
                return amount * rate;
        };

    };

    const updateResultText = (quote, currencyResult) => {
        const quoteElement = document.querySelector(".js-quote");
        const currencyQuoteElement = document.querySelector(".js-currencyQuote");

        quoteElement.innerText = quote;
        currencyQuoteElement.innerText = currencyResult;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currencySelect");
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const quote = calkulateQuote(amount, currency);
        updateResultText(quote, currencyResult);

    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };
    welcome();
    init();

}
