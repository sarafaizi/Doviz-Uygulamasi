const amoutElement=document.querySelector("#amount");
const firstOption=document.querySelector("#firstCurrencyOption");
const secondOption=document.querySelector("#seconedCurrencyOption");
const resultElement=document.querySelector("#result");

const currency=new Currency();


runEventListenner();

function runEventListenner(){
    amoutElement.addEventListener("input",exchange);
}

function exchange(){
    const amount=Number(amoutElement.value.trim());
    const firstOptionValue=firstOption.options[firstOption.selectedIndex].textContent;

    const secondOptionValue=secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount,firstOptionValue,secondOptionValue)
    .then((cevap)=>{
        resultElement.value=cevap.toFixed(3);
    })


}