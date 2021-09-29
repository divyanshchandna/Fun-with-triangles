const angleValues = document.querySelectorAll(".angle-value");
const btnCheck = document.querySelector(".btn-check");
const output = document.querySelector(".output");

function checkTraingle(){
    var sum = 0;
    for(let i=0;i<angleValues.length;i++){
        sum = sum + Number(angleValues[i].value) ;
    }
    if( sum === 180){
       
        output.innerText = "Yayyy! The angles form a Triangle";
    }
    else{
        output.innerText = "Oops! The angles do not form a Triangle";
    }
    
}


btnCheck.addEventListener("click" ,function checkInput(){
    output.style.visibility="visible";
    for(let i=0 ;i<angleValues.length;i++){
        if(!angleValues[i].value){
            output.innerText = "Please fill all the fields";
            return 0;
        }
        else if(angleValues[i].value <= 0){
            output.innerText = "Please enter positive values";
            return 0;
        }
    }
    checkTraingle();
});