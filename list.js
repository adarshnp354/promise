function load(){
var req,content,txt="";
req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200) {
        content=JSON.parse(this.responseText);
        for(var i=0;i<content.length;i++){

            txt+="<tr>"
            txt+="<td>"+ `<input type="checkbox" onclick="counter(this)" disable style="";>`+ content[i].title+"</td>"
            txt+="</tr>"
        }
        document.getElementById("tab").innerHTML=txt;
    }
};
req.open("GET","https://jsonplaceholder.typicode.com/todos",true);
req.send();
}
function logout(){
    window.location.replace("todo.html");
}
var count=0;

function counter(value){
    var set = new Promise(function(resolve, reject){
        if (value.checked == true){
            count++;
            if (count >= 6){
                resolve("5 tasks over");
            }
        }else{
            count--;
        }
    });
    set.then(function(){
        alert("5 tasks completed already")
    });
}