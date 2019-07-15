addLoadEvent(displayAbbreviations);
function displayAbbreviations(){
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length<1) return false;
    var defs = new Array();
    for (var i=0; i<abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        // var definition = current_abbr.getAttribute("title");  
        // console.log(current_abbr) ;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl")
    for (key in defs){
        var definition = defs[key];
        //创建标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbrevaitions");
    console.log(header_text);
    header.appendChild(header_text);
    console.log(header);
    document.body.appendChild(header);
    console.log(dlist);
    document.body.appendChild(dlist);
}