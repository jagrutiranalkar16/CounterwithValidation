//initialize the counter
let counter = 0;

//create span element
let buttondecrement=document.getElementById('decreament-Button');
const createdElement=document.createElement('span');
createdElement.textContent = 'You have free shipping';
//append span element
const sectionElement = document.getElementById('child2-div');
sectionElement.appendChild(createdElement);

//create 2nd span element
const createdElementSpan=document.createElement('span');
createdElementSpan.textContent = 'Out Of Stock';
//append span 2nd element
const sectionElementSpan = document.getElementById('child2-div');
sectionElementSpan.appendChild(createdElementSpan);

//give styles to an element
createdElement.style.marginLeft='100px';
createdElementSpan.style.marginLeft='130px';

createdElement.hidden=true;
createdElementSpan.hidden=true;
buttondecrement.disabled=true;


function increamentCounter(){
    counter++;
    document.getElementById("bt-result").innerText = counter;
    if(document.getElementById("bt-result").innerText <=0){ 
        buttondecrement.disabled=true;
    } 
    checkRange();
    changeColor();

    buttondecrement.disabled=false;
    //console.log(counter);
}

function decreamentCounter(){
    
    //increament counter only when counter number greater than 0
    if(document.getElementById("bt-result").innerText >0){
        counter--;
        document.getElementById("bt-result").innerText = counter;
        checkRange();
        buttondecrement.disabled=false;
    }
    
    changeColor();
    //disable decrement button when counter is less or equal to 0
    if(document.getElementById("bt-result").innerText <=0){ 
        buttondecrement.disabled=true;
    }

    
    //console.log(counter);
}

function clearResult(){
    document.getElementById("bt-result").innerText = '0';
}

function checkRange(){
    
    if(document.getElementById("bt-result").innerText>=20 || document.getElementById("bt-result").innerText<10 ){
        createdElement.hidden=true;
        return
    }
    else
        //alert('You have free shipping');
        createdElement.hidden=false;
    
}
function changeColor(){
   //set bg color to red when counter is 20
   if(document.getElementById("bt-result").innerText >=20){
        document.getElementById('incrament-Button').style.backgroundColor='red';
        createdElementSpan.hidden=false;
    }   
    else{
       document.getElementById('incrament-Button').style.backgroundColor='rgb(0 0 0 / 7%)';
       createdElementSpan.hidden=true;
    }
}



/*const increamentCounter=()=>
counter=counter+1;
document.getElementById("bt-result").innerText = counter;

const decreamentCounter=()=>
counter=counter-1;
document.getElementById("bt-result").innerText = counter;*/

//document.getElementById("incrament-Button").addEventListener("click", increamentCounter);
//document.getElementById("decreament-Button").addEventListener("click",decreamentCounter);

