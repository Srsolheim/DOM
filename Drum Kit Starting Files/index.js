
//Start i at 0, and end when i is no longer less than number of drum buttons. Add 1 to i for each loop
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {

//i starts at 0, when the loop runs again it's 1, etc
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    alert("I got clicked!");
  });

}
