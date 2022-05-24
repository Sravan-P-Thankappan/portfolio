var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var phoneError = document.getElementById('phone-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName()
{
var name = document.getElementById('name').value;


  if(name.length==0)
  {
    nameError.innerHTML="Name is required";
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+/))
  {
    nameError.innerHTML="write the full name";
    return false;
  }
  if(name.length<5)
  {
    nameError.innerHTML="Enter a valid name";
    return false;
  }
  nameError.innerHTML='Valid'
  return true
}

 




function validateEmail()
{
  var email = document.getElementById('mail').value;

  if(email.length==0)
  {
    emailError.innerHTML="Email is required";
    return false;

  }
  if(!email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/))
  {
    emailError.innerHTML="Email is invalid";
    return false;
  }
  emailError.innerHTML='Valid'
  return true

}

function validatePhone()
{
  var Phone = document.getElementById('ph').value;

  if(Phone.length==0)
  {
    PhoneError.innerHTML='Phone number is required';
    return false;

  }
  if(!Phone.match( /^[1-9]{1}[0-9]{9}$/))
  {
    phoneError.innerHTML='write 10 digits';
    return false;
  }
  phoneError.innerHTML='valid'
  return true
}

function validateMessage()
{
  var message=document.getElementById('contact-message').value;
  if(message.length==0)
  {
    messageError.innerHTML='Type anything';
    return false;
  }
  if(message.length<10)
  {
    messageError.innerHTML='Minimum 10 letters required';
    return false;
  }
  messageError.innerHTML='valid'
  return true;
}
function validateForm()
{
  if(!validateName()|| !validateEmail()|| !validatePhone()|| !validateMessage())
  {
    submitError.innerHTML='Please fix the error';
    return false;
  }
}