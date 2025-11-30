# 🧠 Natural Language → SQL + Mongo Query Generator (Agent Backend)

This backend converts **natural language questions into SQL + MongoDB queries**  
using the **Gemini API**.  
It also **stores query history in MongoDB** for later retrieval or analytics.

---

## 🚀 Features

| Feature                                  | Status |
| ---------------------------------------- | ------ |
| Convert Text → SQL Query                 | ✔      |
| Convert Text → MongoDB Query             | ✔      |
| Stores Generated Queries into MongoDB    | ✔      |
| REST API for Frontend Integration        | ✔      |
| Supports Gemini API v1 (2.5-flash Model) | ✔      |

---

## 🧩 Tech Stack

- Node.js + Express
- Gemini API (models/gemini-2.5-flash)
- MongoDB (Atlas or local)

---

## 📌 Folder Structure

server/
├── routes/
│ └── query.js
├── services/
│ └── llm.js
├── index.js
├── package.json
└── .env

---

## 🔧 Setup & Installation

```bash
cd server
npm install
npm start / npm run dev
```

### 📡 Generate Query Endpoint

**POST /generate-query/generate**

Request body:

```json
{
  "question": "show all users"
}
```

### Response:

{
"sql": "SELECT \* FROM users;",
"mongo": "db.users.find({})"
}

---

### 2. **Demo Screenshots / UI Preview** (Frontend)

Add after features.

```md
### 🖥 UI Preview

> (Screenshot placeholder — add image later)

| Input (User Types) | Output (Generated)          |
| ------------------ | --------------------------- |
| show all users     | SQL + Mongo query displayed |
```
