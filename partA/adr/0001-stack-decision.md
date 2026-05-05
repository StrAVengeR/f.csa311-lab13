# ADR-001: Stack сонголт — Node.js + Express + SQLite + Jest

**Огноо:** 2025-05-05
**Статус:** Accepted
**Шийдвэр гаргасан:** AI-тай хамтран (Claude, claude.ai)

---

## Нөхцөл байдал (Context)

Personal Task Tracker API хийхдээ дараах шаардлагуудыг хангах stack сонгох шаардлагатай болсон:

- REST API + minimal frontend
- Task CRUD, due date, priority, label, search/filter feature-үүд
- Unit test ≥10, OpenAPI 3.0 spec
- Хугацаа: 2 долоо хоног
- AI-assisted workflow (Claude Code / Cursor)
- 2-р курсын оюутан — суралцах муруй багатай байх

## Авч үзсэн сонголтууд

### Сонголт А: Node.js 20 + Express 4 + SQLite + Jest
- **Давуу тал:** npm экосистем том, JavaScript мэддэг бол frontend-тэй нэг хэл, Jest тест хялбар, swagger-jsdoc-оор OpenAPI автоматаар гарна, AI (Claude) хамгийн сайн мэддэг stack
- **Сул тал:** Хэт уян хатан тул architecture сонголт өөрөө хийх хэрэгтэй, TypeScript нэмбэл тохиргоо нэмнэ

### Сонголт Б: Python 3.11 + FastAPI + SQLite + pytest
- **Давуу тал:** `/docs` хаягаар OpenAPI автоматаар гарна, Pydantic validation цэгц, type hint нь кодыг тодорхой болгоно
- **Сул тал:** Virtual environment тохиргоо нэмэлт алхам, Python мэдэхгүй бол суралцах цаг хэрэгтэй

### Сонголт В: Go 1.21 + Gin + SQLite + Go test
- **Давуу тал:** Runtime хурдан, compiled binary, production-д маш тохиромжтой
- **Сул тал:** Go syntax шинэ бол pointer, interface, goroutine суралцахад 3-4 өдөр алдана, OpenAPI-д swaggo library тусад нь тохируулах шаардлагатай, 2 долоо хоногийн хугацаанд хэт эрсдэлтэй

## Шийдвэр (Decision)

**Node.js 20 + Express 4 + SQLite (better-sqlite3) + Jest** сонгосон.

## Үндэслэл (Rationale)

1. **Хурдан эхлэх:** `npm install && npm run dev` — нэмэлт тохиргоогүй шууд ажиллана
2. **AI workflow-д тохиромжтой:** Claude Code Node.js/Express кодыг хамгийн сайн ойлгодог, hallucination бага
3. **OpenAPI:** `swagger-jsdoc` + `swagger-ui-express` нэг npm install-аар шийдэгдэнэ
4. **Тест:** Jest-ийн assertion syntax хялбар, AI-аар тест үүсгэхэд хамгийн тохиромжтой
5. **SQLite:** File-based, тусдаа DB server шаардахгүй, `better-sqlite3` synchronous API нь Express-тэй цэгц

## Үр дагавар (Consequences)

- TypeScript ашиглахгүй — type safety багасна, гэхдээ JSDoc comment-ээр нөхнө
- Scaling хязгаарлагдмал (SQLite) — гэхдээ энэ бие даалтын хэмжээнд хангалттай
- Go/Python мэддэг хүнд ялгаатай харагдана — тэмдэглэлд дурдах

## AI харилцааны товч

AI-тай хийсэн харьцуулалтын үндсэн дүгнэлт (`partA/ai-sessions/plan.md`-д бүрэн log байна):

> "Node.js+Express-ийг санал болгоно — хамгийн бага суурь тохиргоо, хамгийн том community. Go production-д гайхалтай ч 2 долоо хоногт syntax сурахад 3-4 өдөр алдана."
> — Claude, 2025-05-05

---

*Co-Authored-By: Claude <noreply@anthropic.com>*
