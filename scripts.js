
let button = document.getElementById("button")
let selectDown = document.getElementById("select-down")
let selectUp = document.getElementById("select-up")

async function convertValue() {

    let currency = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,EUR-USD,USD-EUR,BRL-USD,BRL-EUR").then(function (response) {
        return response.json()
    })



    let dolar = currency.USDBRL.high
    let dolar2 = currency.EURUSD.high
    let dolar3 = currency.BRLUSD.high
    let euro = currency.EURBRL.high
    let euro2 = currency.USDEUR.high
    let euro3 = currency.BRLEUR.high
    


    let valorDigitado = Number(document.getElementById("input").value);
    let valorDigitadoText = document.getElementById("currency-Text-Value-up");


    valorDigitadoText.innerHTML = valorDigitado.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });



    let currencyText = document.getElementById("currency-Text-Value");
    let result

    // Contas

    //Contas Real Brasileiro

    if (selectUp.value == "R$ Real Brasileiro" && selectDown.value == "US$ Dólar Americano") {
        result = valorDigitado / dolar
        currencyText.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });
    }

    if (selectUp.value == "R$ Real Brasileiro" && selectDown.value == "€ Euro") {
        result = valorDigitado / euro
        currencyText.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });
    }

    if (selectUp.value == "R$ Real Brasileiro" && selectDown.value == "R$ Real Brasileiro") {
        result = valorDigitado
        currencyText.innerHTML = result.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });
    }

    // Contas Dólar

    if (selectUp.value == "US$ Dólar Americano" && selectDown.value == "€ Euro") {
        result = valorDigitado / dolar2
        currencyText.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

    if (selectUp.value == "US$ Dólar Americano" && selectDown.value == "R$ Real Brasileiro") {
        result = valorDigitado / dolar3
        currencyText.innerHTML = result.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

    if (selectUp.value == "US$ Dólar Americano" && selectDown.value == "US$ Dólar Americano") {
        result = valorDigitado
        currencyText.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

    // Contas Euro

    if (selectUp.value == "€ Euro" && selectDown.value == "US$ Dólar Americano") {
        result = valorDigitado / euro2
        currencyText.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        });
    }

    if (selectUp.value == "€ Euro" && selectDown.value == "R$ Real Brasileiro") {
        result = valorDigitado / euro3
        currencyText.innerHTML = result.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        });
    }

    if (selectUp.value == "€ Euro" && selectDown.value == "€ Euro") {
        result = valorDigitado
        currencyText.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        });

        valorDigitadoText.innerHTML = valorDigitado.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        });
    }



}

function changeCurrency() {
    let currencyText = document.getElementById("currency-text")
    let currencyImage = document.getElementById("currency-image")
    let currencyImageUp = document.getElementById("currency-image-up")
    let currencyTextUp = document.getElementById("currency-text-up")


    if (selectDown.value == "US$ Dólar Americano") {
        currencyText.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/estados-unidos (1) 1.svg"

    }

    if (selectDown.value == "€ Euro") {
        currencyText.innerHTML = "Euro"
        currencyImage.src = "./img/Euro.svg"
    }

    if (selectDown.value == "R$ Real Brasileiro") {
        currencyText.innerHTML = "Real Brasileiro"
        currencyImage.src = "./img/brasil 2.svg"
    }

    if (selectUp.value == "R$ Real Brasileiro") {
        currencyTextUp.innerHTML = "Real Brasileiro"
        currencyImageUp.src = "./img/brasil 2.svg"
    }

    if (selectUp.value == "€ Euro") {
        currencyTextUp.innerHTML = "Euro"
        currencyImageUp.src = "./img/Euro.svg"
    }

    if (selectUp.value == "US$ Dólar Americano") {
        currencyTextUp.innerHTML = "Dólar Americano"
        currencyImageUp.src = "./img/estados-unidos (1) 1.svg"
    }






    convertValue()

}



button.addEventListener("click", convertValue);
selectDown.addEventListener("change", changeCurrency);
selectUp.addEventListener("change", changeCurrency);