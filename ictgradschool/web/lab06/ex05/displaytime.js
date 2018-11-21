
function myFunction() {
    var d = new Date();
    // function myFunction() {
    //     document.getElementById("demo").innerHTML=d;
    // }
    var funDays = ["Supday","Fonday", "Tonday","Whipday","Thipday","Frogday","Slumpday"];
    var funMonths = ["Jumpuary","Funuary","Mark","Avril","Mayhem","Junk","Jukebox","O'Gust","Saptember","Octobaby","NopeEmber","Decemation"]

document.getElementById("datetime").innerText="Today is "+funDays[d.getDay()] + " the " + d.getDate()+ "nd of " + funMonths[d.getMonth()] ;
}