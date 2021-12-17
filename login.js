document.querySelector("#btn").addEventListener("click",login)
var regduserdata=JSON.parse(localStorage.getItem("regddata"))||[];
// console.log(regduserdata);

function login(){
   
    var email=document.querySelector("#email").value
    var pass=document.querySelector("#passwd").value
    if(email=="admin" && pass=="admin"){
         window.location.href="Admin.html"
    }
     else{
         isuser=false
        for(var i=0;i<regduserdata.length;i++){
           if(regduserdata[i].emailid==email && regduserdata[i].password==pass){

              console.log(regduserdata[i]);
              isuser=true
              break;
           }
     }
        if(isuser==true){
            alert("login successfull")
            window.location.href="Account.html"
        }
        else{
            alert("invalid");
        }
     }
}
document.querySelector("#btn1").addEventListener("click",facebkpage)

function facebkpage(){
    window.location.href="https://www.facbook.com";
}
document.querySelector("#btn2").addEventListener("click",googlepage)

function googlepage(){
    window.location.href="https://www.google.com";
}
document.querySelector("#btn3").addEventListener("click",regdpage)

function regdpage(){
    window.location.href="register.html";
}