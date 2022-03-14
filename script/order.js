document.querySelector("#myform").addEventListener("submit",addorder)
var orderdata=JSON.parse(localStorage.getItem("paymentdata"))||[]
function addorder(event){
    event.preventDefault()
    var name=document.querySelector("#name").value
    var cardnumber=document.querySelector("#number").value
    var date=document.querySelector("#date").value
    var cvv=document.querySelector("#cvv").value
    if(cardnumber=="" || cardnumber.length!=16){
        alert("Error")
    }
    else if(cvv=="" || cvv.length!=3){
        alert("Error")
    }
    else{
        
        document.querySelector("#myform").addEventListener("submit",function(){
            window.location.href="paymentsucess.html";
        })
    }
    var object={
        name:name,
        cardnumber:cardnumber,
        date:date,
        cvv:cvv,
    };
    orderdata.push(object)
    localStorage.setItem("paymentdata",JSON.stringify(orderdata))
    

}