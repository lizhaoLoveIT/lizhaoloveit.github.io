$(function () {
  changeReadModel();

  function switchReadMode() {
    var next_mode = $("body").hasClass("night-mode") ? "day" : "night";
    Cookies.set("night-mode", next_mode, {
      expires: 7,
      path: '/'
    });
    changeReadModel();
  }

  function changeReadModel() {
    if (Cookies.get("night-mode") == "night") {
      $("body").addClass("night-mode");
      $("#nightshift").removeClass("fas fa-moon").addClass("far fa-sun");
    }

    // 非夜間模式
    if (Cookies.get("night-mode") == "day") {
      $("body").removeClass("night-mode");
      $("#nightshift").removeClass("far fa-sun").addClass("fas fa-moon");
    }
  }

  $("#nightshift").click(function () {
    switchReadMode();
  });


});