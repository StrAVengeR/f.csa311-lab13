# AI Session 03 — Model Refactor & Query Optimization

**Огноо:** 2025-05-09
**Хэрэгсэл:** Claude (claude.ai)
**Зорилго:** Model layer-ийн query-уудыг оновчлох

## Товч харилцаа

**Оюутан:** `getAllTasks`-д filter нэмэх бүрт `if` нэмж байна — илүү сайн арга бий юу?

**AI:** `WHERE 1=1` pattern ашиглаад dynamic параметр нэмэх арга хамгийн цэгц. Array-д condition цуглуулаад `join(' AND ')` хийх арга ч бий — гэхдээ better-sqlite3-д spread params-тай `WHERE 1=1` нь хамгийн уншихад хялбар.

**Оюутан:** Priority sort-д CASE WHEN ашигласан — өөр арга бий юу?

**AI:** Application layer-д sort хийж болно (`tasks.sort(...)`) — гэхдээ DB-д хийх нь үргэлж хурдан. CASE WHEN нь SQLite-д тохиромжтой, index байхгүй ч энэ хэмжээний өгөгдөлд асуудалгүй.

## Эцсийн шийдвэр

CASE WHEN priority sort DB-д үлдсэн, dynamic filter pattern хэвээр.

Co-Authored-By: Claude <noreply@anthropic.com>
