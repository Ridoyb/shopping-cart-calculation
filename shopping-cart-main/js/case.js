
function updateCaseNumber(isIncrease){
    const caseNumberField= document.getElementById('case-number');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber= parseInt(caseNumberFieldString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber= previousCaseNumber + 1;
        
    }

    else{
        newCaseNumber= previousCaseNumber - 1;
    }

    caseNumberField.value=newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalprice(newCaseNumber){

    const newCaseTotalPrice= newCaseNumber * 59;
    const caseTotalElement= document.getElementById('case-total');
    caseTotalElement.innerText=newCaseTotalPrice;

}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber= updateCaseNumber(true);
    
    updateCaseTotalprice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber= updateCaseNumber(false);
    
    updateCaseTotalprice(newCaseNumber);
    calculateSubTotal();
})
