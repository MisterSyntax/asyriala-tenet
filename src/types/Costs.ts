export interface Costs {
  costGas: number,
  costKWh: number,
  lbsCo2PerKWh: number,
  lbsCO2PerGallonGas: number,
}

export interface MonthlyCost{
  month: string,
  cost: number
}

export interface MonthlySavings {
  month: string,
  savings: number,
}

export const mockCosts: Costs = {
  costGas: 3.6,
  costKWh: 0.14,
  lbsCo2PerKWh: 0.9,
  lbsCO2PerGallonGas: 19.59,
};