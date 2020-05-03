# Migration `20200501221827-te`

This migration has been generated at 5/1/2020, 10:18:27 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_User" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

INSERT INTO "quaint"."new_User" ("id", "name") SELECT "id", "name" FROM "quaint"."User"

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."User";;
PRAGMA foreign_keys=on

ALTER TABLE "quaint"."new_User" RENAME TO "User";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200501215026-asdf..20200501221827-te
--- datamodel.dml
+++ datamodel.dml
@@ -1,21 +1,32 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
 datasource sqlite {
   provider = "sqlite"
-  url = "***"
+  url      = "file:./db.sqlite"
 }
+// SQLite is easy to start with, but if you use Postgres in production
+// you should also use it in development with the following:
+//datasource postgresql {
+//  provider = "postgresql"
+//  url      = env("DATABASE_URL")
+//}
+
 generator client {
   provider = "prisma-client-js"
 }
+
 // --------------------------------------
+
 // model Project {
-// id        Int      @default(autoincrement()) @id
-// name      String
+//  id        Int      @default(autoincrement()) @id
+//  name      String
 // }
+
 model User {
-  id       Int    @default(autoincrement()) @id
-  name     String
-  mail     String
-  img      String
-  password String
-}
+  id        Int     @default(autoincrement()) @id
+  name       String
+}
+
```


