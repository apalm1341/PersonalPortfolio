/**
 * Listen to scroll to change the class of header opacity
 */
function checkScroll(){
    var startY = $('.nav-pills').height() * 2; //This is the point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.nav-pills').addClass("scrolled");
    }else{
        $('.nav-pills').removeClass("scrolled");
    }
}

if($('.nav-pills').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
//all of this javascript up until this point helps make the nav bar more transparent while scrolling!! except for at very top on 1st page for some weird reason.