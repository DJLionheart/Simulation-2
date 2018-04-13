CREATE TABLE IF NOT EXISTS houses (
    HouseId SERIAL PRIMARY KEY NOT NULL,
    PropertyName VARCHAR,
    Address VARCHAR,
    City VARCHAR,
    State VARCHAR,
    Zip INTEGER,
    ImageUrl VARCHAR,
    MonthlyMorgage INTEGER,
    DesiredRent INTEGER
)

--Initial Data for Houses Table
INSERT INTO houses (PropertyName, Address, City, State, Zip, ImageUrl, MonthlyMorgage, DesiredRent)
VALUES ('The Barn House', '22 Rustic Lane',	'Podunk', 'ID',	87309, 'http://www.sandcreekpostandbeam.com/galleries/imgs/main/thumbs/homes-great-plains-western-horse-barn-NPE814-barnhomeMainImage.jpg', 1500, 1850),
('Little Blue', '1 Azure Lane',	'Cerulean City', 'KT',	27384, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Mml1njXIMaxvgb_tNurQ5MuQ96ew_sx0cVmBDSV3TG32WR5f9Q', 1100, 1375),
('Ash Ketchams House', 'Number 1 Starters Lane', 'Pallet Town',	'KT', 13400, 'https://i.imgur.com/0V75ETX.jpg', 1900, 2375),
('The Garden Shop',	'62 SW Shoten Avenue', 'Goldenrod City', 'JT', 53160, 'https://cdn.bulbagarden.net/upload/6/65/Goldenrod_City_HGSS.png', 2100, 2600),
('The Bell Tower', 'Number 4 Pagoda Circle', 'Ecruteak', 'JT', 60383, 'https://pm1.narvii.com/6610/4913e9ce077b8fee2aa08ff5736c46b3fb4ccd8c_hq.jpg', 3000, 3750),
('Viridian City Gym', '23 PokeMaster Blvd', 'Viridian City', 'KT', 17800, 'https://www.puclpodcast.com/wp-content/uploads/2017/09/pokemon-63-01.png', 3300, 4125)

