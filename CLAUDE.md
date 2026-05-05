# CLAUDE.md

Энэ файл нь Claude Code болон AI assistant-д зориулсан repo-level context.
Кодлохоосоо өмнө заавал уншина уу.

## Project overview

**Personal Task Tracker API** — task CRUD, due date, priority, label, search/filter бүхий REST API + minimal frontend.

- Runtime: Node.js 20 + Express 4
- Database: SQLite (better-sqlite3)
- Test: Jest
- Package manager: npm

## Build & run commands

```bash
# Суулгах
npm install

# Dev server (auto-reload)
npm run dev

# Production
npm start

# Тест ажиллуулах
npm test

# Тест + coverage
npm run test:coverage

# Lint
npm run lint
```

## Project structure

```
partB/
├── src/
│   ├── app.js          # Express app setup
│   ├── server.js       # Entry point
│   ├── routes/         # Route handlers
│   ├── controllers/    # Business logic
│   ├── models/         # DB queries
│   └── middleware/     # Auth, validation, error
├── tests/              # Jest test files
├── data/               # SQLite db файл (gitignore-д байна)
└── openapi.yaml        # OpenAPI 3.0 spec
```

## Code conventions

- Conventional Commits: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`
- Feature branch: `feat/<name>`, `fix/<name>`
- AI туслалцаатай commit-д нэмэх:
  ```
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```
- Код доторх comment англиар
- Function нэр: camelCase (`createTask`, `getTaskById`)
- File нэр: kebab-case (`task-controller.js`)
- Error handling: try/catch бүх async route-д
- HTTP status code-уудыг зөв ашиглах (200, 201, 400, 404, 500)

## No-go zones

AI эдгээрийг хэзээ ч хийхгүй:

- `.env` файл болон нууц мэдээлэл (API key, password) хэзээ ч бүү бич
- `partB/data/` доторх `.db` файлыг устгах эсвэл seed хийхгүй
- Шинэ dependency нэмэхээсээ өмнө заавал асуух
- `tests/` директорийн файлыг устгахгүй
- `openapi.yaml`-ийг автоматаар덮어쓰хгүй — зөвхөн нэмэлт хийнэ

## AI collaboration notes

### Session log хадгалах
Чухал AI session бүрийг `partB/ai-sessions/` дотор хадгал:
```
01-feature-tasks.md
02-debug-validation.md
03-refactor-models.md
```

### Hallucination шалгах
AI гаргасан кодыг дараах байдлаар шалгана:
1. Гадаад library ашигласан бол `npm ls <package>` — суусан эсэхийг шалга
2. DB query бичсэн бол гараар ажиллуулж үзэх
3. API endpoint нэмсэн бол `openapi.yaml`-тай тохирч байгаа эсэхийг шалга
4. Шинэ function нэмсэн бол Jest-ээр тест бичиж баталга

### AI-д өгөх context
Claude Code эсвэл chat-д асуухдаа:
- Одоогийн алдааны бүрэн stack trace
- Холбогдох файлын агуулга
- Юу хийхийг хүсч байгаагаа тодорхой тайлбарла

## Environment variables

`.env.example` файлаас хуулж `.env` үүсгэнэ (`.env` gitignore-д байна):

```
PORT=3000
NODE_ENV=development
DB_PATH=./data/tasks.db
```