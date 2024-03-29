import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.get('/cars', (req, res, ctx) => {   
    return res(
      ctx.status(200),
      ctx.json({
        'cars': [
        {
          'year': 2019,
          'make': 'Audi',
          'model': 'Q7',
          'series': '',
          'style': '',
          'id': '2019-Audi-Q7--',
          'classification': '',
          'mpge': '',
          'mpkWh': '',
          'mpg': 21,
          'totalRange': 472,
          'capacity': ''
        },
        {
          'year': 2020,
          'make': 'Audi',
          'model': 'Q5',
          'series': 'Premium Plus',
          'style': '4D SUV 2.0T PHEV',
          'id': '2020-Audi-Q5-Premium_Plus-4D_SUV_2.0T_PHEV',
          'classification': 'PHEV',
          'mpge': 65,
          'mpkWh': 1.93,
          'mpg': 26.5403,
          'totalRange': 20,
          'capacity': 10.4
        },
        {
          'year': 2020,
          'make': 'Tesla',
          'model': 'Model Y',
          'series': 'Performance',
          'style': '4D SUV',
          'id': '2020-Tesla-Model_Y-Performance-4D_SUV',
          'classification': 'EV',
          'mpge': 111,
          'mpkWh': 3.29,
          'mpg': '-',
          'totalRange': 291,
          'capacity': 88.3
        },
        {
          'year': 2014,
          'make': 'Toyota',
          'model': 'RAV4',
          'series': 'EV',
          'style': '4D SUV FWD',
          'id': '2014-Toyota-RAV4-EV-4D_SUV_FWD',
          'classification': 'EV',
          'mpge': 76,
          'mpkWh': 2.26,
          'mpg': '-',
          'totalRange': 103,
          'capacity': 45.7
        },
        {
          'year': 2021,
          'make': 'Volvo',
          'model': 'XC60',
          'series': 'T8 - Polestar',
          'style': '4D SUV PHEV',
          'id': '2021-Volvo-XC60-T8_-_Polestar-4D_SUV_PHEV',
          'classification': 'PHEV',
          'mpge': 57,
          'mpkWh': 1.69,
          'mpg': 26.6484,
          'totalRange': 19,
          'capacity': 11.2
        }
      ]
    }),
    );
  }),
  rest.get('/costs', (req, res, ctx) => {   
    return res(
      ctx.status(200),
      ctx.json({
        'costGas': 3.6,
        'costKWh': 0.14,
        'lbsCo2PerKWh': 0.9,
        'lbsCO2PerGallonGas': 19.59
      }),
    );
  }),
  rest.get('/trips', (req, res, ctx) => {   
    return res(
      ctx.status(200),
      ctx.json({
         'trips': [
          {
            'carId': '2020-Audi-Q5-Premium_Plus-4D_SUV_2.0T_PHEV',
            'monthlyDrivingData': [
              {
                'month': 'Jan',
                'milesDriven': 417
              },
              {
                'month': 'Feb',
                'milesDriven': 871
              },
              {
                'month': 'Mar',
                'milesDriven': 949
              },
              {
                'month': 'Apr',
                'milesDriven': 231
              },
              {
                'month': 'May',
                'milesDriven': 507
              },
              {
                'month': 'Jun',
                'milesDriven': 632
              },
              {
                'month': 'Jul',
                'milesDriven': 830
              },
              {
                'month': 'Aug',
                'milesDriven': 534
              },
              {
                'month': 'Sep',
                'milesDriven': 973
              },
              {
                'month': 'Oct',
                'milesDriven': 891
              },
              {
                'month': 'Nov',
                'milesDriven': 220
              },
              {
                'month': 'Dec',
                'milesDriven': 775
              }
            ]
          },
          {
            'carId': '2020-Tesla-Model_Y-Performance-4D_SUV',
            'monthlyDrivingData': [
              {
                'month': 'Jan',
                'milesDriven': 975
              },
              {
                'month': 'Feb',
                'milesDriven': 207
              },
              {
                'month': 'Mar',
                'milesDriven': 475
              },
              {
                'month': 'Apr',
                'milesDriven': 700
              },
              {
                'month': 'May',
                'milesDriven': 550
              },
              {
                'month': 'Jun',
                'milesDriven': 586
              },
              {
                'month': 'Jul',
                'milesDriven': 128
              },
              {
                'month': 'Aug',
                'milesDriven': 223
              },
              {
                'month': 'Sep',
                'milesDriven': 203
              },
              {
                'month': 'Oct',
                'milesDriven': 897
              },
              {
                'month': 'Nov',
                'milesDriven': 481
              },
              {
                'month': 'Dec',
                'milesDriven': 283
              }
            ]
          },
          {
            'carId': '2021-Volvo-XC60-T8_-_Polestar-4D_SUV_PHEV',
            'monthlyDrivingData': [
              {
                'month': 'Jan',
                'milesDriven': 851
              },
              {
                'month': 'Feb',
                'milesDriven': 460
              },
              {
                'month': 'Mar',
                'milesDriven': 849
              },
              {
                'month': 'Apr',
                'milesDriven': 596
              },
              {
                'month': 'May',
                'milesDriven': 166
              },
              {
                'month': 'Jun',
                'milesDriven': 909
              },
              {
                'month': 'Jul',
                'milesDriven': 981
              },
              {
                'month': 'Aug',
                'milesDriven': 766
              },
              {
                'month': 'Sep',
                'milesDriven': 15
              },
              {
                'month': 'Oct',
                'milesDriven': 496
              },
              {
                'month': 'Nov',
                'milesDriven': 263
              },
              {
                'month': 'Dec',
                'milesDriven': 886
              }
            ]
          },
          {
            'carId': '2014-Toyota-RAV4-EV-4D_SUV_FWD',
            'monthlyDrivingData': [
              {
                'month': 'Jan',
                'milesDriven': 938
              },
              {
                'month': 'Feb',
                'milesDriven': 287
              },
              {
                'month': 'Mar',
                'milesDriven': 940
              },
              {
                'month': 'Apr',
                'milesDriven': 230
              },
              {
                'month': 'May',
                'milesDriven': 242
              },
              {
                'month': 'Jun',
                'milesDriven': 540
              },
              {
                'month': 'Jul',
                'milesDriven': 497
              },
              {
                'month': 'Aug',
                'milesDriven': 724
              },
              {
                'month': 'Sep',
                'milesDriven': 51
              },
              {
                'month': 'Oct',
                'milesDriven': 428
              },
              {
                'month': 'Nov',
                'milesDriven': 973
              },
              {
                'month': 'Dec',
                'milesDriven': 8
              }
            ]
          }
        ]
      }),
    );
  })
];

export const server = setupServer(...handlers);