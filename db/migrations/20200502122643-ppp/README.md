# Migration `20200502122643-ppp`

This migration has been generated at 5/2/2020, 12:26:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Project" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."User";;
PRAGMA foreign_keys=on

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200501221827-te..20200502122643-ppp
--- datamodel.dml
+++ datamodel.dml
@@ -2,16 +2,16 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource sqlite {
   provider = "sqlite"
-  url = "***"
+  url      = "file:./db.sqlite"
 }
 // SQLite is easy to start with, but if you use Postgres in production
 // you should also use it in development with the following:
 //datasource postgresql {
 //  provider = "postgresql"
-//  url = "***"
+//  url      = env("DATABASE_URL")
 //}
 generator client {
   provider = "prisma-client-js"
@@ -19,14 +19,14 @@
 // --------------------------------------
-// model Project {
-//  id        Int      @default(autoincrement()) @id
-//  name      String
+model Project {
+ id        Int      @default(autoincrement()) @id
+ name      String
+}
+
+// model User {
+//   id        Int     @default(autoincrement()) @id
+//   name       String
 // }
-model User {
-  id        Int     @default(autoincrement()) @id
-  name       String
-}
-
```


