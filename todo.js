
function log(){
    var usr = document.getElementById("user").value;
    var pas = document.getElementById("pass").value;
    function valid(usr, pas, callback) {
        ((usr === "admin") && (pas === "12345"))? callback():alert("INVALID USERNAME OR PASSWORD");
    }
    (valid(usr, pas, call))?true:false;
 }
function call(){
    alert("SUCESS")
    window.location.replace("list.html");
}