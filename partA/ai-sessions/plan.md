# partA/ai-sessions/plan.md
## Stack харьцуулалт — AI session товч

**Огноо:** 2026-05-05
**Хэрэгсэл:** Claude (claude.ai)
**Зорилго:** Personal task tracker-т тохирох stack сонгох

### Асуулт 1
**Оюутан:** Personal task tracker хийх гэж байна. Node.js+Express, Python+FastAPI, Go+Gin гурвыг харьцуул. Хугацаа 2 долоо хоног, тест ≥10, OpenAPI spec хэрэгтэй.

**AI:** Node.js+Express — хамгийн хурдан эхлэх, Jest тест хялбар, том community. Python+FastAPI — automatic /docs давуу тал, Pydantic validation цэгц. Go+Gin — runtime хурдан ч syntax сурахад 1-2 долоо хоног алдана.

### Асуулт 2
**Оюутан:** FastAPI /docs сайн санагдаж байна. Python venv хэцүү биш үү?

**AI:** node+venv сонголт хялбар. Хугацаа хязгаарлагдмал бол Node.js friction бага.

### Асуулт 3
**Оюутан:** Go биш яагаад?

**AI:** Go-д OpenAPI (swaggo), pointer/interface syntax, tooling тохиргоо — 3-4 өдөр нэмэлт. Node.js-д swagger-jsdoc, jest нэг npm install.

### Эцсийн шийдвэр
**Сонгосон:** Node.js + Express + SQLite + Jest
**Шалтгаан:** Хугацаа хязгаарлагдмал, тест болон OpenAPI хялбар, community том.

Co-Authored-By: Claude <noreply@anthropic.com>