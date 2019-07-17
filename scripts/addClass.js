addLoadEvent(addClass);
function addClass(element,value){
    if (!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+="";
        newClassName+=value;
        element.className=newClassName;
    }
    console.log("ADD CLASS")
}



// function addClass(element, value) {
//     //element目标元素
//     //value目标类名
//     if (!element.className) {
//         element.className = value;
//     } else {
//         newClassName = element.className;
//         newClassName += " ";
//         newClassName += value;
//         element.className = newClassName;
//     }
//     console.log("ADD CLASS")
// }