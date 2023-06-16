//Requisicoes API
async function buscaApi(){
    var buscaBTC = await fetch('https://www.mercadobitcoin.net/api/BTC/ticker/');
    var buscaBTCConvertida = await buscaBTC.json();
    console.log(buscaBTCConvertida.ticker.last)

    var buscaLTC = await fetch('https://www.mercadobitcoin.net/api/ETH/ticker/');
    var buscaLTCConvertida = await buscaLTC.json();
    console.log(buscaLTCConvertida.ticker.last)

    var buscaETH = await fetch('https://www.mercadobitcoin.net/api/ETH/ticker/');
    var buscaETHConvertida = await buscaETH.json();
    console.log(buscaETHConvertida.ticker.last)

    var buscaDOGE = await fetch('https://www.mercadobitcoin.net/api/DOGE/ticker/');
    var buscaDOGEConvertida = await buscaDOGE.json();
    console.log(buscaDOGEConvertida.ticker.last);
    
    const BTC = buscaBTCConvertida.ticker.last;
    const LTC = buscaLTCConvertida.ticker.last;
    const ETH = buscaETHConvertida.ticker.last
    const DOGE = buscaDOGEConvertida.ticker.last;

    const fixedBTC = parseFloat(BTC).toFixed(2);
    const fixedLTC = parseFloat(LTC).toFixed(2);
    const fixedETH = parseFloat(ETH).toFixed(2);
    const fixedDOGE = parseFloat(DOGE).toFixed(2);

    valorBtc.innerHTML = `R$${fixedBTC}`;
    valorLtc.innerHTML = `R$${fixedLTC}`;
    valorEth.innerHTML = `R$${fixedETH}`;
    valorDoge.innerHTML = `R$${fixedDOGE}`;

}

const valorBtc = document.querySelector('.valor-btc');
const valorLtc = document.querySelector('.valor-ltc');
const valorEth = document.querySelector('.valor-eth');
const valorDoge = document.querySelector('.valor-doge');

setInterval(buscaApi,5000);