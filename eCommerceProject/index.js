var slideIndex = 0; //defining the index as 0


function carousel() { //creating the function that will make images changes 

  // grabs all the documents/images called mySlides and naming it x
  var x = document.getElementsByClassName("mySlides");
  var i; //variable we are using to help run function, will be defined later
  for (i = 0; i < x.length; i++) {  //variable i is defined as 0 to begin; is 'i' less than the amount of slides in "mySlides"; add 1 to variable i

    x[i].style.display = "none"; //the display property is changed to none to hide all mySlides on webpage
  }


  slideIndex++; //increases count by 1


  if (slideIndex > x.length)  // if the slideIndex is larger than amount of slides in mySlides
  {slideIndex = 1} // slideIndex turns into 1 
  x[slideIndex-1].style.display = "block"; // then x(mySlides) is reset to 0 [1-1] starting images back to the start of array [0]
  setTimeout(carousel, 7000); // Change image every 8 seconds
}

carousel(); //calls the function 
