addLoadEvent(dispolayCitations);
function dispolayCitations() {
    if(!document.getElementsByTagName||!document.createElement|| !document.createTextNode) return false;
    var quote = document.getElementsByTagName("blockquote");
    for(i=0; i<quote.length; i++){
        if (!quote[i].getAttribute("cite")) continue;
        var url = quote[i].getAttribute("cite");
        var quoteChildren = quote[i].getElementsByTagName("*");
        var elem = quoteChildren[quoteChildren.length-1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript); 
    }
}