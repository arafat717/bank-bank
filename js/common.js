function tottalblanceelemnet(elementid){
    const tottatprice = document.getElementById(elementid);
   const tottalstring = tottatprice.innerText;
   const tottalelement = parseInt(tottalstring)
   return tottalelement;
}

function setTottalAmount(elementId,vlaue){
    const tottalcost = document.getElementById(elementId);
    tottalcost.innerText = vlaue;
}


function calculatetottal(){
    const tottalphoneamount = tottalblanceelemnet('phone-price');
    const casetottalamout = tottalblanceelemnet('tottal-price');
    const tottalamount = tottalphoneamount + casetottalamout;
    setTottalAmount('tottal-phone',tottalamount)

    const taxtottalstring = (tottalamount * 0.1).toFixed(2);
    const taxamount = parseFloat(taxtottalstring)
    setTottalAmount('tottal-tax',taxamount)

    const finnaltottal = tottalamount + taxamount;
    setTottalAmount('tottal-amount',finnaltottal)

}