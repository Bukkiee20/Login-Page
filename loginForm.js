var user_input=document.getElementsByClassName("user_input").value;
var pass_input=document.getElementsByClassName("pass_input").value;

function Login(){
    if (user_input ==" " || pass_input ==" "){
        alert("Error");
    }
}
