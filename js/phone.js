
function phonenumberbyid(isinputvalue){
    const input = document.getElementById('phone-input-felid');
    const inputstring = input.value ;
    const previousinputvalue = parseInt(inputstring)

    let newinputvalue;

    if(isinputvalue === true){
        newinputvalue = previousinputvalue + 1;
    }
    else{
        newinputvalue = previousinputvalue - 1;
    }
    input.value = newinputvalue;

    return newinputvalue;

}

function tottalphoneprice(newinputvalue){
    const tottal = newinputvalue * 1219 ;
    const tottalcase = document.getElementById('phone-price');
    tottalcase.innerText = tottal;
}

function tottalblanceelemnet(elementid){
    const tottatprice = document.getElementById(elementid);
   const tottalstring = tottatprice.innerText;
   const tottalelement = parseInt(tottalstring)
   return tottalelement;
}

function calculatetottal(){
    const tottalphoneamount = tottalblanceelemnet('phone-price');
    const casetottalamout = tottalblanceelemnet('tottal-price');
    const tottalamount = tottalphoneamount + casetottalamout;
    const tottalcost = document.getElementById('tottal-phone');
    tottalcost.innerText = tottalamount;
}


document.getElementById('phone-plus-btn').addEventListener('click',function(){
   const newinputvalue = phonenumberbyid(true);
   tottalphoneprice(newinputvalue);
    calculatetottal()

})


document.getElementById('phone-minas-btn').addEventListener('click',function(){
   const newinputvalue = phonenumberbyid(false)

   tottalphoneprice(newinputvalue)
   calculatetottal()
})

