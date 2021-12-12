$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /* кнопка вверх*/
  var counterDown = $(".counter-down"); /* кнопка вниз*/

  //функция при наведении мышкой на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("date-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик
  });

  counterUp.on("click", function () {
    //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[date-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[date-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
