CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE stars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  
);
