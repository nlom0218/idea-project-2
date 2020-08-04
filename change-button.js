// 이것은 주석 입니다.
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },

  setHeadTitle: function (color) {
    document.querySelector(".index_head_title").style.backgroundColor = color;
  },

  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },

  setFooterBackgroundColor: function (color) {
    document.querySelector("footer").style.backgroundColor = color;
  },

  setContentFrameBackgroundColor: function (color) {
    document.querySelector(".content-frame").style.backgroundColor = color;
  },
  setBackBackgroundColor: function (color) {
    document.querySelector(".back").style.backgroundColor = color;
    document.querySelector(".partone_content").style.backgroundColor = color;
    document.querySelector(".parttwo_content").style.backgroundColor = color;
    document.querySelector(".review1").style.backgroundColor = color;
    document.querySelector(".review2").style.backgroundColor = color;
  },
};

function nightDayHandler(apple) {
  if (apple.value === "N") {
    Body.setBackgroundColor("#1E1F21");
    Body.setFooterBackgroundColor("#292A2D");
    Body.setHeadTitle("#1E1F21");
    Body.setColor("white");
    Body.setContentFrameBackgroundColor("#292A2D");
    apple.value = "D";
  } else {
    Body.setBackgroundColor("white");
    Body.setHeadTitle("white");
    Body.setFooterBackgroundColor("#f4f5f7");
    Body.setColor("#1E1F21");
    Body.setContentFrameBackgroundColor("#f4f5f7");
    apple.value = "N";
  }
}

function introNightDayHandler(apple) {
  if (apple.value === "N") {
    Body.setColor("white");
    Body.setBackgroundColor("#1E1F21");
    Body.setFooterBackgroundColor("#292A2D");
    Body.setContentFrameBackgroundColor("#292A2D");
    Body.setBackBackgroundColor("#1E1F21");
    apple.value = "D";
  } else {
    Body.setColor("#1E1F21");
    Body.setBackgroundColor("white");
    Body.setFooterBackgroundColor("#f4f5f7");
    Body.setContentFrameBackgroundColor("#f4f5f7");
    Body.setBackBackgroundColor("#f4f5f7");
    apple.value = "N";
  }
}
