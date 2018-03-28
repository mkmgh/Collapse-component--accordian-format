$(document).ready(function(){

	    $(".contentClass").hide();
       
    $("#sec1").click(function(){
        $("#content1").toggle();
        $("#content2").hide();
        $("#content3").hide();
        $("#content4").hide();
        });

     $("#sec2").click(function(){
        $("#content2").toggle();
        $("#content1").hide();
        $("#content3").hide();
        $("#content4").hide();
        });

     $("#sec3").click(function(){
        $("#content3").toggle();
        $("#content1").hide();
        $("#content2").hide();
        $("#content4").hide();
        });

     $("#sec4").click(function(){
        $("#content4").toggle();
        $("#content1").hide();
        $("#content2").hide();
        $("#content3").hide();
        });



    });