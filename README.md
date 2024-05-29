Sure! Here’s a sample `README.md` file for your GitHub repository:

markdown
# Simple CRUD App Backend

This is a simple backend application demonstrating CRUD (Create, Read, Update, Delete) operations using Node.js, Express, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a basic setup for a backend service that handles CRUD operations on a product collection. It uses Node.js and Express for the server, and MongoDB for the database.

## Features

- Create a new product
- Retrieve all products
- Retrieve a single product by ID
- Update a product by ID
- Delete a product by ID

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (you can use a local instance or a cloud service like MongoDB Atlas)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nostoc/simple-crud-app-backend.git
   cd simple-crud-app-backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

## Usage

1. Start the server:
   ```bash
   npm run dev
   ```

2. The server will run on port 3003 by default. You can test the endpoints using Postman or any API client.

## API Endpoints

Here are the available API endpoints:

- **GET /api/products**
  - Retrieve all products.
  - Response:
    ```json
    {
      "products": [...]
    }
    ```

- **GET /api/products/:id**
  - Retrieve a product by ID.
  - Response:
    ```json
    {
      "product": { ... }
    }
    ```

- **POST /api/products**
  - Create a new product.
  - Request body:
    ```json
    {
      "name": "Product Name",
      "quantity": 10,
      "price": 100,
      "image": "image_url"
    }
    ```
  - Response:
    ```json
    {
      "product": { ... }
    }
    ```

- **PUT /api/products/:id**
  - Update a product by ID.
  - Request body:
    ```json
    {
      "name": "Updated Product Name",
      "quantity": 20,
      "price": 200,
      "image": "updated_image_url"
    }
    ```
  - Response:
    ```json
    {
      "product": { ... }
    }
    ```

- **DELETE /api/products/:id**
  - Delete a product by ID.
  - Response:
    ```json
    {
      "message": "Product deleted successfully"
    }
    ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding guidelines and includes appropriate tests.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

