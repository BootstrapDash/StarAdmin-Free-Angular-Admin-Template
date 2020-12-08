import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widgets",
  templateUrl: "./widgets.component.html",
  styleUrls: ["./widgets.component.scss"]
})
export class WidgetsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  gaugeType = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Daily average";
  gaugeForegroundColor = "#62d896";
  gaugeSize = "180";
  gaugeThickness = "20";

  statisticsGraphlabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7"
  ];
  statisticsGraphOptions = {
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    stepsize: 100
  };
  statistics_graph_1_Colors = [
    {
      borderColor: "#8862e0",
      backgroundColor: "rgba(243,240,252,1)"
    }
  ];
  statistics_graph_1_Data = [
    {
      label: "Profit",
      data: [3, 9, 7, 5, 7, 2, 8],
      borderWidth: 2
    }
  ];

  statistics_graph_2_Colors = [
    {
      borderColor: "#f8c452",
      backgroundColor: "rgba(254,247,232,1)"
    }
  ];
  statistics_graph_2_Data = [
    {
      label: "Profit",
      data: [7, 9, 2, 2, 8, 7, 9],
      borderWidth: 2
    }
  ];

  statistics_graph_3_Colors = [
    {
      borderColor: "#46a5f4",
      backgroundColor: "rgba(235,245,253,1)"
    }
  ];
  statistics_graph_3_Data = [
    {
      label: "Profit",
      data: [5, 4, 7, 2, 9, 2, 8],
      borderWidth: 2
    }
  ];

  statistics_graph_4_Colors = [
    {
      borderColor: "#ef6d63",
      backgroundColor: "rgba(253,240,239,1)"
    }
  ];
  statistics_graph_4_Data = [
    {
      label: "Profit",
      data: [5, 2, 5, 2, 4, 4, 1],
      borderWidth: 2
    }
  ];

  dashboardBarChartlabels = [
    "1",
    "3",
    "6",
    "9",
    "12",
    "15",
    "18",
    "21",
    "24",
    "27"
  ];
  dashboardBarChartData = [
    {
      label: "SNOOZED",
      data: [330, 380, 230, 400, 309, 430, 340, 310, 280, 300]
    },
    {
      label: "COMPLETED",
      data: [375, 440, 284, 450, 386, 480, 400, 365, 365, 435]
    },
    {
      label: "OVERDUE",
      data: [425, 480, 324, 490, 426, 520, 440, 405, 425, 475]
    }
  ];
  dashboardBarChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#bdbcbe"
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false
          },
          barPercentage: 0.2
        }
      ]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  dashboardBarChartColors = [
    {
      backgroundColor: "#8862e0"
    },
    {
      backgroundColor: "#49bbce"
    },
    {
      backgroundColor: "#e7487e"
    }
  ];

  productAreaChartlabels = [
    "2013",
    "2014",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018"
  ];
  productAreaChartData = [
    {
      label: "Support",
      data: [150, 200, 150, 220, 350, 275, 365]
    },
    {
      label: "Product",
      data: [300, 400, 300, 440, 700, 550, 730]
    }
  ];
  productAreaChartOptions = {
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    },
    elements: {
      point: {
        radius: 3
      },
      line: {
        tension: 0
      }
    },
    stepsize: 1
  };
  productAreaChartColors = [
    {
      backgroundColor: "rgba(52,110,240,0.7)",
      borderColor: "rgba(52,110,240,0.8)"
    },
    {
      backgroundColor: "rgba(0,187,248,0.7)",
      borderColor: "rgba(0,187,248,0.8)"
    }
  ];

  totalBalanceChartlabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7"
  ];
  totalBalanceChartData_1 = [
    {
      label: "Balance",
      data: [10, 2, 7, 3, 10, 0, 9, 0],
      borderWidth: 2,
      fill: false
    }
  ];
  totalBalanceChartData_2 = [
    {
      label: "Credit",
      data: [4, 1, 7, 4, 1, 8, 2, 8],
      borderWidth: 2,
      fill: false
    }
  ];
  totalBalanceChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    },
    elements: {
      point: {
        radius: 0
      }
    },
    tooltips: {
      enabled: false
    },
    stepsize: 100
  };
  totalBalanceChartColors = [
    {
      borderColor: "#3096f3"
    }
  ];

  UsersDoughnutChartlabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7"
  ];
  UsersDoughnutChartData = [
    {
      data: [80, 34, 100],
      backgroundColor: ["#62d896", "#8862e0", "#e6eef2"]
    }
  ];
  UsersDoughnutChartOptions = {
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
  UsersDoughnutChartColors = [
    {
      backgroundColor: ["#62d896", "#8862e0", "#e6eef2"],
      borderColor: ["#62d896", "#8862e0", "#e6eef2"]
    }
  ];

  conversionBarChartlabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10"
  ];
  conversionBarChartData = [
    {
      label: "Amount Due",
      data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24]
    }
  ];
  conversionBarChartOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },

    scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0.03)"
          }
        }
      ],
      xAxes: [
        {
          display: false,
          barPercentage: 0.4,
          gridLines: {
            display: false
          }
        }
      ]
    }
  };
  conversionBarChartColors = [
    {
      backgroundColor: "#3096f3"
    }
  ];

  topSellingProductslabels = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ];
  topSellingProductsData = [
    {
      label: "Total Profit",
      data: [150, 200, 150, 220, 350, 275, 365],
      borderWidth: 2
    },
    {
      label: "Total Sales",
      data: [300, 400, 300, 440, 700, 550, 730],
      borderWidth: 2
    }
  ];
  topSellingProductsOptions = {
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 3
      },
      line: {
        tension: 0
      }
    },
    stepsize: 100
  };
  topSellingProductsColors = [
    {
      borderColor: "#2196f3",
      backgroundColor: "#E9F7FB"
    },
    {
      borderColor: "#19d895",
      backgroundColor: "#E9F7FB"
    }
  ];

  trafficDoughnutChartlabels = ["Chrome", "Firefox"];
  trafficDoughnutChartData = [
    {
      data: [70, 20]
    }
  ];
  trafficDoughnutChartOptions = {
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
  trafficDoughnutChartColors = [
    {
      backgroundColor: ["#2196f3", "#62d896"],
      borderColor: ["#2196f3", "#62d896"]
    }
  ];

  sourceGraphLabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7"
  ];
  sourceGraphOptions = {
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    },
    elements: {
      point: {
        radius: 1
      },
      line: {
        tension: 0
      }
    },
    stepsize: 100
  };
  sourceGraphData_1 = [
    {
      label: "Profit",
      data: [1, 3, 7, 4, 1, 9, 6],
      fill: false,
      borderWidth: 2
    }
  ];
  sourceGraphColors_1 = [
    {
      borderColor: "#f6af42"
    }
  ];
  sourceGraphData_2 = [
    {
      label: "Profit",
      data: [1, 4, 8, 3, 4, 6, 1],
      fill: false,
      borderWidth: 2
    }
  ];
  sourceGraphColors_2 = [
    {
      borderColor: "#62d896"
    }
  ];
  sourceGraphData_3 = [
    {
      label: "Profit",
      data: [8, 12, 5, 4, 1, 12, 4],
      fill: false,
      borderWidth: 2
    }
  ];
  sourceGraphColors_3 = [
    {
      borderColor: "#ee5f56"
    }
  ];
  sourceGraphData_4 = [
    {
      label: "Profit",
      data: [6, 9, 3, 4, 2, 5, 6],
      fill: false,
      borderWidth: 2
    }
  ];
  sourceGraphColors_4 = [
    {
      borderColor: "#f6af42"
    }
  ];

  statisticsChartLabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10"
  ];
  statisticsChartOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },

    scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [
        {
          stacked: true,
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0.03)"
          }
        }
      ],
      xAxes: [
        {
          stacked: true,
          display: false,
          barPercentage: 0.3,
          gridLines: {
            display: false
          }
        }
      ]
    }
  };
  statisticsChartData = [
    {
      label: "Revenue",
      data: [39, 19, 25, 16, 31, 39, 23, 20, 23, 18]
    },
    {
      label: "Sales",
      data: [27, 12, 26, 15, 21, 27, 13, 19, 32, 22]
    }
  ];
  statisticsChartColors = [
    {
      backgroundColor: "#62d896"
    },
    {
      backgroundColor: "#3096f3"
    }
  ];

  realtimeStatisticsLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  realtimeStatisticsOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#354168"
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false
          },
          barPercentage: 0.4
        }
      ]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  realtimeStatisticsData = [
    {
      label: "Profit",
      data: [330, 380, 230, 400, 309, 530, 340, 400, 490, 380, 300, 510]
    },
    {
      label: "Target",
      data: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600]
    }
  ];
  realtimeStatisticsColors = [
    {
      backgroundColor: "#3096f3"
    },
    {
      backgroundColor: "rgba(238, 242, 245, 1)"
    }
  ];

  humanResouceDoughnutChartLabels = ["Human Resources", "Manger", "Other"];
  humanResouceDoughnutChartData = [
    {
      data: [20, 80, 85, 45]
    }
  ];
  humanResouceDoughnutChartOptions = {
    cutoutPercentage: 75,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
  humanResouceDoughnutChartColors = [
    {
      backgroundColor: ["#62d896", "#3096f3", "#ee5f56", "#e6eef2"],
      borderColor: ["#62d896", "#3096f3", "#ee5f56", "#e6eef2"]
    }
  ];

  salesPrdictionDoughnutChartLabels = ["Human Resources", "Manger", "Other"];
  salesPrdictionDoughnutChartData = [
    {
      data: [185, 85, 65]
    }
  ];
  salesPrdictionDoughnutChartOptions = {
    cutoutPercentage: 75,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
  salesPrdictionDoughnutChartColors = [
    {
      backgroundColor: ["#3096f3", "#f6af42", "#62d896"],
      borderColor: ["#3096f3", "#f6af42", "#62d896"]
    }
  ];

  trafficSourceDoughnutChartLabels = ["Human Resources", "Manger", "Other"];
  trafficSourceDoughnutChartData = [
    {
      data: [185, 85, 15]
    }
  ];
  trafficSourceDoughnutChartOptions = {
    cutoutPercentage: 75,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
  trafficSourceDoughnutChartColors = [
    {
      backgroundColor: ["#e6eef2", "#62d896", "#ee5f56"],
      borderColor: ["#e6eef2", "#62d896", "#ee5f56"]
    }
  ];
}
