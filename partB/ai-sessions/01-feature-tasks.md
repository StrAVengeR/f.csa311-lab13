# AI Session 01 — Task CRUD Feature

**Огноо:** 2025-05-07
**Хэрэгсэл:** Claude (claude.ai)
**Зорилго:** Task CRUD model, controller, routes хэрэгжүүлэх

## Товч харилцаа

**Оюутан:** Express + SQLite-ээр task CRUD хийхэд model layer яаж бүтэц болгох вэ?

**AI:** `better-sqlite3` synchronous API ашиглан model-д цэвэр SQL function-ууд бичих нь хамгийн цэгц. Repository pattern хэрэглэвэл controller-д SQL байхгүй болно.

**Оюутан:** `getAllTasks`-д filter нэмэхдээ SQL injection эрсдэлгүй яаж хийх вэ?

**AI:** Prepared statement + parameterized query ашиглах. `WHERE title LIKE ?` хэлбэрээр параметр дамжуулах — хэзээ ч string concatenation хийхгүй.

## Hallucination анзаарсан зүйл

AI эхлээд `db.query()` ашиглах санал болгосон — гэхдээ `better-sqlite3`-д `.query()` метод байхгүй, `.prepare().all()` гэж хэрэглэдэг. npm docs-оор шалгаж зассан.

## Эцсийн шийдвэр

Synchronous better-sqlite3 API → controller бүгд sync → try/catch pattern

Co-Authored-By: Claude <noreply@anthropic.com>
