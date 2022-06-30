var currentnumberwrapper=document.getElementById("currentNumber");
var currentnumber=0;


function increment(){
    if (currentnumber<10){
        currentnumber+=1;
    }

    else{
        currentnumber=10;
    }

    if(currentnumber>=0){
        currentnumberwrapper.style.color="black";
    }
        
    currentnumberwrapper.innerHTML=currentnumber;
}

function decrement(){
    if (currentnumber>-10){
        currentnumber-=1;
    }

    else{
        currentnumber=-10;
    }

    if(currentnumber<0){
        currentnumberwrapper.style.color="red";
    }

    currentnumberwrapper.innerHTML=currentnumber;
}
