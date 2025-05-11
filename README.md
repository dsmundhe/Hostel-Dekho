# 🏨 HostelDekho

HostelDekho is a full-stack web application that allows users to find and book hostels by city. The platform supports user authentication, separate user types (e.g., trainee, mentor), and secure backend services using JWT and bcrypt.

---

## 🛠 Tech Stack

- **Frontend:** React.js, Redux, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, bcrypt
- **Other Tools:** Postman, VS Code, Git & GitHub

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

### 🚀 Frontend (`/frontend`)
- 📁 **[components/](frontend/src/components/)** — Reusable UI components.
- 📁 **[pages/](frontend/src/pages/)** — Page-level components representing routes.
- 📄 **[App.js](frontend/src/App.js)** — Main entry point for React routing and layout.

---

### 🔧 Backend (`/backend`)
- 📁 **[config/](backend/config/)** — Configuration files
  - 📁 **[Authentication/](backend/config/Authentication/)** — JWT utilities  
    - 📄 **[tokenGen.js](backend/config/Authentication/tokenGen.js)**  
    - 📄 **[verifyToken.js](backend/config/Authentication/varifyToken.js)**  
  - 📁 **[dbConnection/](backend/config/dbConnection/)** — MongoDB connection setup  
    - 📄 **[dbConnection.js](backend/config/dbConnection/dbConnection.js)**  

- 📁 **[controllers/](backend/controllers/)** — Business logic for routes  
  - 📄 **[loginAndSignup.js](backend/controllers/loginAndSignup.js)**  

- 📁 **[routes/](backend/routes/)** — API route definitions  
  - 📄 **[userRoutes.js](backend/routes/userRoutes.js)**  

- 📁 **[schema/](backend/schema/)** — Mongoose schemas and models  
  - 📄 **[userSchema.js](backend/schema/userSchema.js)**  

- 📄 **[server.js](backend/index.js)** — Express app entry point  
- 📄 **[package.json](backend/package.json)** — Backend dependencies and scripts

---

### 📄 Root Files
- 📄 **[.env](Backend/)** — Environment variables
- 📄 **[README.md](README.md)** — Project overview and documentation  
- 📄 **[package.json](package.json)** — Project metadata and scripts