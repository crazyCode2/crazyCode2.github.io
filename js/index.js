(function () {
  var setFont = function () {
    var html = document.documentElement;
    var width = html.clientWidth;
    if (width < 1024) {
      width = 1024;
    }
    if (width > 1920) {
      width = 1920;
    }
    var fontSize = width / 80 + "px";
    html.style.fontSize = fontSize;
  };
  setFont();
  window.onresize = function () {
    setFont();
  };
})();
(function () {
  $(".monitor").on("click", ".tabs a", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).attr("data-index");
    $(".content").eq(index).show().siblings(".content").hide();
  });
  $(".monitor .marquee").each(function () {
    var rows = $(this).children().clone();
    $(this).append(rows);
  });
})();
(function () {
  var myChart = echarts.init(document.querySelector(".pie"));
  var option = {
    tooltip: { trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)" },
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "area",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" },
        ],
        labelLine: { length: 8, length2: 10 },
      },
    ],
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    label: { fontSize: 10 },
  };
  myChart.setOption(option);
})();
(function () {
  var item = {
    name: "",
    value: 1200,
    itemStyle: { color: "#254065" },
    emphasis: { itemStyle: { color: "#254065" } },
    tooltip: { extraCssText: "opacity:0" },
  };
  var option = {
    tooltip: { trigger: "item", axisPointer: { type: "line" } },
    grid: {
      top: "6%",
      right: "3%",
      bottom: "3%",
      left: "0%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0, 240, 255, 0.3)",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        axisTick: { alignWithLabel: true, alignWithLabel: false, show: false },
        axisLabel: { color: "#4c9bfd" },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLabel: { color: "#4c9bfd" },
        splitLine: { lineStyle: { color: "rgba(0, 240, 255, 0.3)" } },
      },
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240,
        ],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "red" },
            { offset: 1, color: "blue" },
          ]),
        },
      },
    ],
  };
  var myChart = echarts.init(document.querySelector(".bar"));
  myChart.setOption(option);
})();
(function () {
  var data = {
    day365: { orders: "20,301,987", amount: "99834" },
    day90: { orders: "301,987", amount: "9834" },
    day30: { orders: "1,987", amount: "3834" },
    day1: { orders: "987", amount: "834" },
  };
  var h4orders = $(".order .data h4:eq(0)");
  var h4amount = $(".order .data h4:eq(1)");
  $(".order").on("click", ".filter a", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var key = $(this).attr("data-key");
    var val = data[key];
    h4orders.html(val.orders);
    h4amount.html(val.amount);
  });
  var index = 0;
  window.setInterval(function () {
    index++;
    if (index > 3) {
      index = 0;
    }
    $(".order .filter a").eq(index).click();
  }, 1000);
})();
(function () {
  var option = {
    xAxis: {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: { show: false },
      axisLabel: { color: "#4c9bfd" },
      axisLine: { show: false },
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLabel: { color: "#4c9bfd" },
      splitLine: { lineStyle: { color: "#012f4a" } },
    },
    series: [
      {
        name: "预期销售额",
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        type: "line",
        smooth: true,
        itemStyle: { color: "#00f2f1" },
      },
      {
        name: "实际销售额",
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        type: "line",
        smooth: true,
        itemStyle: { color: "#ed3f35" },
      },
    ],
    grid: {
      show: true,
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      borderColor: "#012f4a",
      containLabel: true,
    },
    legend: { textStyle: { color: "#4c9bfd" }, right: "10%" },
  };
  var myChart = echarts.init(document.querySelector(".line"));
  myChart.setOption(option);
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
    ],
  };
  $(".sales").on("click", ".caption a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    var arr = data[$(this).attr("data-type")];
    option.series[0].data = arr[0];
    option.series[1].data = arr[1];
    myChart.setOption(option);
  });
  var index = 0;
  var dsq = window.setInterval(function () {
    index++;
    if (index > 3) {
      index = 0;
    }
    $(".sales .caption a").eq(index).click();
  }, 1000);
  $(".line").mouseenter(function () {
    window.clearInterval(dsq);
  });
  $(".line").mouseleave(function () {
    dsq = window.setInterval(function () {
      index++;
      if (index > 3) {
        index = 0;
      }
      $(".sales .caption a").eq(index).click();
    }, 1000);
  });
})();
(function () {
  var option = {
    series: [
      {
        type: "pie",
        radius: ["130%", "150%"],
        center: ["48%", "80%"],
        label: { show: false },
        startAngle: 180,
        hoverOffset: 0,
        data: [
          { value: 100 },
          { value: 100 },
          { value: 200, itemStyle: { color: "transparent" } },
        ],
      },
    ],
  };
  var myChart = echarts.init(document.querySelector(".gauge"));
  myChart.setOption(option);
})();
(function () {
  var data = [
    { name: "可爱多", num: "9,086" },
    { name: "娃哈哈", num: "8,341" },
    { name: "喜之郎", num: "7,407" },
    { name: "八喜", num: "6,080" },
    { name: "小洋人", num: "6,724" },
    { name: "好多鱼", num: "2,170" },
  ];
  $(".province").on("mouseenter", ".sup li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var randomDate = data.sort(function () {
      return 0.5 - Math.random();
    });
    var html = "";
    randomDate.forEach(function (val) {
      html += `<li><span>${val.name}</span><span>${val.num}<s class="icon-up"></s></span></li>`;
    });
    $(".province .sub").html(html);
  });
  $(".province .sup li").eq(0).mouseenter();
  var index = 0;
  window.setInterval(function () {
    index++;
    if (index > 4) {
      index = 0;
    }
    $(".province .sup li").eq(index).mouseenter();
  }, 1000);
})();
