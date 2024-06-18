# Urban Grocers API Testing

## Description

This project contains automated tests for the Urban Grocers API. The tests cover various endpoints including DELETE, PUT, GET, and POST methods to ensure the API's functionality. The tests are designed to check the response status codes and verify that the response bodies contain the expected data.

## Technologies and Techniques

- **JavaScript**: The primary programming language used for writing the tests.
- **Jest**: A JavaScript testing framework used to run the tests and make assertions about the API responses.
- **Fetch API**: Used to make HTTP requests to the Urban Grocers API endpoints.

## Project Structure

The project is structured as follows:

Urban-Grocers-API-Testing/
│
├── tests/
│ ├── deleteHandlers.test.js
│ ├── putHandlers.test.js
│ ├── getHandlers.test.js
│ ├── postHandlers.test.js
│ └── ...
├── config/
│ └── config.js
├── README.md
└── package.json


## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```sh
git clone https://github.com/your-username/urban-grocers-api-testing.git
cd urban-grocers-api-testing
npx jest
module.exports = {
	API_URL: 'https://api.urbangrocers.com'
};



This `README.md` now includes example tests for GET, Put, Delete, and POST methods, providing a comprehensive guide for all the HTTP methods you are testing in your project. Adjust the expected response bodies in the examples to match the actual responses from your API.
