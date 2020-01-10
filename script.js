$(window).on("load",function(){
  $(".loader-wrapper").delay(750).fadeOut("slow");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

/* activate scrollspy menu for highlighting section*/
$('body').scrollspy({
  target: '#navbarNavAltMarkup',
  offset: 50
});