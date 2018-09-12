/*SLIDESHOW*/
//selectors
//firstsemester
var FirstSemesterPage = document.querySelector(".first-semester-page");
var FirstSemesterSlide = document.querySelector(".first-semester");

//secondsemester
var SecondSemesterPage = document.querySelector(".second-semester-page");
var SecondSemesterSlide = document.querySelector(".second-semester");

//firstsemester
var ThirdSemesterPage = document.querySelector(".third-semester-page");
var ThirdSemesterSlide = document.querySelector(".third-semester");

//firstsemester
var FourthSemesterPage = document.querySelector(".fourth-semester-page");
var FourthSemesterSlide = document.querySelector(".fourth-semester");

//firstsemester
var FaqPage = document.querySelector(".faq-page");
var FaqSlide = document.querySelector(".faq");

//buttons

var Buttons = document.getElementsByClassName("slide-button");



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*SLIDESHOW*/

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");

	if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

	showPages();


}


/*PAGES*/

function showPages(data){

//1.sem
if(FirstSemesterSlide.style.display == "block"){

  FirstSemesterPage.style.display="flex"


	} else {

		FirstSemesterPage.style.display = "none"

	}

//2.sem

	if(SecondSemesterSlide.style.display == "block"){

  SecondSemesterPage.style.display="flex"


	} else {

		SecondSemesterPage.style.display = "none"

	}

//3.sem

	if(ThirdSemesterSlide.style.display == "block"){

  ThirdSemesterPage.style.display="flex"


	} else {

		ThirdSemesterPage.style.display = "none"

	}

//4.sem

	if(FourthSemesterSlide.style.display == "block"){

  FourthSemesterPage.style.display="flex"


	} else {

		FourthSemesterPage.style.display = "none"

	}

	//faq

	if(FaqSlide.style.display == "block"){

  FaqPage.style.display="flex"


	} else {

		FaqPage.style.display = "none"

	}




}








/*END OF SLIDESHOW*/
