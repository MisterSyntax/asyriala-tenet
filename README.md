# Sustainable Savings
This application is used to calculate the monthly and annual cash savings for driving an EV vs a 2019 Audi Q7.

![Screen Shot 2022-07-14 at 12 09 36 AM](https://user-images.githubusercontent.com/22300258/178923059-43814265-69fa-4e63-a68e-1e4658940f66.png)

## PHEV Disclaimer
- **Disclaimer**: The calculations in this assume a PHEV was always on EV power. The reason we do this is because we don't have enough information about how far a user drove at a time, only monthly driving data. As a result it is possible a user never drove less than the EVs range before recharging. We would need more granular data in order to properly calculate savings for PHEVs. So, since this is just a prototype I took the easy route.
- **How to iterate**: If had more granular data on PHEVs driving we could use the following formula to calculate savings
  - `costPHEV=(milesDrivenElec/mpkWh)*costKwH + (milesDriven/mpg)*costGas`

## How to run
Since we are using json-server for our endpoints this application must be run locally. To do so follow the following steps

## `yarn`
install your dependencies

### `yarn start-api`
Start thethe mock api

### `yarn start` 
This runs the React application. You can visit the applicaton at (http://localhost:3000/)[http://localhost:3000/]

##  Additional commands
###`yarn test` 
This runs the tests

## Developement Process
1. Sketch out some wireframes ![IMG_20220714_001038642](https://user-images.githubusercontent.com/22300258/178923568-017f2ac0-36fa-4e2c-a9ec-c427642ccfb8.jpg)

2. Identify components and what data each of those components need see [Outline.md](./OUTLINE.md) as well as types
3. Create the caculations for savings see [Outline.md](./OUTLINE.md)
4. Create the folders and files for the components and the store. Then fill all of those with their templates (using snippets)
5. Parse the data files, and create the mock apis
6. Create the redux store, slices, selectors, and their tests
7. Fill in the components
8. Polish and tweak

## Challenges 
The biggest challenges in developing this application was determinomg the best path for managing PHEVs with only monthly data. Given more ability to request more granular driving, I'd love to extend this MVP to more precisely caclulate PHEV driving data

Also, due to time constraints I did not have bandwidth to build React Components tests. I've migrated to using RTL, 

## Tech used
Create React App
MUI
Redux & Redux Toolkit
[Recharts](https://github.com/recharts/recharts) for visualizations
json-server
Jest
jest and react-testing-library
