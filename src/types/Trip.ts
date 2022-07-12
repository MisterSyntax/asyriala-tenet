interface MonthlyDrivingData {
  month: string,
  milesDrive: number,
}

export interface Trip {
  carId: string,
  monthlyDrivingData: MonthlyDrivingData[]
}