# AI Session 02 — Validation Middleware Debug

**Огноо:** 2025-05-09
**Хэрэгсэл:** Claude (claude.ai)
**Зорилго:** Validation логикийг controller-аас middleware рүү гаргах

## Товч харилцаа

**Оюутан:** Controller дотор validation байгаа нь муу паттерн мөн үү?

**AI:** Тийм. Controller нь зөвхөн business logic-тай байх ёстой — Single Responsibility Principle. Validation-ийг тусдаа middleware болгон гаргавал: (1) controller цэвэр болно, (2) validation-ийг өөр route-д дахин ашиглах боломжтой, (3) тест бичихэд хялбар.

**Оюутан:** `next()` дуудахгүй бол яах вэ?

**AI:** Request hang болно — хариу хэзээ ч илгээгдэхгүй. Middleware-д validation амжилттай бол заавал `next()` дуудах, алдаа бол `res.status(400).json(...)` буцааж зогсоох.

## Hallucination анзаарсан зүйл

AI `express-validator` package ашиглахыг санал болгосон — гэхдээ нэмэлт dependency нэмэхгүй гэсэн CLAUDE.md-ийн no-go zone-тай зөрчилдсөн. Custom middleware-ээр шийдсэн.

## Эцсийн шийдвэр

Custom validate.js middleware — гадаад dependency нэмэлгүй, CLAUDE.md convention дагасан.

Co-Authored-By: Claude <noreply@anthropic.com>
