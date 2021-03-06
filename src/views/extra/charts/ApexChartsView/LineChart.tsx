import { Card, CardContent, Typography, useTheme } from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
import Chart from 'react-apexcharts';

const LineChart: FC = () => {
  const theme = useTheme();

  const chart = {
    options: {
      chart: {
        background: theme.palette.background.paper,
        stacked: false,
        toolbar: {
          show: false
        },
        zoom: false
      },
      colors: ['#1f87e6', '#ff5c7c'],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: theme.palette.divider,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        labels: {
          colors: theme.palette.text.secondary
        }
      },
      markers: {
        size: 4,
        strokeColors: ['#1f87e6', '#27c6db'],
        strokeWidth: 0,
        shape: 'circle',
        radius: 2,
        hover: {
          size: undefined,
          sizeOffset: 2
        }
      },
      stroke: {
        width: 3,
        curve: 'smooth',
        lineCap: 'butt',
        dashArray: [0, 3]
      },
      theme: {
        mode: theme.palette.type
      },
      tooltip: {
        theme: theme.palette.type
      },
      xaxis: {
        axisBorder: {
          color: theme.palette.divider
        },
        axisTicks: {
          show: true,
          color: theme.palette.divider
        },
        categories: [
          `${moment(moment().subtract(11, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(10, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(9, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(8, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(7, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(6, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(5, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(4, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(3, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(2, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(1, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`,
          `${moment(moment().subtract(0, 'days').toDate().getTime()).format(
            'DD MMM'
          )}`
        ],
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: [
        {
          axisBorder: {
            show: true,
            color: theme.palette.divider
          },
          axisTicks: {
            show: true,
            color: theme.palette.divider
          },
          labels: {
            style: {
              colors: theme.palette.text.secondary
            }
          }
        },
        {
          axisTicks: {
            show: true,
            color: theme.palette.divider
          },
          axisBorder: {
            show: true,
            color: theme.palette.divider
          },
          labels: {
            style: {
              colors: theme.palette.text.secondary
            }
          },
          opposite: true
        }
      ]
    },
    series: [
      {
        name: 'Views',
        data: [
          3350,
          1840,
          2254,
          5780,
          9349,
          5241,
          2770,
          2051,
          3764,
          2385,
          5912,
          8323
        ]
      },
      {
        name: 'Comments',
        data: [560, 198, 254, 388, 1122, 634, 288, 230, 399, 279, 433, 989]
      }
    ]
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" color="textPrimary">
          Web Traffic
        </Typography>
        <Chart type="line" height="415" {...chart} />
      </CardContent>
    </Card>
  );
};

export default LineChart;
