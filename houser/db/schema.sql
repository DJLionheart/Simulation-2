CREATE TABLE IF NOT EXISTS houses (
    HouseId SERIAL PRIMARY KEY NOT NULL,
    PropertyName VARCHAR,
    Address VARCHAR,
    City VARCHAR,
    State VARCHAR,
    Zip INTEGER,
    
)

--Initial Data for Houses Table

INSERT INTO houses (PropertyName, Address, City, State, Zip)
VALUES ('The Barn House', '22 Rustic Lane',	'Podunk', 'ID',	87309),
('Little Blue', '1 Azure Lane',	'Cerulean City', 'KT',	27384),
('Ash Ketchams House', 'Number 1 Starters Lane', 'Pallet Town',	'KT', 13400),
('The Garden Shop',	'62 SW Shoten Avenue', 'Goldenrod City', 'JT', 53160),
('The Bell Tower', 'Number 4 Pagoda Circle', 'Ecruteak', 'JT', 60383),
('Viridian City Gym', '23 PokeMaster Blvd', 'Viridian City', 'KT', 17800)


--Modify Table, adding three extra columns

ALTER TABLE houses
ADD ImageUrl VARCHAR,
ADD MonthlyMorgage INTEGER,
ADD DesiredRent INTEGER

UPDATE houses
SET ImageUrl = 'http://www.sandcreekpostandbeam.com/galleries/imgs/main/thumbs/homes-great-plains-western-horse-barn-NPE814-barnhomeMainImage.jpg',
MonthlyMorgage = 1500,
DesiredRent = 1850
WHERE Zip = 87309;

UPDATE houses
SET ImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Mml1njXIMaxvgb_tNurQ5MuQ96ew_sx0cVmBDSV3TG32WR5f9Q',
MonthlyMorgage = 1100,
DesiredRent = 1375
WHERE Zip = 27384;

UPDATE houses
SET ImageUrl = 'https://i.imgur.com/0V75ETX.jpg',
MonthlyMorgage = 1900, 
DesiredRent = 2375
WHERE Zip = 13400;

UPDATE houses
SET ImageUrl = 'https://cdn.bulbagarden.net/upload/6/65/Goldenrod_City_HGSS.png',
MonthlyMorgage = 2100, 
DesiredRent = 2600
WHERE Zip = 53160;

UPDATE houses
SET ImageUrl = 'https://pm1.narvii.com/6610/4913e9ce077b8fee2aa08ff5736c46b3fb4ccd8c_hq.jpg',
MonthlyMorgage = 3000,
DesiredRent = 3750
WHERE Zip = 60383;

UPDATE houses
SET ImageUrl = 'https://www.puclpodcast.com/wp-content/uploads/2017/09/pokemon-63-01.png',
MonthlyMorgage = 3300, 
DesiredRent = 4125
WHERE Zip = 17800;




