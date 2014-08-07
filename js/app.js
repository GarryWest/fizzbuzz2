$(document).ready(function(){

  var resetStatus = function(){
    $(".status-text").text("Please enter the number of loops for Fizz Buzz");
    $(".iteminput").val("").focus();
  };

  var playFizzBuzz = function(count) {
    $(".entry-lines").text("");
    for (var i=1; i<=count; i++){
      if ((i % 3 === 0) && (i % 5 === 0)){
          $(".entry-lines").append("fizzbuzz<br/>");
      } else if(i%3 === 0) {
        $(".entry-lines").append("fizz");  
      } else if(i%5 === 0){
        $(".entry-lines").append("buzz");  
      } else {
        $(".entry-lines").append(i);
      };
      $(".entry-lines").append(" ");
    };
    resetStatus();
  };
   
  var printWarning = function(){
        var my_text = $(".iteminput").val();
        $(".status-text").text("Invalid entry: "+my_text+". Please enter an integer.");
        $(".iteminput").val("").focus();
  };

  var validateNumber = function(){
      var my_num = +$(".iteminput").val();
      if (my_num === NaN) {
        printWarning();
      } else if ((my_num % 1 != 0) || (my_num < 1)) {
        printWarning();
      } else {
        playFizzBuzz(my_num);
      }
  };

  resetStatus();

  $(".addbutton").click (function(){
    validateNumber();
  });

  $(document).keypress(function(e){
    if(e.which == 13){
      validateNumber();
    }
  });

});
