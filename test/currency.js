class CurrencyExchange {
  constructor(currency, from, to, amount) {
    // set endpoint and your API key
    this.endpoint = "convert";
    this.apiKey = "142eaddcfa102890606bfbbd14279a62";

    // define from currency, to currency, and amount
    this.currency = currency;
    this.from = from;
    this.to = to;
    this.amount = amount;
  }
  // Fetch currency from API

  async getCurrency() {
    // const response = await fetch(
    //   `http://data.fixer.io/api/latest?access_key=${this.apiKey}`
    // );
    const response = await fetch(
      `http://data.fixer.io/api/latest?access_key=${
        this.apiKey
      }&symbols=USD,CAD,JPY,GBP,EUR`
    );
    const responseData = await response.json();

    return responseData;
  }

  convert(currency) {
    this.currency = currency;
  }
}

// set endpoint and your API key

let amountToconvert = document.querySelector("#amountCy").value;
let fromCurrency = document.querySelector("#from");
let toCurrency = document.querySelector("#to").value;

// execute the conversion using the "convert" endpoint:
