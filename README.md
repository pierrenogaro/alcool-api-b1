🌟 Alcool API 🌟

🚀 Overview  
This API, built with Express.js, allows you to manage a collection of alcoholic beverages with detailed information for each item. Perfect for a stock management app for beverages or an online cocktail library!

🛠️ Features

- **Add Alcools**: Easily add new alcohol items to your collection with details.
- **View All Alcools**: Retrieve a complete list of recorded alcohols with name, degree, and other details.
- **Update Alcool Information**: Modify information for each alcohol to keep your database up-to-date.
- **Delete Alcools**: Remove unwanted alcohols from the collection.

🔧 Technologies

- **Express.js**: Lightweight framework for handling routes and HTTP requests.
- **MongoDB/Mongoose**: NoSQL database for storing and managing alcohol data.
- **Node.js**: Development environment for server-side code.
- **Nodemon**: Automatically restarts the server during development to ease workflow.

📜 Data Model

| Field         | Type       | Description                          |
|---------------|------------|--------------------------------------|
| **Name**      | String     | Name of the alcohol (required)       |
| **Degree**    | String     | Alcohol content (required)           |
| **Ingredients** | Array of Strings | List of ingredients |
| **Description** | String     | Brief description of the alcohol     |

📡 API Endpoints

| Method | Endpoint                | Description                                     |
|--------|--------------------------|-------------------------------------------------|
| GET    | `/alcools/all`           | Retrieve all alcohols                           |
| GET    | `/alcools/:id`           | Get details of a specific alcohol               |
| POST   | `/alcools/create`        | Add a new alcohol                               |
| PUT    | `/alcools/update/:id`    | Update an existing alcohol                      |
| DELETE | `/alcools/delete/:id`    | Delete an alcohol from the collection           |

⚙️ Dependencies

- `express` : To build the API.
- `mongoose` : To connect and interact with MongoDB.
- `nodemon` : For automatic server restarts during development.

🎉 Usage

1. **Installation**:
   ```bash
   git clone <repository-url>
   cd alcool-api-b1
   npm install
