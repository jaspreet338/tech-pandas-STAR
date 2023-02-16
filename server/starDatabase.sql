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