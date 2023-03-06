//点击不同按钮显示不同界面
$(function () {
  // index();

  $(".index_nav ul li").each(function (index) {
    $(this).click(function () {
      $(this).addClass("nav_active").siblings().removeClass("nav_active");
      $(".index_tabs .inner").eq(index).fadeIn().siblings("div").stop().hide();
      if (index == 1) {
        bus();
      }
      
    })
  });
});


// 柱状图模块1
(function () {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //2. 指定配置项和数据
  var option = {
    color: ["#2f89cf", "#F8B448"],
    legend: {
      textStyle: { //图例文字的样式
        color: "rgba(255,255,255,.6) ",
        fontSize: 12
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        color: '#fff' // 文字颜色
      },
    },
    dataset: {
      source: [
        ['decline', '19年同比', '去年同比'],
        ['执行量', -87, -89],
        ['取消量', +1034, +431],
        ['延误量', -99, -99],
      ]
    },
    grid: {
      left: "0%",
      top: "30px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签 相关样式
      axisLabel: {
        color: "rgba(255,255,255,.6) ",
        fontSize: "12"
      },
      // 不显示x坐标轴的样式
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255)",
        }
      }
    },
    yAxis: {

      formatter: "{c}%",
      name: "百分比%",
      nameTextStyle: {
        color: "rgba(255,255,255,.6) ",
        fontSize: 12,
      },
      // 修改刻度标签 相关样式
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        }

      },
      // y轴的线条改为了 2像素
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }

    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
      barWidth: "35%",
      type: 'bar', itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 3
      }
    }, {
      barWidth: "35%",
      type: 'bar', itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 3
      }
    }]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#F5AF60", "#F9E300", "#EDA9BD", "#C4E3C7", "#D4DF45"];

  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  myChart.clear();
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "3%",
      left: "22%",
      bottom: "13%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["运城", "贵阳", "重庆", "海口", "哈尔滨", "昆明", "北京", "大连", "东胜", "福州"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [1, 2, 9, 1, 1, 1, 1, 1, 1, 1],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [5.26, 10.52, 47.36, 5.26, 5.26, 5.26, 5.26, 5.26, 5.26, 5.26],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 15,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 35,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "outside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%",
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

)();

// 按钮有关函数
function drawModel(k) {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#F5AF60", "#F9E300", "#EDA9BD", "#C4E3C7", "#D4DF45", "#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#F5AF60", "#F9E300", "#EDA9BD", "#C4E3C7", "#D4DF45"];

  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  myChart.clear();
  // 2. 指定配置和数据
  var option1 = {
    grid: {
      top: "3%",
      left: "22%",
      bottom: "13%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["运城", "贵阳", "重庆", "海口", "哈尔滨", "昆明", "北京", "大连", "东胜", "福州"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [1, 2, 9, 1, 1, 1, 1, 1, 1, 1],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [5.26, 10.52, 47.36, 5.26, 5.26, 5.26, 5.26, 5.26, 5.26, 5.26],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 15,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 35,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "outside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%",
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  var option2 = {
    grid: {
      top: "3%",
      left: "22%",
      bottom: "13%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["呼和浩特", "大连", "运城", "包头", "北京", "东胜"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [1, 1, 1, 3, 1, 1],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [12.5, 12.5, 12.5, 37.5, 12.5, 12.5],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 15,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 35,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "outside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%",
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  var option3 = {
    grid: {
      top: "3%",
      left: "22%",
      bottom: "13%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["运城", "贵阳", "东胜", '青岛', "三亚", "呼和浩特", "北京", "大连", "福州"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [1, 1, 2, 1, 1, 1, 1, 1, 1],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [11.1, 11.1, 22.2, 11.1, 11.1, 11.1, 11.1, 11.1, 11.1],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 15,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 35,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "outside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%",
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  var option4 = {
    grid: {
      top: "3%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["宜昌", "运城", "南昌", '哈尔滨', "沈阳", "呼和浩特", "昆明", "桂林", "贵阳", "三亚", "包头", "烟台", "北京", "东胜", "大连"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [1, 1, 1, 1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [5.56, 5.56, 5.56, 5.56, 11.1, 5.56, 16.6, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 15,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 35,
        //柱子的宽度
        barWidth: 12,
        // 显示柱子内的文字
        label: {
          show: true,
          position: [1, -10],
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%",
          fontSize: 10
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 35,
        barWidth: 12,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  // 3. 把配置给实例对象
  if (k == 1) {
    myChart.setOption(option1);
  } else if (k == 2) {
    myChart.setOption(option2);
  } else if (k == 3) {
    myChart.setOption(option3);
  } else if (k == 4) {
    myChart.setOption(option4);
  }

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}




// 折线图1模块制作
(function () {
  var yearData = [
    {
      data: [
        // 三条线
        [1430, 1380, 1385, 1397, 1440, 1441, 1438, 1435, 1482, 1460, 1440, 1375],
        [1490, 1495, 1600, 1636, 1687, 1698, 1710, 1712, 1637, 1667, 1585, 1625],
        [1185, 766, 238, 161, 4, 6, 9, 4, 2, 3, 16, 18]
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    //动态线
    animationDuration: 3000,
    // 通过这个color修改三条线的颜色
    color: ["#00f2f1", "#ed3f35", "#F9E300"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "20%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "03.01",
        "03.09",
        "03.17",
        "03.25",
        "04.02",
        "04.10",
        "04.18",
        "04.26",
        "05.04",
        "05.12",
        "05.20",
        "05.28"
      ],

      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "2019",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "2021",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      },
      {
        name: "2022",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[2]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 折线图2 模块制作
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  option = {
    animationDuration: 3000,
    color: ["#56D0E3", "#F57474"],
    grid: {
      top: "20%",
      left: "8%",
      right: "8%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "rgb(255,255,255,.4)", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765'
        }
      }
    },
    legend: {
      textStyle: {
        color: "rgb(255,255,255,.6)"
      },
      left: 120
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: { onZero: false },
        // prettier-ignore
        data: [
          "03.01",
          "03.05",
          "03.09",
          "03.13",
          "03.17",
          "03.21",
          "03.25",
          "03.29",
          "04.02",
          "04.06",
          "04.10",
          "04.14",
          "04.18",
          "04.22",
          "04.26",
          "04.30",
          "05.04",
          "05.08",
          "05.12",
          "05.16",
          "05.20",
          "05.24",
          "05.28"
        ],
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "rgb(255,255,255,.6)" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      }

    ],
    yAxis: [
      {
        name: '执行航班',
        nameTextStyle: {
          color: "rgb(255,255,255,.6)",
        },
        type: 'value',
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "rgb(255,255,255,.6)" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "rgb(255,255,255,.1)" // 分割线颜色
          }
        }
      },
      {
        name: '取消航班',
        nameTextStyle: {
          color: "rgb(255,255,255,.6)",
        },
        nameLocation: 'start',
        alignTicks: true,
        type: 'value',
        inverse: true,
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "rgb(255,255,255,.6)" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "rgb(255,255,255,.1)" // 分割线颜色
          }
        }
      }
    ],
    series: [
      {
        name: '执行',
        type: 'line',
        areaStyle: {
          normal: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0.1,
                  color: 'rgb(86,208,227,1)', // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: 'rgb(86,208,227,.6)', // 0% 处的颜色
                },
                {
                  offset: 0.7,
                  color: 'rgb(86,208,227,.3)', // 0% 处的颜色

                },
                {
                  offset: 0.9,
                  color: 'rgb(86,208,227,.1)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        lineStyle: {
          width: 1,
          color: "#56D0E3"
        },
        emphasis: {
          focus: 'series'
        },
        // prettier-ignore
        data: [
          1185, 999, 766, 538, 238, 164, 161, 89, 4, 10, 6, 17, 9, 6, 4, 4, 2, 4, 3, 11, 16, 17, 18
        ],

      },
      {
        name: '取消',
        type: 'line',
        yAxisIndex: 1,
        areaStyle: {
          normal: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0.1,
                  color: 'rgb(245,116,116,.1)', // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: 'rgb(245,116,116,.3)', // 0% 处的颜色
                },
                {
                  offset: 0.7,
                  color: 'rgb(245,116,116,.6)', // 0% 处的颜色

                },
                {
                  offset: 0.9,
                  color: '#F57474' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        lineStyle: {
          width: 1,
          color: "#F57474"
        },
        emphasis: {
          focus: 'series'
        },
        data: [
          574, 762, 766, 1110, 1332, 1262, 1211, 1148, 1347, 1159, 923, 807, 891, 850, 901, 961, 957, 717, 804, 1096, 844, 824, 1190
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 饼形图2 地区分布模块
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: [
      "#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#F5AF60", "#F9E300", "#EDA9BD", "#C4E3C7", "#D4DF45", "#F15D22", "#7171B5", "#ECCB7D", "#8DC6EC", "#776BB1", "#F0867F", "#80B3E0", "#F48EA8", "#FEF5D1"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      type: "scroll",
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["20%", "60%"],
        center: ["50%", "45%"],
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 8,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
          { value: 2, name: "三亚" },
          { value: 3, name: "呼和浩特" },
          { value: 4, name: "运城" },
          { value: 4, name: "贵阳" },
          { value: 9, name: "重庆" },
          { value: 1, name: "海口" },
          { value: 2, name: "哈尔滨" },
          { value: 4, name: "昆明" },
          { value: 4, name: "北京" },
          { value: 4, name: "大连" },
          { value: 4, name: "东胜" },
          { value: 2, name: "福州" },
          { value: 1, name: "青岛" },
          { value: 1, name: "宜昌" },
          { value: 1, name: "南昌" },
          { value: 2, name: "沈阳" },
          { value: 1, name: "桂林" },
          { value: 1, name: "包头" },
          { value: 1, name: "烟台" }
        ]
      }
    ]
  };

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();



// 模拟飞行路线模块地图模块
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],

    运城: [111.007528, 35.026412],
    东胜: [109.96289, 39.82236],
    敦煌: [94.66159, 40.14211],
    大理: [100.22998, 25.59157],
    大庆: [125.103784, 46.589309],
    恩施: [109.488172, 30.272156],
    赣州: [114.935029, 25.831829],
    和田: [79.922211, 37.114157],
    衡阳: [112.57, 26.90],
    嘉峪关: [98.277304, 39.786529],
    潮汕: [116.41, 23.22],
    景洪嘎洒: [100.761680, 21.953110],
    喀什: [75.98, 39.47],
    丽江: [100.47, 26.83],
    泸州: [105.443348, 28.889138],
    洛阳: [112.45, 34.62],
    三亚: [109.508268, 18.247872],
    晋江: [118.35, 24.49],
    乌海: [106.794249, 39.655388],
    襄樊: [112.135684, 32.044833],
    伊宁: [81.277950, 43.908558],
    榆林: [109.734589, 38.285390],
    宜昌: [111.286471, 30.691967],
    桂林: [110.299121, 25.274215]
  };

  var shangHai526 = [
    [{ name: "上海" }, { name: "呼和浩特", value: 1 }],
    [{ name: "上海" }, { name: "包头", value: 3 }],
    [{ name: "上海" }, { name: "东胜", value: 1 }],
    [{ name: "上海" }, { name: "北京", value: 1 }],
    [{ name: "上海" }, { name: "大连", value: 1 }],
    [{ name: "上海" }, { name: "运城", value: 1 }],
  ]
  var shangHai525 = [
    [{ name: "上海" }, { name: "运城", value: 1 }],
    [{ name: "上海" }, { name: "贵阳", value: 2 }],
    [{ name: "上海" }, { name: "重庆", value: 9 }],
    [{ name: "上海" }, { name: "海口", value: 1 }],
    [{ name: "上海" }, { name: "哈尔滨", value: 1 }],
    [{ name: "上海" }, { name: "昆明", value: 1 }],
    [{ name: "上海" }, { name: "北京", value: 1 }],
    // [{ name: "上海" }, { name: "沈阳", value: 100 }],
    [{ name: "上海" }, { name: "福州", value: 1 }],
    [{ name: "上海" }, { name: "大连", value: 1 }],
    [{ name: "上海" }, { name: "东胜", value: 1 }],
  ]
  var shangHai527 = [
    [{ name: "上海" }, { name: "运城", value: 1 }],
    [{ name: "上海" }, { name: "贵阳", value: 1 }],
    [{ name: "上海" }, { name: "东胜", value: 2 }],
    [{ name: "上海" }, { name: "青岛", value: 1 }],
    [{ name: "上海" }, { name: "三亚", value: 1 }],
    [{ name: "上海" }, { name: "呼和浩特", value: 1 }],
    [{ name: "上海" }, { name: "北京", value: 1 }],
    [{ name: "上海" }, { name: "东胜", value: 1 }],
    [{ name: "上海" }, { name: "大连", value: 1 }],
    [{ name: "上海" }, { name: "福州", value: 1 }],

  ]
  var shangHai528 = [
    [{ name: "上海" }, { name: "运城", value: 1 }],
    [{ name: "上海" }, { name: "贵阳", value: 1 }],
    [{ name: "上海" }, { name: "重庆", value: 1 }],
    [{ name: "上海" }, { name: "海口", value: 1 }],
    [{ name: "上海" }, { name: "哈尔滨", value: 1 }],
    [{ name: "上海" }, { name: "昆明", value: 3 }],
    [{ name: "上海" }, { name: "北京", value: 1 }],
    [{ name: "上海" }, { name: "南昌", value: 1 }],
    [{ name: "上海" }, { name: "福州", value: 1 }],
    [{ name: "上海" }, { name: "大连", value: 1 }],
    [{ name: "上海" }, { name: "宜昌", value: 1 }],
    [{ name: "上海" }, { name: "沈阳", value: 2 }],
    [{ name: "上海" }, { name: "呼和浩特", value: 1 }],
    [{ name: "上海" }, { name: "桂林", value: 1 }],
    [{ name: "上海" }, { name: "三亚", value: 1 }],
    [{ name: "上海" }, { name: "包头", value: 1 }],
    [{ name: "上海" }, { name: "烟台", value: 1 }],
    [{ name: "上海" }, { name: "东胜", value: 1 }],
  ]

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    // console.log(res)
    return res;
  };

  var color = ["#F8B448", "#D4DF45", "#46bee9", "#EDA9BD"]; //航线的颜色
  var myOption = [];
  [
    ["上海", shangHai525],
    ["上海", shangHai526],
    ["上海", shangHai527],
    ["上海", shangHai528]
  ].forEach(function (item, i) {
    myOption.push({
      series: [
        // 红色箭头
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "red", //arrow箭头的颜色
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        // 飞机
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 2,
          symbol: ["none", "arrow"],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}"
            }
          },
          symbolSize: function (val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        }
      ]
    })
  })

  var year = ['5.25', '5.26', '5.27', '5.28']
  var option = {
    //基础数据，包括地图以及时间轴
    baseOption: {
      //时间轴
      timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 3500,
        replaceMerge: 'series',
        data: year,
        label: {
          normal: {
            textStyle: {
              color: '#ddd',
            },
          },
          emphasis: {
            textStyle: {
              color: '#fff',
            },
          },
        },
        symbolSize: 10,
        lineStyle: {
          color: '#555',
        },
        checkpointStyle: {
          color: '#555',
          borderColor: '#777',
          borderWidth: 2,
        },
        controlStyle: {
          showNextBtn: true,
          showPrevBtn: true,
          normal: {
            color: '#666',
            borderColor: '#666',
          },
          emphasis: {
            color: '#aaa',
            borderColor: '#aaa',
          },
        },
      },
      //提示窗
      tooltip: {
        trigger: "item",
        formatter: function (params, ticket, callback) {
          if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType == "lines") {
            return (
              params.data.fromName +
              ">" +
              params.data.toName +
              "<br />" +
              params.data.value
            );
          } else {
            return params.name;
          }
        }
      },
      //中国地图
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        // 把中国地图放大了1.2倍
        zoom: 1.2,
        roam: true,
        itemStyle: {
          normal: {
            // 地图省份的背景颜色
            areaColor: "rgba(20, 41, 87,0.6)",
            borderColor: "#195BB9",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
      series: [],
    },
    // 我的数据
    options: myOption
  };
  option && myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


function bus() {
  $(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".bar3 .chart"));
    //2. 指定配置项和数据
    var option = {
      color: "#ECCB7D",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle: {
          color: '#fff' // 文字颜色
        },
      },
      dataset: {
        source: [
          ['航站楼', '公交数量'],
          ['浦东1号', 9],
          ['浦东2号', 9],
          ['虹桥1号', 2],
          ['虹桥2号', 9]
        ]
      },
      grid: {
        left: "0%",
        top: "30px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(236,203,125,.6) ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          lineStyle: {
            color: "rgba(236,203,125,.1)",
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(236,203,125,.1)"
          }
        }
      },
      yAxis: {

        formatter: "{c}辆",
        name: "辆/站",
        nameTextStyle: {
          color: "rgba(236,203,125,.6) ",
          fontSize: 12,
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          textStyle: {
            color: "rgba(236,203,125,.6) ",
            fontSize: 12
          }

        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(236,203,125,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(236,203,125,.1)"
          }
        }

      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{
        barWidth: "35%",
        type: 'bar', itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 3
        }
      }]
    };
    // 3. 把配置项给实例对象
    // myChart.setOption(option);
    // // 4. 让图表跟随屏幕自动的去适应
    // window.addEventListener("resize", function () {
    //   myChart.resize();
    // });
  });

  //树图
  $(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".tree1 .chart"));
    //2. 指定配置项和数据
    var option;
    $.get('js/flare.json', function (data) {
      myChart.hideLoading();
      myChart.setOption(
        (option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: [data],
              top: '1%',
              left: '15%',
              bottom: '1%',
              right: '20%',
              initialTreeDepth:3,
              symbolSize: 7,
              symbol: 'circle',
              label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 12,
                color: "#ECCB7D"
              },
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: "#33A4D8",
                    type: 'solid' // 连线的样式 'curve'|'broken'|'solid'|'dotted'|'dashed' 
                  },
                }
              },
              leaves: {
                label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
                }
              },
              emphasis: {
                focus: 'descendant'
              },
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        })
      );
    });
    // 3. 把配置项给实例对象
    option && myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
}