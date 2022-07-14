# Sustainable Savings 
This application is used to calculate the monthly and annual cash savings for driving an EV or PHEV vs a 2019 Audi Q7.

![Screen Shot 2022-07-14 at 12 09 36 AM](https://user-images.githubusercontent.com/22300258/178923059-43814265-69fa-4e63-a68e-1e4658940f66.png)

## PHEV Disclaimer
- **Disclaimer**: The calculations for PHEV are for electric-only usage. The reason for this in this MVP, is because we only have monthly driving data. This data does not reveal what percentage of the time a user used gas vs electric. We would need more granular data in order to accurately calculate savings for PHEVs. 
- That being said, if we had more granular driving data, which indicated how much gas vs electricty was used in trips, we could calculate those savings with the following formula.
  - `costPHEV=(milesDrivenElec/mpkWh)*costKwH + (milesDriven/mpg)*costGas`

## How to run
Since we are using json-server for our endpoints this application must be run locally. You can run it locally by performing the following actions.

`git clone https://github.com/MisterSyntax/asyriala-tenet.git`
`cd asyriala-tenet`
`yarn`
`yarn start-api`
`yarn start` 

This runs the React application and the api. You can visit the applicaton at (http://localhost:3000/)[http://localhost:3000/]

##  Additional commands
###`yarn test` 
This runs the test suite. There are unit tests on the redux portion of the app, and an integration test for loading data, and interacting with selection of vehicles.

## Developement Process
1. Sketch out some wireframes
2. Identify components and what data each of those components need see [Outline.md](./OUTLINE.md) as well as types
3. Create the caculations for savings see [Outline.md](./OUTLINE.md)
4. Create the folders and files for the components and the store. Then fill all of those with their templates (using snippets)
5. Parse the data files, and create the mock apis
6. Create the redux store, slices, selectors, and their tests
7. Fill in the components
8. Polish and tweak 

## Sketches
![image](https://user-images.githubusercontent.com/22300258/178923829-063fb1af-846a-40a7-9a03-ab9f2932ed68.png)

## Challenges 
The biggest challenges in developing this application was determining the best path for managing PHEVs with only monthly data. With the current data there is no way to determine when a user re-charged. Given more granular driving, I'd love to extend this MVP to more precisely caclulate PHEV savings.

## Tech used
Create React App
MUI
Redux & Redux Toolkit
[Recharts](https://github.com/recharts/recharts) for visualizations
json-server
Jest
jest and react-testing-library
