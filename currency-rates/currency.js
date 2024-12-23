class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_KIAvSJRkRWyOoeeGSbM19QvQnPCd0OK9rEWMuecc&base_currency="
    }

    async exchange(amount ,firstCurrency,secondCurrency){
        const responce= await fetch(`${this.url}${firstCurrency}`)
        const result=await responce.json();
        const sonuc=amount*result.data[secondCurrency];

        return sonuc;
    }
}