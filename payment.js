document.querySelector("#btn").addEventListener("submit",addresspart)
 var data=JSON.parse(localStorage.getItem("addressdata"))||[]
function addresspart(event){
    event.preventDefault()
    var email=document.querySelector("#mail").value
    var select=document.querySelector("#country").value
    var firstname=document.querySelector("#fname").value
    var lastname=document.querySelector("#lname").value
    var address=document.querySelector("#add").value
    var city=document.querySelector("#city").value
    var state=document.querySelector("#state").value
    var pin=document.querySelector("#pin").value
    var phone=document.querySelector("#phone").value

     console.log(email,firstname,lastname,select,address,city,state,pin,phone)
    //console.log("here");
    var obj={
        email:email,
        catagory:select,
        firstname:firstname,
        lastname:lastname,
       address:address,
       city:city,
       state:state,
       pin:pin,
       phone:phone,
       
    }
     data.push(obj)
     console.log(data)
     localStorage.setItem("addressdata",JSON.stringify(data))
     
}