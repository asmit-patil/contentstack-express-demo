// add your code here
function showlist(){
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    //this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
}



$( document ).ready(function() {
  $("input[type='text']" ).blur(function () {
  var text = $(this).val();
  if(text == "")
  {
      $(this).css('border','2px solid red');
      $("#p1").text="enter the first name";
  }
  if (text != ""){
    $(this).css('border','');
  }
  });
});
$( document ).ready(function() {
  $("input[type='email']" ).blur(function () {
  var text = $(this).val();
  if(text == "")
  {
      $(this).css('border','2px solid red');
  }
  if (text != ""){
    $(this).css('border','');
  }
  });
});


$( document ).ready(function() {
  $("select").blur(function () {
  var text1 = document.getElementById("business").selectedIndex;
  var text2 = document.getElementById("help").selectedIndex;
  if(text1 < 1 )
  {
      $(this).css('border','2px solid red');
  }
   if(text2 < 1 )
  {
      $(this).css('border','2px solid red');
  }
  if (text1 >= 1){
    $(this).css('border','');
  }
   if(text2 >= 1 )
  {
      $(this).css('border','');
  }
  });
});


function validateForm(){
  
  var fname=document.getElementById("fname").value;
  var lname=document.getElementById("lname").value;
  var mail=document.getElementById("mail").value;
  var cname=document.getElementById("cname").value;
  var job=document.getElementById("job").value;
  var business=document.getElementById("business").selectedIndex;
  var help=document.getElementById("help").selectedIndex;
  var alphaExp = /^[a-zA-Z]+$/;
  
 

  if(fname == "" && lname== "" && mail=="" && cname=="" && job=="")
  {
    document.getElementById("p1").innerHTML="Enter all the details";

    
  return false;
  
 }
  if(fname == ""){
    document.getElementById("p1").innerHTML="enter the first name";
    return false;
    
  }
  if(lname== "")
  {
    
    document.getElementById("p1").innerHTML="enter the last name";
return false;
 
  }
  if(mail==""){
    document.getElementById("p1").innerHTML="enter the work email";
    return false;
 
  }
  if(cname=="")
  {
    document.getElementById("p1").innerHTML="enter the company name";
return false;

  }
  if(job==""){
    document.getElementById("p1").innerHTML="enter the job title";
  
    return false;
    
  }
if (business < 1 ){
    document.getElementById("p1").innerHTML="select proper option for business type";
  return false;
  }
  if(help  < 1){
    document.getElementById("p1").innerHTML="select proper option for type of help";
  return false;
  }
  if (!fname.match(alphaExp)) {

    document.getElementById("p1").innerHTML="Enter proper first name with alphabets only";
    return false;
  }
  if (!lname.match(alphaExp)) {

    document.getElementById("p1").innerHTML="Enter proper last name with alphabets only";
    return false;
  }
  if (!job.match(alphaExp)) {

    document.getElementById("p1").innerHTML="Enter proper job title with alphabets only";
    return false;
  }
  


}
function focusMethod(){
           
    document.getElementById("fname").focus();
    document.getElementById("lname").focus();
    document.getElementById("cname").focus();
    document.getElementById("mail").focus();
    document.getElementById("job").focus();
    document.getElementById("business").focus();
    document.getElementById("help").focus();
  
}
