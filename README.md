# Fake Aviation API (Flight History)

This project provides a small REST API built using **Express** and **TypeScript**, which simulates the **flight history** endpoint from the AviationStack API by generating fake flight data using the `faker` library. The purpose of this project is to allow testing API integrations without needing real data.

## Features

- Provides a `/flight-history` endpoint to get historical flight data.
- Generates fake data for flights, including departure, arrival times, delays, and more.
- Built using **TypeScript** for type safety and better project scalability.

## Project Structure

```
/src 
 | /controllers # Handles logic and data manipulation for each API flightController.ts 
 | /routes # Defines the routes for each resource flightRoutes.ts 
 | /models # Defines TypeScript interfaces and data models flight.ts 
 | /services # Business logic, generating fake data flightService.ts 
 | /config # Configuration files 
 | app.ts # Express app configuration 
 | index.ts # Main entry point to start the server
 ```

 ## Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AdriaGS/fake-avitation-api.git
    cd fake-aviation-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

1. To start the server, run:

    ```bash
    npm start
    ```

2. The API will be running at `http://localhost:3030`.

## API Endpoints

### GET v1/flight-history

Returns a list of historical flight data. Accpets the following query parameters:

* `flight_iata`: The flight IATA code

**Sample Request:**

```
GET http://localhost:3030/v1/flights?flight_iata=FR1114
```

**Sample Response:**

```json
{
  "pagination": {
    "limit": 100,
    "offset": 0,
    "count": 100,
    "total": 1669022
  },
  "data": [
    {
      "flight_date": "2023-09-15",
      "flight_status": "landed",
      "departure": {
        "airport": "New York",
        "timezone": "America/New_York",
        "scheduled_time": "2023-09-15T14:45:00.000Z",
        "actual_time": "2023-09-15T15:05:00.000Z",
        "delay": 20
      },
      "arrival": {
        "airport": "Los Angeles",
        "timezone": "America/Los_Angeles",
        "scheduled_time": "2023-09-15T17:30:00.000Z",
        "actual_time": "2023-09-15T17:50:00.000Z",
        "delay": 20
      },
      "airline": {
        "name": "Awesome Airlines",
        "iata": "AA",
        "icao": "AWE"
      },
      "flight": {
        "number": "123",
        "iata": "AA123",
        "icao": "AWE123"
      },
      "aircraft": {
        "registration": "N12345",
        "iata": "A320",
        "icao": "A320"
      }
    }
  ]
}
```

### GET v1/airports

Returns a list of airports based on the query parameters. Accpets the following query parameters:

* `lat`: Latitude
* `lng`: Longitude
* `limit`: Limit of Airports to return

**Sample Request:**

```
GET http://localhost:3030/v1/airpors?lat=99&lng=99&limit=1
```

**Sample Response:**

```json
{
  "pagination": {
    "limit": 1,
    "offset": 0,
    "count": 1,
    "total": 10000
  },
  "data": [
    {
      "airport_name": "East Johnnie International Airport",
      "iata_code": "IRI",
      "icao_code": "LMEP",
      "latitude": "1.4344",
      "longitude": "-169.8721",
      "geoname_id": "6449159",
      "timezone": "America/Belem",
      "gmt": "+5",
      "phone_number": "(443) 234-1259 x6434",
      "country_name": "Tajikistan",
      "country_iso2": "JM",
      "country_iso3": "PAK",
      "city_iata_code": "DJK",
      "city_name": "Lydafield",
      "website": "https://hidden-soup.org"
    }
  ]
}
```