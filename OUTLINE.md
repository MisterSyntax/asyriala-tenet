## Components and data
src
  Components
    Layout
      AppBar
      Footer
    Features
      Vehicle Select
        - setActiveVehicle
        - activeVehicle
      SavingsGraph
        - savingsPerMonth 
      Total Savings
        - totalSavings
  appState
    trips
      - has trip data
    cars
      - has car data
    costs
      - has cost data
    features
      vehicleSelect
        - activeVehicle
  types
    Car
    Trip

## actions
### standard
- setActiveVehicle

### async
- fetchTrips
- fetchCars
- fetchCosts

## Selectors
### trips
- getMoneySavingsPerMonth: number[] - uses Active Vehicle trips and cars
- getTotalMoneySavings: number - uses Active Vehicle trips and cars
- getEmissionSavingsPerMonth: number[] - uses Active Vehicle trips and cars
### cars
- getCarById()

## Savings Formulas

### Money
costEv=(milesDriven/mpkWh)*costKwH
costGas=(milesDriven/mpg)*costGas

savings = costEv - costGas;

NOTE: PHEV not enough data to show when car used gas. All trips within each month could be under electric range. As a result, that assumption was made and this formula is not used

costPHEV=(milesDrivenElec/mpkWh)*costKwH + (milesDriven/mpg)*costGas

## Types
Car: {
  id: string,
  year: string,
  model: string,
  series: string,
  style: string,
  classification: string,
  mpge: number,
  mpg: number,
  totalRange: number,
  capacity: number
}
// This is really monthly driving data
MonthlyDrivingData: {
  month: string
  milesDriven: number
}

Trips: {
  carId: string,
  monthlyDrivingData: MonthlyDrivingData[]
}


## Mock APIs
cost - returns cost details

cars - returns all the cars

trips - returns monthy driving data for various cars owned by this user