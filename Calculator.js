//clear function

function clear() {  
    document.getElementById('result').value = "";
    console.log("clear")
}
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clear)

//display  

function display(value) {
    document.getElementById("result").value += value;
}


//function to calculate/evaluate

const calculate = document.getElementById('calculate')//equal sign

calculate.onclick = function(){
let c = document.getElementById('result').value;
let r = eval(c);
document.getElementById('result').value = r;
}