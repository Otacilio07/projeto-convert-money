
const ConvertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyReal = document.querySelector(".currency-real")

function ConvertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".valoraconverter-paragrafo") // valor real 
    const currencyValueToConverted = document.querySelector(".valorconvertido-paragrafo") // valor outars moedas

    const dollarToday = 5.2
    const eurotoday = 6.2
    const librasToday = 7.0
    const ienetoday = 0.4
    const realtoday = 1.0

    if (currencySelect.value == 'dollar') {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency", currency: "usd"
        }).format(inputCurrencyValue / dollarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "Eur"
        }).format(inputCurrencyValue / eurotoday)
    }
    if (currencySelect.value == "libras") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency", currency: "gbp"
        }).format(inputCurrencyValue / librasToday)
    }
    if (currencySelect.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format(inputCurrencyValue * dollarToday)
    }
        if (currencyReal.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format(inputCurrencyValue)
    }
    if (currencyReal.value == "dollar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format(inputCurrencyValue)
    }
    if (currencyReal.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "eur"
        }).format(inputCurrencyValue)
    }
    if (currencyReal.value == "libras"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "gbp"
        }).format(inputCurrencyValue)
    }

    }


function changeCurrency() {
    const currencyName = document.querySelector(".moeda-dollar-paragrafo")
    const currencyImage = document.querySelector(".logo-dollar")

    if (currencySelect.value == "dollar") {
        currencyName.innerHTML = "dollar americano"
        currencyImage.src = './assets/dollar.png'
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImage.src = './assets/euro.png'
    }
    if (currencySelect.value == "libras") {
        currencyName.innerHTML = "libras esterlineas"
        currencyImage.src = './assets/libras.png'
    }
    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "iene japoneses"
        currencyImage.src = './assets/images.jpg'
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "real brasileiro"
        currencyImage.src = './assets/real.png'
    }
    ConvertValues()
}

function changeReal(){
    const currencyName = document.querySelector(".moeda-real-paragrafo")
    const currencyImage = document.querySelector(".logo-real")
    
    if(currencyReal.value == "dollar"){
        currencyName.innerHTML = "dollar americano"
        currencyImage.src = './assets/dollar.png'
    }
    if(currencyReal.value == "real"){
        currencyName.innerHTML = "real brasileiro"
        currencyImage.src = './assets/real.png'
    }
    if(currencyReal.value == "euro"){
        currencyName.innerHTML = "euro"
        currencyImage.src = './assets/euro.png'
    }
    if(currencyReal.value == "libras"){
        currencyName.innerHTML = "libras esterlineas"
        currencyImage.src = './assets/libras.png'
    }
    if(currencyReal.value == "iene"){
        currencyName.innerHTML = "iene japoneses"
        currencyImage.src = './assets/images.jpg'
    }
    ConvertValues()
}
currencyReal.addEventListener("change", changeReal )
currencySelect.addEventListener("change", changeCurrency)
ConvertButton.addEventListener("click", ConvertValues)
