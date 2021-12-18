document.querySelector("#btn").addEventListener("click",register)
 var data=JSON.parse(localStorage.getItem("regddata"))||[]
function register(event){
    event.preventDefault()
    var firstname=document.querySelector("#Fname").value
    var lastname=document.querySelector("#Lname").value
    var email=document.querySelector("#email").value
    var pass=document.querySelector("#pass").value

     console.log(firstname,lastname,email,pass)

    var obj={
        firstname:firstname,
        lastname:lastname,
        emailid:email,
        password:pass,
    }
    data.push(obj)
    // console.log(data)
    localStorage.setItem("regddata",JSON.stringify(data))
     window.location.href="login.html";
}