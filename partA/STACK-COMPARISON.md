# Stack Comparison — Personal Task Tracker

**Огноо:** 2025-05-06
**Шийдвэр:** Node.js + Express + SQLite + Jest

---

## Харьцуулалтын шалгуурууд

| Шалгуур | Node.js + Express | Python + FastAPI | Go + Gin |
|---|---|---|---|
| Суралцах хялбар байдал | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| OpenAPI автоматжуулалт | swagger-jsdoc | Автоматаар /docs | swaggo (тусад нь) |
| Тест бичих хялбар байдал | ⭐⭐⭐⭐⭐ Jest | ⭐⭐⭐⭐⭐ pytest | ⭐⭐⭐ go test |
| Хурдан prototype хийх | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| AI (Claude) дэмжлэг | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Production performance | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Community / баримт | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## Тус бүрийн дэлгэрэнгүй

### Node.js 20 + Express 4
**Давуу тал:**
- `npm install && npm run dev` — нэмэлт тохиргоогүй шууд ажиллана
- JavaScript мэддэг бол frontend-тэй нэг хэл
- swagger-jsdoc + swagger-ui-express-ээр OpenAPI нэг install-аар
- Jest assertion syntax хялбар, AI-аар тест үүсгэхэд тохиромжтой
- npm ecosystem-д хэрэгтэй бүх зүйл бэлэн байдаг

**Сул тал:**
- TypeScript нэмэхгүй бол type safety байхгүй
- Architecture өөрөө тогтоох хэрэгтэй (FastAPI-тай харьцуулахад)

---

### Python 3.11 + FastAPI
**Давуу тал:**
- `/docs` хаягаар OpenAPI UI автоматаар гарна
- Pydantic validation — request body автоматаар шалгагдана
- Type hint нь кодыг тодорхой болгодог
- pytest маш хүчтэй

**Сул тал:**
- Virtual environment (`venv`) тохиргоо нэмэлт алхам
- `source venv/bin/activate` мартах эрсдэл бий
- Python мэдэхгүй бол суралцах цаг хэрэгтэй

---

### Go 1.21 + Gin
**Давуу тал:**
- Compiled binary — runtime хурдан
- Goroutine-ээр concurrency хялбар
- Production-д маш тохиромжтой

**Сул тал:**
- Pointer, interface, goroutine syntax шинэ бол 3-4 өдөр суралцахад алдана
- OpenAPI-д swaggo library тусад нь тохируулах шаардлагатай
- 2 долоо хоногийн хугацаанд хэт эрсдэлтэй
- AI hallucination Go-д харьцангуй их

---

## Эцсийн шийдвэр

**✅ Node.js 20 + Express 4 + SQLite (better-sqlite3) + Jest**

Хугацаа хязгаарлагдмал (2 долоо хоног), AI workflow-д хамгийн тохиромжтой,
суралцах муруй хамгийн бага тул Node.js+Express сонгосон.
Дэлгэрэнгүй үндэслэлийг `adr/0001-stack-decision.md`-д харна уу.

---

*Co-Authored-By: Claude <noreply@anthropic.com>*