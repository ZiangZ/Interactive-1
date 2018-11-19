// AS SOON AS THE PAGE IS LOADED, RUN THIS JQUERY;
$( document ).ready(function() {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  $('.sun').css({
    "width":getRandomInt(60, 290)
  });

  $('.sec1 h1').css({
    "font-size":getRandomInt(20, 30),
    "transform":"rotateZ("+getRandomInt(60, 290)+"deg)"
  });

});
