function hightlightRows(){
    if (!document.getElementsByTagName)return false;
    var rows=document.getElementsByTagName("tr");
    for (i = 0; i<rows.length; i++){
        rows[i].onmouseover=function(){
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout= function(){
            this.style.fontWeight="normal";
        }
    }
}
addLoadEvent(hightlightRows);