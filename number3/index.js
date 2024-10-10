const display = document.getElementById("display");

appendToDisplay = (input)=>{
    display.value += input;
}

clearDisplay=()=>{
    display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value ="error";
  }
}