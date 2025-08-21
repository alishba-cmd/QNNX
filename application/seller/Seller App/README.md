🛍️ Seller Web Application
A full-stack MERN (MongoDB, Express.js, React, Node.js) application for sellers to register, manage their products, track orders, and view sales insights.

📂 Folder Structure
Seller-Web-Application/
│── client/        # React frontend
│   ├── src/
│   │   ├── pages/          # Landing, BecomeSeller, Login, Dashboard, Categories, Catalog, SalesOverview, Orders
│   │   ├── components/     # Reusable UI components
│   │   └── App.js
│   ├── package.json
│
│── server/        # Node.js + Express backend
│   ├── models/    # MongoDB models (Mongoose schemas)
│   ├── routes/    # API routes
│   ├── controllers/ # Business logic
│   ├── server.js  # Backend entry point
│   ├── package.json
│
└── README.md

🚀 Features
Seller onboarding (Local Seller & New Seller options)
Secure login with JWT authentication
Seller dashboard with Sales Overview
Manage product catalog (add, update, delete products)
Categories management
Orders management

📊 Pages Overview
Landing Page – Introduction for sellers
Become a Seller – Seller registration (Local / New Seller)
Login – Secure login system
Dashboard – Seller’s main control panel
Categories – Manage product categories
Catalog / Add Products – Add and manage products
Sales Overview – Sales analytics and reports
Orders – Manage and view customer orders

🛠️ Tech Stack
Frontend: React, React Router, Axios, TailwindCSS (or CSS)
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Authentication: JWT (JSON Web Token), bcryptjs
Other tools: dotenv, cors

📦 Installation & Setup
1. Clone Repository
git clone https://github.com/alishba-cmd/Seller-App.git
cd seller-web-application

2. Install Dependencies
🔹 Backend (Server)
cd server
npm install
Dependencies needed:
express
mongoose
cors
dotenv
jsonwebtoken
bcryptjs

🔹 Frontend (Client)
cd client
npm install
Dependencies needed:
react
react-router-dom
axios
tailwindcss 

3. Run the Project
Start Backend (server)
node index.js
Start Frontend (client)
npm run dev
