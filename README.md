# Cryptocurrency Price Tracker

This project is a cryptocurrency price tracker that fetches and displays the prices of Bitcoin (BTC), Ethereum (ETH), and Dogecoin (DOGE) in EUR. The project consists of a backend built with Node.js and TypeScript, and a frontend built with React and TypeScript.


## Features

- Fetches prices of BTC, ETH, and DOGE from CoinGecko API every 60 seconds.
- Stores the price history in-memory.
- Provides an endpoint to request the latest price, average price, and price history.
- Displays the latest and average prices of the selected cryptocurrency.
- Updates the frontend every 60 seconds with new data.
- Navigation to switch between BTC, ETH, and DOGE.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/breinjhel/rocknitive-code-test.git
   ```
2. Go into both backend and client folders and run
    ``` bash
    npm install
    npm run start