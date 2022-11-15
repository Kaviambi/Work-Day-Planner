
//To get the date and time 
var Current = dayjs();
$('#currentDay').text(Current.format('dddd, MMMM, D, h:mm:ss a'));


var nineAm = $("#hour-9");
var tenAm = $("#hour-10");
var elevenAm = $("#hour-11");
var twelvePm = $("#hour-12");
var onePm = $("#hour-13");
var twoPm = $("#hour-14");
var threePm = $(".hour-15");
var fourPm = $("#hour-16");
var fivePm = $(".hour-17");

var hour = moment().hour();

var userInput;
var hourSpan;



function intipage(){
  console.log("current Hour" + hour); 
   var init9 = JSON.parse(localStorage.getItem("9AM"));
   nineAm.val(init9);
   var init10 = JSON.parse(localStorage.getItem("10AM"));
   tenAm.val(init10);
   var init11 = JSON.parse(localStorage.getItem("11AM"));
   elevenAm.val(init11);
   var init12 = JSON.parse(localStorage.getItem("12PM"));
   twelvePm.val(init12);
   var init1 = JSON.parse(localStorage.getItem("1PM"));
   onePm.val(init1);
   var init2 = JSON.parse(localStorage.getItem("2PM"));
   twoPm.val(init2);
   var init3 = JSON.parse(localStorage.getItem("3PM"));
   threePm.val(init3);
   var init4 = JSON.parse(localStorage.getItem("4PM"));
   fourPm.val(init4);
   var init5 = JSON.parse(localStorage.getItem("5PM"));
   fivePm.val(init5);
}

// Check out past,present and future 
function background(){

  $(".description").each(function(){
    var timeTest = parseInt($(this).attr("id"));
    console.log(timeTest);
    console.log(hour);
    if(hour > timeTest){
      $(this).addClass("past");
    }else if(hour < timeTest) {
      $(this).addClass("future");
    }else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function(){
  
  background()
  intipage()
//Button to get local storage 
  $(".btn"). on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".hour").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });
});