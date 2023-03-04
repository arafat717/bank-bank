
function inputValueById(isinputvalue){
    const input = document.getElementById('case-input-feild');
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

function tottalcaseprice(newinputvalue){
    const tottal = newinputvalue * 59 ;
    const tottalcase = document.getElementById('tottal-price');
    tottalcase.innerText = tottal;
}




document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newinputvalue= inputValueById(true)

   tottalcaseprice(newinputvalue)
   calculatetottal()
})

document.getElementById('btn-case-minas').addEventListener('click',function(){
   const newinputvalue= inputValueById(false)

   tottalcaseprice(newinputvalue)
   calculatetottal()
})