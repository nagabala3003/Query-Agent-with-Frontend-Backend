# 🧠 Natural Language → SQL + Mongo Query Generator | Full Stack
This project converts normal English into SQL + MongoDB queries using Gemini AI. It includes a React frontend, Node.js/Express backend, and MongoDB for history storage.
## 🚀 Features
Convert English → SQL queries  
Convert English → MongoDB queries  
React frontend UI for query generation  
Node.js backend with AI response  
Query history saved in MongoDB  
## 🔧 Tech Stack
Frontend: React  
Backend: Node.js + Express  
AI Engine: Gemini API  
Database: MongoDB Atlas  
## 📂 Project Structure
Query-Agent-with-Frontend-Backend/  
→ frontend (UI)  
→ server (API + AI)  
→ README.md (this main file)  
## 🏁 How to Run Entire Project
### Backend
cd server  
npm install  
npm start  
Backend runs on: http://localhost:8008  
### Frontend
cd frontend  
npm install  
npm start  
Frontend runs on: http://localhost:3000  
## 📡 API Endpoint
POST /generate-query/generate  
Request Body:
{ "question": "show all users" }
Response:
{ "sql": "SELECT * FROM users;", "mongo": "db.users.find({})" }
## 🔥 Example Queries to Try
show all users  
employees salary > 50000  
add employee John salary 45000  
products price < 1000  
top 10 customers  
users logged in last 30 days  
## 🛠 Future Enhancements
Execute SQL/Mongo inside UI  
View history on frontend  
Export queries to CSV/JSON  
Login system for personal data saving  
Dark/Light mode support  
## ⭐ Support
If this helped you, please ⭐ star the repo.
https://github.com/nagabala3003/Query-Agent-with-Frontend-Backend
## 🔗 Live Project Links

| Type      | Link |
|----------|------|
| Frontend Live | [https://query-agent-with-frontend-backend.vercel.app/](https://query-agent-with-frontend-backend.vercel.app/) |
| Backend API   | [https://query-agent-backend.onrender.com](https://query-agent-backend.onrender.com) |
| GitHub Repo   | [https://github.com/nagabala3003/Query-Agent-with-Frontend-Backend](https://github.com/nagabala3003/Query-Agent-with-Frontend-Backend) |
| Demo Video    | [https://github.com/nagabala3003/Query-Agent-with-Frontend-Backend/releases/download/v1.0/demo.mp4](https://github.com/nagabala3003/Query-Agent-with-Frontend-Backend/releases/download/v1.0/demo.mp4) |

