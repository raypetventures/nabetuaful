$(document).ready(function(){

// WARNING: WHEN WEBSITE BEGINS
function loaderPage(){
  $(".fst-loader").hide();
  $("header, #image-box, #professional-website, .nb-footer").fadeIn(3000);
}
setTimeout(loaderPage, 4000);

  // FIRST PAGE LOADER : TXT animation
  setInterval(function() {
    $(".fst-page-loader-txt").text('Increase Revenue. Get Your Business Online!');
  }, 1000);

  setInterval(function() {
    $(".fst-page-loader-txt").text('Target the Right Audience');
  }, 3000);


    });
