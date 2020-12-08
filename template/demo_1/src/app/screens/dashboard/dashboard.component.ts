import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["../../app.component.scss", "./dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  toggleProBanner(event) {
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }
  constructor() {}

  ngOnInit() {}

  dashboardBarChartlabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10",
    "Day 11",
    "Day 12",
    "Day 13"
  ];
  dashboardBarChartOptions = {
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
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    stepsize: 100
  };
  dashboardBarChartColors = [
    {
      borderColor: "#6d7bf7",
      backgroundColor: "#e6e8fd"
    }
  ];
  dashboardBarChartDataOne = [
    {
      label: "Profit",
      data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
      borderWidth: 3,
      fill: true
    }
  ];
  dashboardBarChartDataTwo = [
    {
      label: "Profit",
      data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
      borderWidth: 3,
      fill: true
    }
  ];
  dashboardBarChartDataThree = [
    {
      label: "Profit",
      data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
      borderWidth: 3,
      fill: true
    }
  ];
  dashboardBarChartDataFour = [
    {
      label: "Profit",
      data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
      borderWidth: 3,
      fill: true
    }
  ];

  SalesStatisticsOverviewLabels = [
    "Jan 1",
    "Jan 7",
    "Jan 14",
    "Jan 21",
    "Jan 28",
    "Feb 4",
    "Feb 11",
    "Feb 18"
  ];
  SalesStatisticsOverviewOptions = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    elements: {
      point: {
        radius: 3
      },
      line: {
        tension: 0
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      xAxes: [
        {
          display: false,
          ticks: {
            display: false,
            beginAtZero: false
          },
          gridLines: {
            drawBorder: false,
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            max: 200,
            min: 0,
            stepSize: 50,
            fontColor: "#878e94",
            beginAtZero: false
          },
          gridLines: {
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3",
            display: true,
            drawBorder: false
          }
        }
      ]
    }
  };
  SalesStatisticsOverviewColors = [
    {
      borderColor: "#a081e9",
      backgroundColor: "rgba(248,247,252,0.3)"
    },
    {
      borderColor: "#5ed2a1",
      backgroundColor: "rgba(94,210,160,0.1)"
    }
  ];
  SalesStatisticsOverviewData = [
    {
      label: "Revenue",
      data: [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170],
      borderWidth: 2
    },
    {
      label: "Sales",
      data: [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135],
      borderWidth: 2
    }
  ];

  netProfitLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  netProfitOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20,
        display: false
      },
      pointLabels: {
        fontSize: 14,
        fontColor: "#b9c0d3",
        color: "#b9c0d3"
      },
      angleLines: {
        color: "#b9c0d3",
        zeroLineColor: "#b9c0d3"
      },
      gridLines: {
        color: "#b9c0d3",
        zeroLineColor: "#b9c0d3"
      }
    },
    legend: false
  };
  netProfitColors = [
    {
      backgroundColor: "rgba(88, 208, 222,0.8)",
      pointBackgroundColor: "rgba(88, 208, 222,0.8)"
    },
    {
      backgroundColor: "rgba(150, 77, 247,1)",
      pointBackgroundColor: "rgba(150, 77, 247,1)"
    }
  ];
  netProfitData = [
    {
      label: "Sales",
      borderWidth: 0,
      fill: true,
      radius: 0,
      pointRadius: 0,
      pointBorderWidth: 0,
      pointHoverRadius: 10,
      pointHitRadius: 5,
      data: [54, 45, 60, 70, 54, 75, 60, 54]
    },
    {
      label: "Orders",
      borderWidth: 0,
      fill: true,
      radius: 0,
      pointRadius: 0,
      pointBorderWidth: 0,
      pointHoverRadius: 10,
      pointHitRadius: 5,
      data: [65, 75, 70, 80, 60, 80, 36, 60]
    }
  ];

  TotalRevenueChartLabels = [
    "Day01",
    "Day02",
    "Day03",
    "Day04",
    "Day05",
    "Day06",
    "Day07",
    "Day08",
    "Day09",
    "Day10",
    "Day11",
    "Day12",
    "Day13",
    "Day14",
    "Day15",
    "Day16",
    "Day17",
    "Day18",
    "Day19",
    "Day20",
    "Day21",
    "Day22",
    "Day23",
    "Day24",
    "Day25",
    "Day26",
    "Day27",
    "Day28",
    "Day29",
    "Day30",
    "Day31",
    "Day32",
    "Day33",
    "Day34",
    "Day35",
    "Day36",
    "Day37",
    "Day38",
    "Day39",
    "Day40",
    "Day41",
    "Day42",
    "Day43",
    "Day44",
    "Day45",
    "Day46",
    "Day47",
    "Day48",
    "Day49",
    "Day50",
    "Day51",
    "Day52",
    "Day53",
    "Day54",
    "Day55",
    "Day56",
    "Day57",
    "Day58",
    "Day59",
    "Day60",
    "Day61",
    "Day62",
    "Day63",
    "Day64",
    "Day65",
    "Day66",
    "Day67",
    "Day68",
    "Day69",
    "Day70",
    "Day71",
    "Day72",
    "Day73",
    "Day74",
    "Day75",
    "Day76",
    "Day77",
    "Day78",
    "Day79",
    "Day80",
    "Day81",
    "Day82"
  ];
  TotalRevenueChartOptions = {
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
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    stepsize: 100
  };
  TotalRevenueChartColors = [
    {
      borderColor: "#9B86F1",
      backgroundColor: "rgba(255,255,255,0.2)"
    }
  ];
  TotalRevenueChartData = [
    {
      label: "Total Revenue",
      data: [
        56,
        55,
        59,
        59,
        59,
        57,
        56,
        57,
        54,
        56,
        58,
        57,
        59,
        58,
        59,
        57,
        55,
        56,
        54,
        52,
        49,
        48,
        50,
        50,
        46,
        45,
        49,
        50,
        52,
        53,
        52,
        55,
        54,
        53,
        56,
        55,
        56,
        55,
        54,
        55,
        57,
        58,
        56,
        55,
        56,
        57,
        58,
        59,
        58,
        57,
        55,
        53,
        52,
        55,
        57,
        55,
        54,
        52,
        55,
        57,
        56,
        57,
        58,
        59,
        58,
        59,
        57,
        56,
        55,
        57,
        58,
        59,
        60,
        62,
        60,
        59,
        58,
        57,
        56,
        57,
        56,
        58,
        59
      ],
      borderWidth: 3,
      fill: "origin"
    }
  ];

  TotalTransactionsChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  TotalTransactionsChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    elements: {
      point: {
        radius: 0
      }
    },
    layout: {
      padding: {
        left: -10,
        right: 0,
        top: 0,
        bottom: -10
      }
    },
    legend: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
          },
          ticks: {
            display: false,
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
          },
          ticks: {
            display: false,
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
          }
        }
      ]
    }
  };
  TotalTransactionsChartColors = [
    {
      backgroundColor: "red",
      borderColor: "#fa394e",
      pointBackgroundColor: "#fa394e",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fa394e",
      pointHoverBorderColor: "#fa394e"
    }
  ];
  TotalTransactionsChartData = [
    {
      label: "Sessions",
      data: [320, 280, 300, 280, 300, 270, 350],
      borderWidth: 0,
      pointRadius: 7,
      pointBorderWidth: 3,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 2,
      pointHitRadius: 7
    }
  ];

  MarketOverViewChartLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug"
  ];
  MarketOverViewChartOptions = {
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
          ticks: {
            max: 400,
            display: true,
            beginAtZero: true,
            fontColor: "#b9c0d3",
            stepSize: 100
          },
          gridLines: {
            display: false,
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
          }
        }
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#b9c0d3",
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
          },
          gridLines: {
            display: true,
            color: "#b9c0d3",
            zeroLineColor: "#b9c0d3"
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
  MarketOverViewChartColors = [
    {
      backgroundColor: "#826af9",
      borderColor: "#826af9"
    },
    {
      backgroundColor: "#9e86ff",
      borderColor: "#9e86ff"
    },
    {
      backgroundColor: "#d0aeff",
      borderColor: "#d0aeff"
    },
    {
      backgroundColor: "#f7d2ff",
      borderColor: "#f7d2ff"
    }
  ];
  MarketOverViewChartData = [
    {
      label: "OVERDUE",
      data: [145, 238, 148, 293, 242, 235, 256, 334],
      backgroundColor: "#826af9",
      borderColor: "#826af9",
      borderWidth: 0
    },
    {
      label: "SNOOZED",
      data: [330, 380, 230, 400, 309, 430, 340, 310],
      backgroundColor: "#9e86ff",
      borderColor: "#9e86ff",
      borderWidth: 0
    },
    {
      label: "COMPLETED",
      data: [375, 440, 284, 450, 386, 480, 400, 365],
      backgroundColor: "#d0aeff",
      borderColor: "#d0aeff",
      borderWidth: 0
    },
    {
      label: "OVERDUE",
      data: [425, 480, 324, 490, 426, 520, 440, 405],
      backgroundColor: "#f7d2ff",
      borderColor: "#f7d2ff",
      borderWidth: 0
    }
  ];

  RealtimeStatisticsChartLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul"
  ];
  RealtimeStatisticsChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 25,
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
            display: false,
            beginAtZero: true,
            fontColor: "#b9c0d3"
          },
          gridLines: {
            display: false,
            color: "#b9c0d3",
            zeroLineColor: "0,0,0,0"
          },
          barPercentage: 0.5
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
  RealtimeStatisticsChartColors = [
    {
      backgroundColor: "#0f5bff",
      borderColor: "#0f5bff"
    },
    {
      backgroundColor: "#e5e9f2",
      borderColor: "#e5e9f2"
    }
  ];
  RealtimeStatisticsChartData = [
    {
      label: "Profit",
      data: [330, 380, 230, 400, 309, 530, 340],
      borderWidth: 0
    },
    {
      label: "Target",
      data: [600, 600, 600, 600, 600, 600, 600],
      borderWidth: 0
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
}
