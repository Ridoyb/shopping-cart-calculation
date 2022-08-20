
function updatePhoneNumber(isIncrease){
    const phoneNumberField= document.getElementById('phone-number');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber= parseInt(phoneNumberFieldString);

    let newPhoneNumber;
    if(isIncrease===true){
         newPhoneNumber= previousPhoneNumber + 1;
         
    }

    else{
        newPhoneNumber= previousPhoneNumber - 1;
         
    }

    phoneNumberField.value=newPhoneNumber;
    return newPhoneNumber;
    
}


function updatePhoneTotalprice(newPhoneNumber){

    const newPhoneTotalPrice= newPhoneNumber * 1219;
    const phoneTotalElement= document.getElementById('phone-total');
    phoneTotalElement.innerText=newPhoneTotalPrice;

}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber=updatePhoneNumber(true);

    updatePhoneTotalprice(newPhoneNumber);

    calculateSubTotal();

    

});


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber=updatePhoneNumber(false);

    updatePhoneTotalprice(newPhoneNumber);

    calculateSubTotal();
});