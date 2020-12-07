function load(){
var req,data,content,txt="";
req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200) {
        content=JSON.parse(this.responseText);
        for(var i=0;i<content.length;i++){
            txt+="<tr>"
            txt+="<td>"+content[i].title+"</td>"
            txt+="</tr>"
        }
        document.getElementById("tab").innerHTML=txt;
    }
};
req.open("GET","https://jsonplaceholder.typicode.com/todos",true);
req.send();
}