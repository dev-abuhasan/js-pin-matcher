// generate and show the pin on input #show-generated-number
function generateRandomNum(){
    var randomNum=1000+ Math.floor(Math.random()*9000);
    showGeneratedNumber.value= randomNum;
}
// Show On input generat random pin number
function typeingPinOnInput(e){
    if((e.target.classList.contains('button')) && !(e.target.classList.contains('oparator'))){
        showNumberInput.value+=e.target.innerText; //remind on calculator project;
    }
}
//submit button clicking function
function submitBtnClicking(){
    if(showGeneratedNumber.value == ''){
        //if click before generate random num;
        document.getElementById("ganarate-something-msg").className='notify d-block';
    }
    else{
        if( showNumberInput.value === showGeneratedNumber.value){
            document.getElementById("ganarate-something-msg").className='notify d-none';
            document.getElementById("not-matched-msg").className='notify d-none';
            document.getElementById("matched-msg").className ='notify d-block';
        }
        else{
            document.getElementById("ganarate-something-msg").className='notify d-none';
            document.getElementById("not-matched-msg").className='notify d-block';
            document.getElementById("matched-msg").className ='notify d-none';
        }
    } 
    showNumberInput.value = '';//for click and get empty input
}



