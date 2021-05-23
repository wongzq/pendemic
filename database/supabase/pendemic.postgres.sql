DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE "writer" (
  "writer_id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL
);

CREATE TABLE "story" (
  "writer_id" int NOT NULL,
  "story_id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text
);

CREATE TABLE "plot" (
  "story_id" int NOT NULL,
  "plot_id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text,
  "order" int NOT NULL
);

CREATE TABLE "plotpoint" (
  "story_id" int NOT NULL,
  "plot_id" int NOT NULL,
  "plotpoint_id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text,
  "order" int NOT NULL
);

CREATE TABLE "character" (
  "story_id" int NOT NULL,
  "character_id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text,
  "order" int NOT NULL
);

CREATE TABLE "characterrelationship" (
  "character_id_1" int NOT NULL,
  "character_id_2" int NOT NULL,
  "relationship_1_to_2" varchar NOT NULL,
  "relationship_2_to_1" varchar NOT NULL,
  PRIMARY KEY ("character_id_1", "character_id_2")
);

CREATE TABLE "setting" (
  "story_id" int NOT NULL,
  "setting_id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text,
  "order" int NOT NULL
);

CREATE TABLE "chapter" (
  "story_id" int NOT NULL,
  "chapter_id" SERIAL PRIMARY KEY,
  "title" varchar NOT NULL,
  "content_url" text NOT NULL,
  "order" int NOT NULL
);

CREATE TABLE "plotpointchapter" (
  "plotpoint_id" int NOT NULL,
  "chapter_id" int NOT NULL,
  PRIMARY KEY ("plotpoint_id", "chapter_id")
);

CREATE TABLE "plotpointcharacter" (
  "plotpoint_id" int NOT NULL,
  "character_id" int NOT NULL,
  PRIMARY KEY ("plotpoint_id", "character_id")
);

CREATE TABLE "plotpointsetting" (
  "plotpoint_id" INT NOT NULL,
  "setting_id" INT NOT NULL,
  PRIMARY KEY ("plotpoint_id", "setting_id")
);

ALTER TABLE "story" ADD FOREIGN KEY ("writer_id") REFERENCES "writer" ("writer_id");

ALTER TABLE "plot" ADD FOREIGN KEY ("story_id") REFERENCES "story" ("story_id");

ALTER TABLE "plotpoint" ADD FOREIGN KEY ("story_id") REFERENCES "story" ("story_id");

ALTER TABLE "plotpoint" ADD FOREIGN KEY ("plot_id") REFERENCES "plot" ("plot_id");

ALTER TABLE "character" ADD FOREIGN KEY ("story_id") REFERENCES "story" ("story_id");

ALTER TABLE "characterrelationship" ADD FOREIGN KEY ("character_id_1") REFERENCES "character" ("character_id");

ALTER TABLE "characterrelationship" ADD FOREIGN KEY ("character_id_2") REFERENCES "character" ("character_id");

ALTER TABLE "setting" ADD FOREIGN KEY ("story_id") REFERENCES "story" ("story_id");

ALTER TABLE "chapter" ADD FOREIGN KEY ("story_id") REFERENCES "story" ("story_id");

ALTER TABLE "plotpointchapter" ADD FOREIGN KEY ("plotpoint_id") REFERENCES "plotpoint" ("plotpoint_id");

ALTER TABLE "plotpointchapter" ADD FOREIGN KEY ("chapter_id") REFERENCES "chapter" ("chapter_id");

ALTER TABLE "plotpointcharacter" ADD FOREIGN KEY ("plotpoint_id") REFERENCES "plotpoint" ("plotpoint_id");

ALTER TABLE "plotpointcharacter" ADD FOREIGN KEY ("character_id") REFERENCES "character" ("character_id");

ALTER TABLE "plotpointsetting" ADD FOREIGN KEY ("plotpoint_id") REFERENCES "plotpoint" ("plotpoint_id");

ALTER TABLE "plotpointsetting" ADD FOREIGN KEY ("setting_id") REFERENCES "setting" ("setting_id");

CREATE UNIQUE INDEX ON "plot" ("story_id", "order");

CREATE UNIQUE INDEX ON "plotpoint" ("story_id", "order");

CREATE UNIQUE INDEX ON "character" ("story_id", "order");
