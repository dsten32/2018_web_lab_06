/* Your answer here */
function pinkify() {
    document.getElementsByClassName("subtitle")[0].textContent ="Hello World";
    document.getElementsByClassName("text2")[0].style.display="none";
document.getElementsByClassName("text1")[0].style.color ="pink";
document.getElementById("footer").style.color="red";

}

function boldy(){
    var par=document.getElementsByTagName("p");
    for(var i=0;i<par.length;i++){
        if(par[i].style.fontWeight===""){
            par[i].style.fontWeight = "bold";
        } else {
            par[i].style.fontWeight = "";
        }
    }
}