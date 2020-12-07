
function validation()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    var password=document.getElementById('password').value;
    var password1=document.getElementById('cpassword').value;
    var errorElement=document.getElementById('error');
    var text;
    var pattern_name=/^[A-Za-z]{3,20}$/;

var pattern_email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
var pattern_password=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/
var pattern_mobileno=/^[0-9]{10,10}/
  errorElement.style.padding="10px";
  if(!pattern_name.test(name))
  {text="Please Enter Valid Name";
  errorElement.innerHTML=text;
  return false;

  }
  if(name.length<2 ){
      text="Please Enter Valid Name";
      errorElement.innerHTML=text;
      return false;
  }
  if(!pattern_email.test(email))
  {text="Please Enter Valid Email";
  errorElement.innerHTML=text;
  return false;

  }
  /* if(email.indexOf("@")==-1 ||email.length<6){
    text="Please Enter Valid Email";
    errorElement.innerHTML=text;
    return false;
} */
  if(!pattern_mobileno.test(number)){
    text="Please Enter Valid Phone Number";
    errorElement.innerHTML=text;
    return false;
}
if(password.length<6){
    text="Please Enter More Than 6 letters for Password";
    errorElement.innerHTML=text;
    return false;
}
if(!pattern_password.test(password))
{
    text="Password must contain 1 SpecialSymbol[@,$,etc],Number,(U&L)Alphabets";
    errorElement.innerHTML=text;
    return false;
}

if(password1!=password){
    text="Please Confirm The Password";
    errorElement.innerHTML=text;
    return false;
}
text="Successfully Registered"
errorElement.innerHTML=text;
alert("Successfully Registered");
  return false;
}
function validation1(){
    
var email1=document.getElementById('email1').value;
var password2=document.getElementById('password1').value;
var errorElement1=document.getElementById('error1');
var text1;
var pattern_email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
var pattern_password=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  errorElement1.style.padding="10px";
  if(!pattern_email.test(email1))
  {text1="Please Enter Valid Email";
  errorElement1.innerHTML=text1;
  return false;

  }
  if(!pattern_password.test(password2))
  {
      text1="Please Enter Correct Password";
      errorElement1.innerHTML=text1;
      return false;
  }
text1="Not Registered"
errorElement1.innerHTML=text1;
alert("Invalid User");
return false;
}