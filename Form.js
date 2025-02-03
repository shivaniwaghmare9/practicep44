

let sub=()=>{
   let inpname= document.querySelector("#name").value
   let inplast= document.querySelector("#last").value
   let inpnum= document.querySelector("#number").value
   let inpemail= document.querySelector("#email").value
   let inppass= document.querySelector("#pass").value
   let inpcpass= document.querySelector("#confirm").value
   let inpdob= document.querySelector("#dob").value
   let inpgen= document.querySelector("#gen").value
   let inpopt= document.querySelector("#option")
   let inpbrn= document.querySelector("#brn").value


   let errname= document.querySelector("#errname")
   let errlast= document.querySelector("#errlast")
   let errnum= document.querySelector("#errnumber")
   let erremail= document.querySelector("#erremail")
   let errpass= document.querySelector("#errpass")
   let errcpass= document.querySelector("#errcpass")
   let errdob= document.querySelector("#errdob")
   let errgen= document.querySelector("#errgen")
   let erropt= document.querySelector("#erroption")
   let errbrn= document.querySelector("#errbrn")

   if(inpname==""){
      let nameinput=document.querySelector("#name")
      nameinput.style.border="1px solid red"
      nameinput.placeholder=" Enter The Name"
      nameinput.style.color="red"
      errname.innerHTML="Please Enter The Name"
      errname.style.color="red"
      
      return false;
  }
  if(inplast==""){
      errname.innerHTML=""
   errlast.innerHTML="Please Enter The Last Name"
   errlast.style.color="red"
   return false;
}
if(inpnum==""){
   errnum.innerHTML="Please Enter the Number"
   errnum.style.color="red"
   return false;
}
if(inpemail==""){
   erremail.innerHTML="Please Enter The E-mail"
   erremail.style.color="red"
   return false;
}
if(inppass==""){
   errpass.innerHTML="Please Enter The Password"
   errpass.style.color="red"
   return false;
}
if(inpcpass==""){
   errcpass.innerHTML="Please Enter The Confirm-Password"
   errcpass.style.color="red"
   return false;
}
if(inpdob==""){
   errdob.innerHTML="Please Enter The DOB"
   errdob.style.color="red"
   return false;
}
if(inpgen==""){
   errgen.innerHTML="Please Select The Gender"
   errgen.style.color="red"
   return false;
}
if(inpopt==""){
   erropt.innerHTML="Please Choose Your Course"
   erropt.style.color="red"
   return false;
}
if(inpbrn==""){
   errbrn.innerHTML="Please Select Branch"
   errbrn.style.color="red"
   return false;
}

if(inppass!==inpcpass){
  
   errcpass.innerHTML="password does not match please enter the correct password"
       errcpass.style.color="brown"
       document.querySelector("#confirm").value=""
       document.querySelector("#confirm").focus()
       
       return false;
}

else if(isNaN(inpnum)){
   errnum.innerHTML="please enter only number"
   errnum.style.color="red"
   return false;
}
else if(inpnum.length!==10){
   errnum.innerHTML="Enter 10 digit"
   errnum.style.color="red"
   return false;
}
else if(!(inpemail.includes('@') && inpemail.includes(".com"))){
   erremail.innerHTML="Please Enter the Valid E-mail @,.com"
   erremail.style.color="red"
   return false;
}
else if(!(inppass.match([/123456789/])&& inppass.match([/!@#$%^&*><.,/])&& inppass.match([/a-z/]))){
   errpass.innerHTML="Please Enter Strong Password Write dots,symbols,number,alpha"
   errpass.style.color="red"
   return false;
}




   

}