document.querySelector("#myform").addEventListener("submit",addresspart)
  var data=JSON.parse(localStorage.getItem("addressdata"))||[];


  
function addresspart(event){
    event.preventDefault();
    var email=document.querySelector("#mail").value;
    var country=document.querySelector("#country").value
    var firstname=document.querySelector("#fname").value
    var lastname=document.querySelector("#lname").value
    var address=document.querySelector("#add").value
    var city=document.querySelector("#city").value
    var state=document.querySelector("#state").value
    var pin=document.querySelector("#pin").value
    var phone=document.querySelector("#phone").value

    //  console.log(email,firstname,lastname,country,address,city,state,pin,phone)
    // console.log("here");
    var obj={
        email:email,
        catagory:country,
        firstname:firstname,
        lastname:lastname,
       address:address,
       city:city,
       state:state,
       pin:pin,
       phone:phone,
       
    };
      data.push(obj)
      var x = 0;
  var button = document.querySelector("#btn").addEventListener("click",function(){
     
        if(email.length >= 5 && firstname.length != "" && lastname.length != "" && address.length != "" && city.length != "" && phone.length != "" && state.length != "")
        
        {
            window.location.href="order.html"
            localStorage.setItem("addressdata",JSON.stringify(data))

        }
        else if(x == 0){
            alert("Please Fill full details !")
            x = 2;
        }
       
    })

    
    //   window.location.href="order.html";
}

