function getHistory(){
    return document.getElementById("history-value").innerHTML;
}
//alert(getHistory());
function printHistory(num){
    document.getElementById("history-value").innerHTML=num;
}
//printHistory("9*9+8");
function getOutput(){
    return document.getElementById("output-value").innerHTML;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerHTML=num;
    }
    else{
        document.getElementById("output-value").innerHTML=getFormatedNumber(num);
    }
    
}
function getFormatedNumber(num){
    if(num=="-")
        {
            return "";
        }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
//printOutput("9875648");

function reverseNumberformat(num){
    return Number(num.replace(/,/g,''));
}
//alert(reverseNumberformat(getOutput()));
var operator=document.getElementsByClassName("operator");
//alert(operator);
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
//        alert("the operator clicked: "+this.id);
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberformat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!=""||history!=""){
                //condition?true:false;
                output=output==""?output:reverseNumberformat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
                
            }
        }
    });
}

var number=document.getElementsByClassName("number");
//alert(operator);
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
//        alert("the number clicked: "+this.id);
        var output=reverseNumberformat(getOutput());
        if(output!= NaN)
            {//if output is a number
                output=output+this.id;
                printOutput(output);
            }
    });
}
