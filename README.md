# 🏨 HostelDekho

HostelDekho is a full-stack web application that allows users to find and book hostels by city. The platform supports user authentication, separate user types (e.g., trainee, mentor), and secure Backend services using JWT and bcrypt.

---

## 🛠 Tech Stack

- **Frontend:** React.js, Redux, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, bcrypt
- **Other Tools:** Postman, VS Code, Git & GitHub

---

## About code
- **Frontend**
- **Backend**
 ---

## 🛠️ Getting Started

To get a local copy of the project up and running, follow these steps:

### 🔄 Clone the Repository

```bash
git clone https://github.com/dsmundhe/Hostel-Dekho.git
cd HostelDekho
```

## 📁 Project Structure

This project follows a modular structure for maintainability and scalability.

---

### 🚀 Frontend (`/Frontend`)

- 📁 **[components/](frontend/src/components/)** — Reusable UI components.
- 📁 **[pages/](frontend/src/pages/)** — Page-level components representing routes.
- 📄 **[App.js](frontend/src/App.js)** — Main entry point for React routing and layout.

---

### 🔧 Backend (`/Backend`)

- 📁 **[config/](Backend/config/)** — Configuration files

  - 📁 **[Authentication/](Backend/config/Authentication/)** — JWT utilities
    - 📄 **[tokenGen.js](Backend/config/Authentication/tokenGen.js)**
    - 📄 **[verifyToken.js](Backend/config/Authentication/varifyToken.js)**
  - 📁 **[dbConnection/](Backend/config/dbConnection/)** — MongoDB connection setup
    - 📄 **[dbConnection.js](Backend/config/dbConnection/dbConnection.js)**

- 📁 **[controllers/](Backend/controllers/)** — Business logic for routes

  - 📄 **[Login adn Signup controllers](Backend/controllers/loginAndSignup.js)**
  - 📄 **[Edit user details](Backend/controllers/editUserDetails.js)**
  - 📄 **[Hostel Controllers](Backend/controllers/hostelControllers.js)**

- 📁 **[routes/](Backend/routes/)** — API route definitions

  - 📄 **[User Routes](Backend/routes/userRoutes.js)**
  - 📄 **[Hostel Routes](Backend/routes/hostelRoutes.js)**

- 📁 **[schema/](Backend/schema/)** — Mongoose schemas and models

  - 📄 **[userSchema.js](Backend/schema/userSchema.js)**

- 📄 **[server.js](Backend/index.js)** — Express app entry point
- 📄 **[package.json](Backend/package.json)** — Backend dependencies and scripts

---

### 📄 Root Files

- 📄 **[.env](Backend/)** — Environment variables
- 📄 **[README.md](README.md)** — Project overview and documentation
- 📄 **[package.json](Backend/package.json)** — Project metadata and scripts
