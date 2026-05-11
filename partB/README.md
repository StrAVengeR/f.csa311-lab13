# Personal Task Tracker API

Task CRUD, due date, priority, label, search/filter бүхий REST API.
F.CSM311 Программ хангамжийн бүтээлт — Бие даалт 13.

## Tech stack

- Node.js 20 + Express 4
- SQLite (better-sqlite3)
- Jest + Supertest

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

Server: http://localhost:3000

## Scripts

| Команд | Үүрэг |
|--------|-------|
| `npm run dev` | Dev server (nodemon) |
| `npm start` | Production server |
| `npm test` | Тест ажиллуулах |
| `npm run test:coverage` | Coverage report |

## API endpoints

| Method | URL | Тайлбар |
|--------|-----|---------|
| GET | /api/tasks | Бүх task (filter боломжтой) |
| GET | /api/tasks/:id | Нэг task |
| GET | /api/tasks/overdue | Хугацаа хэтэрсэн tasks |
| GET | /api/tasks/by-priority | Priority-аар эрэмбэлсэн |
| POST | /api/tasks | Шинэ task үүсгэх |
| PUT | /api/tasks/:id | Task шинэчлэх |
| DELETE | /api/tasks/:id | Task устгах |

## Query параметрүүд (GET /api/tasks)

| Параметр | Утга | Жишээ |
|----------|------|-------|
| status | pending, in-progress, done | ?status=pending |
| priority | high, medium, low | ?priority=high |
| label | string | ?label=work |
| search | title-д хайх | ?search=meeting |

## Жишээ хүсэлт

```bash
# Task үүсгэх
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Lab дуусгах","priority":"high","due_date":"2025-05-20"}'

# Бүх pending task авах
curl http://localhost:3000/api/tasks?status=pending

# Overdue tasks
curl http://localhost:3000/api/tasks/overdue
```

## Project structure
partB/
├── src/
│   ├── app.js           # Express setup
│   ├── server.js        # Entry point
│   ├── routes/          # Route definitions
│   ├── controllers/     # Request handlers
│   ├── models/          # DB queries
│   ├── middleware/      # Validation
│   └── db/              # SQLite connection
├── tests/               # Jest tests
├── ai-sessions/         # AI collaboration logs
├── openapi.yaml         # API spec
└── data/                # SQLite db (gitignore)

## OpenAPI docs

`openapi.yaml` файлыг [Swagger Editor](https://editor.swagger.io)-т оруулж харна уу.
