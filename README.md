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

2. The API will be running at `http://localhost:3000`.

## API Endpoints

### GET /flight-history

Returns a list of historical flight data.

**Sample Request:**

```
GET http://localhost:3000/api/flights/flight-history
```

**Sample Response:**

```json
[
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
```
