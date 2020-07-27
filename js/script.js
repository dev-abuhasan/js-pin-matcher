// Targeting to all with querySelector
    const showGeneratedNumber= document.querySelector('#show-generated-number');
    const showNumberInput= document.querySelector('#show-number-input');
    const generateBtn= document.querySelector('.generate-btn');
    const digitButton= document.querySelector('.calc-body');
    const deletebtn= document.querySelector('#delete-back-btn');
    const clearBtn= document.querySelector('#all-clear');
    const submitBtn= document.querySelector('.submit-btn');
// Targeting to all By id;

// Targeting to all by class;

// Targeting to all by TagsName;


//Generate pin by clicking generat btn
    generateBtn.addEventListener('click', generateRandomNum);
// Show type of number on input
    digitButton.addEventListener('click',typeingPinOnInput);
// Clear button
    clearBtn.addEventListener('click',()=>{
        showNumberInput.value='';   
    })
//Backspace button button
    deletebtn.addEventListener('click',()=>{
        showNumberInput.value=showNumberInput.value.slice(0,-1);
    })
// Functionality of submit button
    submitBtn.addEventListener('click', submitBtnClicking);