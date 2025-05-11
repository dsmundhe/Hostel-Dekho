# 🏨 HostelDekho

HostelDekho is a full-stack web application that allows users to find and book hostels by city. The platform supports user authentication, separate user types (e.g., trainee, mentor), and secure backend services using JWT and bcrypt.

---

## 🛠 Tech Stack

- **Frontend:** React.js, Redux, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, bcrypt
- **Other Tools:** Postman, VS Code, Git & GitHub

---

## 📁 Project Structure

- 📁 **[Frontend](frontend/)**

  - 🔹📁 **[Components](frontend/src/components/)**
  - 🔹📁 **[Pages](frontend/src/pages/)**
  - 🔹 **[App.js](frontend/src/App.js)**

- 📁 **[Backend](backend/)**

  - 🔹📁 **[Config](backend/config/)**
    - 🔹📁 **[Authentication](backend/config/Authentication/)**
      - 📄 **[tokenGen.js](backend/config/Authentication/tokenGen.js)**
      - 📄 **[verifyToken.js](backend/config/Authentication/verifyToken.js)**
    - 🔹📁 **[Database Connection](backend/config/dbConnection/)**
      - 📄 **[dbConnection.js](backend/config/dbConnection/dbConnection.js)**
  - 🔹📁 **[Controllers](backend/controllers/)**
    - 📄 **[loginAndSignup.js](backend/controllers/loginAndSignup.js)**
  - 🔹📁 **[Routes](backend/routes/)**
    - 📄 **[userRoutes.js](backend/routes/userRoutes.js)**
  - 🔹📁 **[Schema](backend/schema/)**
    - 📄 **[userSchema.js](backend/schema/userSchema.js)**
  - 📄 **[server.js](backend/server.js)**
  - 📄 **[package.json](backend/package.json)**

- 📄 **[.env](.env)**
- 📄 **[README.md](README.md)**
- 📄 **[package.json](package.json)**
