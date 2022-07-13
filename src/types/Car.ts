export interface Car {
  id: string,
  year: string,
  make: string,
  model: string,
  series: string,
  style: string,
  classification: string,
  mpge: number,
  mpg: number,
  mpkWh: number,
  totalRange: number,
  capacity: number
}

export const mockCar: Car =  {
  id: '2020-Audi_Q5-Premium_Plus-4D_SUV_2.0T_PHEV',
  year: '2020',
  make: 'Audi',
  model: 'Q5',
  series: 'string',
  style: 'string',
  classification: 'PHEV',
  mpge: 60,
  mpkWh: 2,
  mpg: 20,
  totalRange: 10,
  capacity: 10
};

export const mockGasCar: Car =  {
  id: '2019-Audi-Q7--',
  year: '2019',
  make: 'Audi',
  model: 'Q7',
  series: '',
  style: '',
  classification: '',
  mpge: 0,
  mpkWh: 0,
  mpg: 21,
  totalRange: 472,
  capacity: 0
};