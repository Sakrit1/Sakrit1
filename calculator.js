function appendTodisplay(num){
    let display = document.getElementById("display");
    display.value += num;
    }
    function Clear(){
        display.value = "";
    }
    function Calculate(){
        try{
        display.value = eval(display.value);
        }
        catch(error){
            display.value = "error"
        }
    }