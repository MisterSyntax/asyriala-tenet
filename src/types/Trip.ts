interface MonthlyDrivingData {
  month: string,
  milesDriven: number,
}

export interface Trip {
  carId: string,
  monthlyDrivingData: MonthlyDrivingData[]
}