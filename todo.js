
function log(){
    var usr = document.getElementById("user").value;
    var pas = document.getElementById("pass").value;

    if(usr=="admin" && pas=="12345"){
        alert("SUCCESS");
        window.location.replace("list.html");
    }else{
        alert("INVALID USERNAME OR PASSWORD");
    }
}

