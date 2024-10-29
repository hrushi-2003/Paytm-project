
# Hrushikesh Pay

A MERN stack-based digital wallet application designed to enable seamless and secure payment transfers. This app includes features like user registration, login, balance tracking, and transaction history.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Hrushikesh Pay is a digital wallet application that enables users to create accounts, add funds, and securely transfer payments between users. Built on the MERN stack, it combines the strengths of MongoDB, Express.js, React, and Node.js.

## Features

- **User Authentication**: Secure registration and login using JSON Web Tokens (JWT).
- **Account Management**: Create, view, and manage wallet accounts.
- **Balance Tracking**: Real-time tracking of account balances.
- **Transaction History**: Logs all transactions for accountability.
- **Responsive Design**: Accessible on both mobile and desktop devices.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git and GitHub
- **Deployment**: [Specify deployment platform if used, e.g., Heroku, Netlify]

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Hrushikesh-Pay.git
   cd Hrushikesh-Pay
   ```

2. **Install dependencies** for both frontend and backend:
   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. **Start the application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend server:
     ```bash
     cd frontend
     npm start
     ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` files in the backend folder:

```plaintext
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
PORT=<Port Number>
```

## Usage

1. **Register** a new account.
2. **Login** to access the wallet dashboard.
3. **Add funds** to your wallet.
4. **Transfer money** to another user.
5. **View transaction history** to keep track of your payments.

## API Documentation

| Route              | Method | Description                           |
| ------------------ | ------ | ------------------------------------- |
| `/api/v1/register` | POST   | Register a new user                  |
| `/api/v1/login`    | POST   | Login a user                         |
| `/api/v1/transfer` | POST   | Transfer money to another account    |
| `/api/v1/balance`  | GET    | Get the current account balance      |
| `/api/v1/history`  | GET    | Get the transaction history          |

## Folder Structure

```plaintext
Hrushikesh-Pay/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── package.json
```

## Contributing

1. **Fork the repository**
2. **Create a branch** for any new feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**
4. **Push to your branch**
5. **Submit a pull request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
