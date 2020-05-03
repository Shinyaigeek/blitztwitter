# Migration `20200501215026-asdf`

This migration has been generated at 5/1/2020, 9:50:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."User" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"img" TEXT NOT NULL  ,"mail" TEXT NOT NULL  ,"name" TEXT NOT NULL  ,"password" TEXT NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200501215026-asdf
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,21 @@
+datasource sqlite {
+  provider = "sqlite"
+  url      = "file:./db.sqlite"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+// --------------------------------------
+// model Project {
+// id        Int      @default(autoincrement()) @id
+// name      String
+// }
+model User {
+  id       Int    @default(autoincrement()) @id
+  name     String
+  mail     String
+  img      String
+  password String
+}
```


