



var usercart = JSON.parse(localStorage.getItem("cartdatabase")) || [];
var buttun = document.querySelector("#subpricebutton");

var total = 0;
console.log(usercart)

usercart.map(function (elem){
    total = total + Number(elem.price)
 
})
buttun.textContent ="Rs.  " + total;

