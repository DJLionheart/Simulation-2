CREATE TABLE IF NOT EXISTS houses (
    HouseId SERIAL PRIMARY KEY NOT NULL,
    PropertyName VARCHAR,
    Address VARCHAR,
    City TEXT,
    State TEXT,
    Zip INTEGER
)