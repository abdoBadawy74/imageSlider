document.body.style.cssText =
  "  margin: 0; padding: 0 ;background-color: #364b63;";

document.getElementsByClassName("center")[0].style.cssText =
  "  position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);height: 450px;width: 800px;box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);overflow: hidden;";

document.getElementsByClassName("images")[0].style.cssText =
  " height: 100%; width: 500%; display: flex;";

document.querySelector(".images .slide").style.cssText =
  "      width: 20%; transition: 0.5s;";

document.querySelector(".images img").style.cssText =
  "  width: 100%; height: 100%;";

document.getElementsByClassName("buttons")[0].style.cssText =
  "  position: absolute;bottom: 20px;left: 50%;transform: translateX(-50%);display: flex;";

$(document).ready(function () {
  $(".btn1").click(function () {
    $(".img1").css("marginLeft", "0");
  });

  $(".btn2").click(function () {
    $(".img1").css("marginLeft", "-20%");
  });

  $(".btn3").click(function () {
    $(".img1").css("marginLeft", "-40%");
  });

  $(".btn4").click(function () {
    $(".img1").css("marginLeft", "-60%");
  });

  $(".btn5").click(function () {
    $(".img1").css("marginLeft", "-80%");
  });

  $("a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
