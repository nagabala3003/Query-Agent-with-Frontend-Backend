# 🧠 Natural Language → SQL + Mongo Query Generator (Frontend UI)

This is the frontend application for the AI Query Generator Agent.  
Users can enter a natural language request (example: _"show all users"_)  
and the UI will display **generated SQL + MongoDB queries** returned from backend AI engine.

---

## 🚀 Features

| Feature                                | Status |
| -------------------------------------- | ------ |
| Convert normal English → SQL Query     | ✔      |
| Convert normal English → MongoDB Query | ✔      |
| Works with Gemini-powered backend      | ✔      |
| Loading + Error state handled          | ✔      |
| Clean UI for testing queries quickly   | ✔      |

---

## 🧩 Tech Stack

- React / Vite / CRA (depending on your setup)
- Axios (API requests)
- Tailwind / CSS (optional styling)
- Connected to Node.js Backend

---

## 📂 Folder Structure

frontend/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── ... (UI components)
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── index.css
├── .env
├── package.json
├── package-lock.json
└── README.md

---

## 🔧 Setup & Installation

```bash
cd frontend
npm install
npm start  # or npm run dev (if Vite)
```

### Then open:

http://localhost:3000

---

### 4. **Sample Queries to test**

```md
### 🔥 Try These Examples

| Input                    | SQL Output            | Mongo Output              |
| ------------------------ | --------------------- | ------------------------- |
| show all users           | SELECT \* FROM users; | db.users.find({})         |
| top 10 customers         | LIMIT 10              | find().limit(10)          |
| employees salary > 50000 | WHERE salary > 50000  | { salary: { $gt: 50000 }} |
```
