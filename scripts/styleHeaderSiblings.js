addLoadEvent(styleHeaderSiblings)
function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        // elem.style.fontWeight = "bold";
        // elem.style.fontSize="1.2em"
        addClass(elem, "intro"); 
        // elem.className="intro"
    }
}
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

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

// addLoadEvent(function () {
//     styleHeaderSiblings();
//     console.log("GOES HERE");
// });
