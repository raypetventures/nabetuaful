

function openMenu(){
  $(".fa-bars").hide();
  $(".header-menu-box").animate({

    opacity: '0.8',
    height: '100%',
    width: '100%'
  });

}

function closeMenu(){
  $(".fa-bars").show();
  $(".header-menu-box").animate({

    opacity: '0.1',
    height: '0%',
    width: '0%'
  });

}


// WARNING: FOMRS INPUT INSPECTION BEFORE SUBMISSION
$(".form-input").click(
  alert("its clicked");
);
