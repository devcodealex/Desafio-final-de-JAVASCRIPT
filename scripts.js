const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')




const convertValues = async() => {
    const inputReais = document.getElementById('input-real').value
    const realText = document.getElementById('real-value-text')
    const currencyText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response=>response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    
    console.log(data)

    realText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === '€ Euro') {
        currencyText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === 'US$ Dolar Americano') {
        currencyText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === '₿ Bitcoin') {
        currencyText.innerHTML = `${inputReais/bitcoin} ₿ `    
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/euro.png'
    }
    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = 'Dolar americano'
        currencyImg.src = './img/dolar.png'
    }
    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './img/bitcoin.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)