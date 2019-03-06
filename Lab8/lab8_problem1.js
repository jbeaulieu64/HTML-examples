window.onload = function(){
  var form = document.getElementById("mainForm");
  document.addEventListener("submit",function(event){
    var Title = document.getElementsByClassName("required")[0];
    if (Title.value == "") {
      Title.parentElement.style.backgroundColor = "#FF0000";
      event.preventDefault();
    }
    else {

    }


    var Description = document.getElementsByClassName("required")[1];
    if (Description.value == "") {
      Description.parentElement.style.backgroundColor = "#FF0000";
      event.preventDefault();
    }
    else {

    }


    var Accept = document.getElementsByClassName("required")[2];
    if (!Accept.checked) {
      Accept.parentElement.style.backgroundColor = "#FF0000";
      event.preventDefault();
    }
    else {

    }
  })
}
