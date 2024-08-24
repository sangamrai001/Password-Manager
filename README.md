# Password Manager

A simple password manager application built with React and Express, utilizing MySQL for data storage. This application allows users to securely store and manage passwords for various platforms.

## Features

- **Add Passwords:** Users can add passwords and titles for different platforms.
- **View Passwords:** Users can view a list of saved passwords and titles.
- **Data Persistence:** Passwords are stored in a MySQL database and retrieved when needed.

## Technologies Used

- **Frontend:**
  - React
  - Axios
  - React Hot Toast (for notifications)
  - CSS for styling

- **Backend:**
  - Express.js
  - MySQL
  - CORS for handling cross-origin requests

## Setup and Installation

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [npm](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/) (for managing JavaScript packages)

### Backend Setup


1. **Navigate to the Backend Directory**

    ```bash
    cd server
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the `server` directory with the following content:

    ```env
    PORT=4000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=passwordManager
    ```

    Replace `yourpassword` with your MySQL password.

4. **Set Up the Database**

    - Log into MySQL and create the database:

      ```sql
      CREATE DATABASE passwordManager;
      USE passwordManager;
      ```

    - Create the `all_passwords` table:

      ```sql
      CREATE TABLE all_passwords (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
      );
      ```

5. **Start the Backend Server**

    ```bash
    npm start
    ```

### Frontend Setup

1. **Navigate to the Frontend Directory**

    ```bash
    cd ../client
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the React Development Server**

    ```bash
    npm start
    ```

    The React app will be available at `http://localhost:3000`.

### Running the Project

1. **Ensure the Backend Server is running** on `http://localhost:4000`.

2. **Ensure the React Development Server is running** on `http://localhost:3000`.

3. **Open your browser** and navigate to `http://localhost:3000` to use the Password Manager.

### Additional Notes

- Make sure that the backend server is running before starting the React development server.
- For production deployment, consider using environment-specific configurations and services like Heroku, AWS, or DigitalOcean.

Feel free to reach out if you have any issues or questions!




