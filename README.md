# Planet Database API

A database of all of the planets in our solar system.


## Full CRUD functionality.

- View planets and their data.
- Create new planet data.
- Update existing planet data.
- Delete data.


## Installation

Download the API with github by forking and cloning the repo.

```bash
    git clone (url)
    cd api-project
```
Install dependencies.

```bash
    npm i mongoose
    npm i express
    npm i node-fetch
    npm i cors
    npm i morgan
    npm i chalk
```
and lastly, in your **package.json** add to use updated import syntax.
```bash
    "type":"module",
```

## ROUTES

Open postman to test the API and its full CRUD functionality. Below you will find examples of the routes availble and how to access them.


View the planets and their data.
```bash
  GET localhost:3000/api/planets
```
View a single planet and its data.
```bash
  GET localhost:3000/api/planets/  planet id
```
Create a new planet.
```bash
STEP 1:
  POST localhost:3000/api/planets
```
```bash
STEP 2: Add the data of the new planet into the body.
ex.
  {
    "name": "Darugoron",
    "mass": "500 Earth masses",
    "diameter": "4629420 miles",
    "meanRadius": "1,000,000 miles",
    "density": "26 g/cm³",
    "gravity": "37 ft/s²",
    "escapeVelocity": "200 miles/s",
    "distanceFromSun": "141.6 million miles",
    "orbitalPeriod": "3 days",
    "dayLength": "3 days",
    "moons": 2000
  }
```
Update an existing planet's data.
```bash
STEP 1.
  PUT localhost:3000/api/  planet id 
```
```bash
STEP 2. Add the data you would like to update in the body.
ex.
{
    "name": "Zorgon"

}
```
Delete a planet.
```bash
  DELETE localhost:3000/api/  planet id 
```



## Tech Stack

**Database:** MongoDB

**Framework:** Mongoose

**Server:** Node, Express

