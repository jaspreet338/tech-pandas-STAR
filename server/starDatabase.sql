CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE stars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  
);

CREATE TABLE users (
  id        INT PRIMARY KEY,
  username  VARCHAR(60) NOT NULL,  
  name      VARCHAR(60) NOT NULL,
  area      VARCHAR(60),
  class     VARCHAR(60),
  role      VARCHAR(20)
);

CREATE TABLE "session" (  "sid" varchar NOT NULL COLLATE "default",  "sess" json NOT NULL,  "expire" timestamp(6) NOT NULL)WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
CREATE INDEX "IDX_session_expire" ON "session" ("expire");