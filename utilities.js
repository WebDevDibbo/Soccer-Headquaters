function getInputValueById(inputId){

    const inputIdField = document.getElementById(inputId);
    const inputIdValueString = inputIdField.value;
    const inputIdValue = parseInt(inputIdValueString);
    if(isNaN(inputIdValue)){
        alert('Please input a number');
        inputIdField.value = '';
    }
    else{
        return inputIdValue;
    }
}
function getTextValueById(textId){

    const textIdField = document.getElementById(textId);
    const textIdValueString = textIdField.innerText;
    const textIdValue = parseInt(textIdValueString);
    return textIdValue;
}
function setTextValueById(textId,newValue){

    const textIdField = document.getElementById(textId);
    textIdField.innerText = newValue;
}
// disable button
function disableButton (btnId){
    const button =  document.getElementById(btnId)
    button.setAttribute('disabled',true);   
}

