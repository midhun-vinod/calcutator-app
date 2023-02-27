// to display content each key is pressed

function displayContent(content){

    result.value+=content
}
function evaluateExpr(){

    result.value=eval(result.value)
}
function allClear(){

result.value=""
}
function clearL(){
    
    result.value=result.value.slice(0,-1)

}