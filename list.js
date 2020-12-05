function load(){
var req,data,content,txt=[];
req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        content=JSON.parse(this.responseText);
        data=content.list;
        for(i=0;i<data.length;i++){
            txt+="<tr>"
            txt+="<td>"+data[i].userId+"</td>"
            txt+="<td>"+data[i].id+"</td>"
            txt+="<td>"+data[i].title+"</td>"
            txt+="<td>"+data[i].completed+"</td>"
            txt+="</tr>"
        }
        document.getElementById("tab").innerHTML=txt;
    }
};
req.open("GET","https://jsonplaceholder.typicode.com/todos",true);
req.send();
}