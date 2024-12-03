# devTinder - Developer Networking and Collaboration Platform

![devTinder](https://img.shields.io/badge/build-passing-brightgreen)
![devTinder](https://img.shields.io/badge/license-MIT-blue)

## Project Overview
**devTinder** is a microservices-based platform built using the **MERN stack** (**MongoDB**, **Express.js**, **React.js**, **Node.js**). It is designed to connect developers based on their skills and project requirements, enabling seamless networking and collaboration. 

The platform offers features like:
- **Secure JWT-based authentication**.
- **Real-time messaging** (planned via WebSockets).
- **Skill-based filtering for team collaboration**.

---

## Purpose of the Project
The main goals of devTinder are:
1. To provide developers with a platform to create profiles and showcase their skills.
2. To enable seamless and secure communication through real-time messaging.
3. To simplify team formation and project collaboration by filtering users based on their skills and project needs.

---

## Features

### 1. **User Authentication**
- **Sign-Up and Login:** Users can securely register and log in to their accounts.
- **JWT Authentication:** User sessions are verified using JSON Web Tokens (**JWT**).
- **Password Hashing:** User passwords are hashed using **bcrypt** for enhanced security.

### 2. **Developer Profiles**
- Developers can create and update their profiles with:
  - Name, email, and age.
  - Skills (e.g., JavaScript, Python).
  - An "About" section to describe themselves.
- Profiles are stored in a **MongoDB** database.

### 3. **Explore Feed**
- A list of developers is fetched via the `/feed` API.
- Users can swipe right (send a connection request) or left (skip).
- Users can view detailed profiles of other developers.

### 4. **Connection Management**
- View incoming connection requests.
- Accept or reject connection requests.
- Accepted connections are added to the user’s connections list.

### 5. **Real-Time Messaging** (Planned)
- **WebSocket** implementation for real-time communication.
- **Group chats** and **one-to-one private chats** are planned.

---

## Technology Stack

### **Frontend** (Planned)
- **React.js:** User interface for profile creation, feeds, and messaging.

### **Backend**
- **Node.js** and **Express.js**:
  - REST APIs for authentication, profile management, and data retrieval.
  - Middleware for error handling and token validation.

### **Database**
- **MongoDB (Atlas):**
  - A NoSQL database to store user profiles and authentication data.
  - Managed using **Mongoose** (ODM).

---

## Libraries Used
1. **bcrypt.js** - For securely hashing passwords.
2. **jsonwebtoken (JWT)** - For generating and validating secure tokens.
3. **cookie-parser** - For handling cookies in the application.
4. **validator** - For schema validation and data sanitization.
5. **mongoose** - For seamless interaction with MongoDB.

---

## File Structure




```
src/
├── config/
│   └── database.js       # MongoDB connection configuration
├── middlewares/
│   └── auth.js           # Middleware for authentication
├── models/
│   └── user.js           # User schema and model
├── utils/
│   └── validation.js     # Input validation logic
├── app.js                # Main server file
.gitignore                # Ignore node_modules and environment files
package.json              # Node.js dependencies and scripts
```



## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **MongoDB Atlas Account**
- **Git**

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/devTinder.git
   cd devTinder
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the following:
     ```
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     PORT=5000
     ```

4. **Start the Server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

5. **Test APIs**
   - Use tools like **Postman** or **Thunder Client** to test endpoints:
     - `POST /signup`
     - `POST /login`
     - `GET /feed`

---

## API Endpoints

### **Authentication**
- `POST /signup` - Register a new user.
- `POST /login` - Login for existing users.

### **Feed**
- `GET /feed` - Fetch all developer profiles.
- `POST /connect` - Send a connection request.

### **Profile**
- `GET /profile/:id` - Fetch a developer's profile.

### **Connections**
- `GET /connections` - View incoming connection requests.
- `POST /connections/accept` - Accept a connection request.
- `DELETE /connections/reject` - Reject a connection request.

---

## Future Enhancements
1. **Frontend Development**:
   - Build the user interface using React.js.
   - Add responsive designs and UX improvements.

2. **Real-Time Messaging**:
   - Implement WebSockets for real-time group and private chats.

3. **Skill-Based Filters**:
   - Advanced search and filtering options for finding developers by skills or location.

---

## Contribution Guidelines
We welcome contributions to improve devTinder! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes and open a Pull Request.

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## Contact
For any questions or suggestions, please reach out to:
- **Name**: Pranav Saluja 
- **Email**: pranavsaluja12345@gmail.com
- **GitHub**: [Pranav](https://github.com/Pranav011202)

```

