class UI {
  constructor() {
    this.from = document.querySelector("#from");
    this.to = document.querySelector("#to");
    this.amountCy = document.querySelector("#amountCy");
    this.resultCy = document.querySelector("#resultCy");
  }

  paint(currency, options, rate) {
    //  options on selet tag
    options = "";
    let value = 0;
    let ccySelected = "";

    for (let key in currency.rates) {
      // console.log(key);

      options += `<option value=${key}>${key}</option>`;
      value = currency.rates[key];

      // console.log(currency.rates[key]);
      // console.log(value);
    }
    from.innerHTML = options;
    to.innerHTML = options;

    from.addEventListener("change", () => {
      ccySelected = from.options[from.selectedIndex].value;
      console.log(ccySelected);
      let parse = JSON.parse(ccySelected);
      console.log(ccySelected);
      console.log(currency.rates);
      console.log(currency.rates.ccySelected);
    }); // end from event listener

    to.addEventListener("change", () => {
      let valueSelected = to.options[to.selectedIndex].value;
      console.log(valueSelected);

      let toTry = currency.rates[to];
      console.log(toTry);
    }); // end  to event listener

    function convertCurrency() {
      from.value;
      to.value;
      amountCy.value;
      resultCy;
    }
  }
} // end class
