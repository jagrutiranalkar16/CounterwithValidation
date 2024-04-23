let counter = 0;

function increamentCounter(){
    counter++;
    document.getElementById("bt-result").innerText = counter;
    //console.log(counter);
}

function decreamentCounter(){
    counter--;
    document.getElementById("bt-result").innerText = counter;
    //console.log(counter);
}

function clearResult(){
    document.getElementById("bt-result").innerText = '0';
}


/*const increamentCounter=()=>
counter=counter+1;
document.getElementById("bt-result").innerText = counter;

const decreamentCounter=()=>
counter=counter-1;
document.getElementById("bt-result").innerText = counter;*/

//document.getElementById("incrament-Button").addEventListener("click", increamentCounter);
//document.getElementById("decreament-Button").addEventListener("click",decreamentCounter);

